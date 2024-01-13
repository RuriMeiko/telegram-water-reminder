import botModel from "./core";
export default class HandlerCrons extends botModel {
	private timezone: number;
	constructor(configs: any) {
		super(configs);
		this.timezone = 7;
	}
	async updateGlobalValues(id: number, time?: string) {
		// console.log("RESET GIÁ TRỊ");
		// Khai báo các biến thời gian
		const WAKE_TIME = new Date();
		const SLEEP_TIME = new Date();
		const TIME_RESET = new Date();
		const CURTIME = new Date();

		const GLOBAL_INFO = await this.database
			.db("water_reminder")
			.collection("user_info")
			.findOne({
				filter: { _id: id },
			});

		const SETTING_INFO = await this.database
			.db("water_reminder")
			.collection("setting")
			.findOne({
				filter: { _id: id },
			});
		const [Whour, Wminute] = GLOBAL_INFO.document.waketime.split(":").map(Number);
		const [Shour, Sminute] = GLOBAL_INFO.document.sleeptime.split(":").map(Number);

		// Thiết lập giá trị cho các biến và chuẩn hoá múi giờ cho các biến thời gian
		CURTIME.setHours(CURTIME.getHours() + this.timezone);
		WAKE_TIME.setHours(WAKE_TIME.getHours() + this.timezone);
		WAKE_TIME.setHours(Whour);
		WAKE_TIME.setMinutes(Wminute);
		SLEEP_TIME.setHours(SLEEP_TIME.getHours() + this.timezone);
		SLEEP_TIME.setHours(Shour);
		SLEEP_TIME.setMinutes(Sminute);
		TIME_RESET.setHours(TIME_RESET.getHours() + this.timezone);
		TIME_RESET.setDate(TIME_RESET.getDate() + 1);
		TIME_RESET.setHours(Whour);
		TIME_RESET.setMinutes(Wminute);
		// // Debug

		// console.log("Time wake là ", WAKE_TIME.toLocaleString());
		// console.log("Time sleep là ", SLEEP_TIME.toLocaleString());
		// console.log("Time reset là ", TIME_RESET.toLocaleString());
		// Tính thời gian thức và lưu vào biến hoursAwake
		const hoursAwake = Math.round(
			(new Date(SLEEP_TIME).getTime() - new Date(WAKE_TIME).getTime()) / (1000 * 60 * 60)
		);
		// Tính toán lượng nước mỗi ngày cần uống theo BMI và lưu vào biến waterIntake
		let waterIntake: number;

		if (SETTING_INFO.document.autoWater)
			waterIntake = await this.tinhLuongNuocTheoBMI(
				GLOBAL_INFO.document.weight,
				GLOBAL_INFO.document.height
			);
		else waterIntake = GLOBAL_INFO.document.waterTotal;

		// Tính toán số lần uống nước dựa trên lượng nước và số nước mỗi lần uống, lưu vào biến numIntakes
		const numIntakes = Math.round(waterIntake / GLOBAL_INFO.document.waterDrink);
		let timeDelay: number;

		if (SETTING_INFO.document.autoTime) timeDelay = Math.round((hoursAwake / numIntakes) * 60);
		else timeDelay = GLOBAL_INFO.document.notiTime;
		let count: number = 0;
		if (time) {
			const intervalMs = timeDelay * 60 * 1000;
			count = 0;
			while (new Date(WAKE_TIME).getTime() + count * intervalMs <= CURTIME.getTime()) {
				count++;
			}
		}
		// Tính toán khoảng cách giữa các giờ uống nước và lưu vào biến timeDelay
		await this.database
			.db("water_reminder")
			.collection("water_info")
			.updateOne({
				filter: { _id: id },
				update: {
					$set: {
						WAKE_TIME: { $date: WAKE_TIME },
						SLEEP_TIME: { $date: SLEEP_TIME },
						TIME_RESET: { $date: TIME_RESET },
						hoursAwake: { $numberInt: hoursAwake.toString() },
						waterIntake: { $numberInt: waterIntake.toString() },
						numIntakes: { $numberInt: numIntakes.toString() },
						timeDelay: { $numberInt: timeDelay.toString() },
						count: count,
						done: false,
					},
				},
				upsert: true,
			});
	}
	// Hàm tính lượng nước cần uống
	private async tinhLuongNuocTheoBMI(canNang: number, chieuCao: number) {
		return new Promise<number>((resolve, reject) => {
			// Chuyển chiều cao từ đơn vị cm sang đơn vị mét
			chieuCao = chieuCao / 100;
			// Tính chỉ số khối cơ thể (BMI)
			const bmi = canNang / Math.pow(chieuCao, 2);
			// Tính lượng nước cần thiết dựa trên BMI
			let luongNuoc = 0;
			if (bmi < 18.5) {
				luongNuoc = canNang * 0.03;
			} else if (bmi < 25) {
				luongNuoc = canNang * 0.04;
			} else if (bmi < 30) {
				luongNuoc = canNang * 0.05;
			} else {
				luongNuoc = canNang * 0.06;
			}
			// Trả về kết quả bằng lượng nước tính được (đơn vị ml)
			resolve(luongNuoc * 1000);
		});
	}

	async handleScheduled(id: number) {
		const GLOBAL_INFO = await this.database
			.db("water_reminder")
			.collection("user_info")
			.findOne({
				filter: { _id: id },
			});
		const GLOBAL_SETTING = await this.database
			.db("water_reminder")
			.collection("setting")
			.findOne({
				filter: { _id: id },
			});
		const WATER_INFO = await this.database
			.db("water_reminder")
			.collection("water_info")
			.findOne({
				filter: { _id: id },
			});
		// Hàm tính toán thời gian tiếp theo ún nước
		const getNextIntakeTime = () => {
			const intervalMs = WATER_INFO.document.timeDelay * 60 * 1000;
			let count = WATER_INFO.document.count;
			return new Date(WATER_INFO.document.WAKE_TIME).getTime() + count * intervalMs;
		};

		// Hàm gửi thông báo tới bbp đồng thời tăng biến count để hàm tính toán thời gian uống nước được thay đổi
		const sendNotification = async () => {
			await this.database
				.db("water_reminder")
				.collection("water_info")
				.updateOne({
					filter: { _id: id },
					update: {
						$set: { count: WATER_INFO.document.count + 1 },
					},
				});
			await this.sendMessage("Uống nước đi 😡", id);
		};

		// Lấy thời gian hiện tại và chuẩn hoá múi giờ sang +7
		const currentTime = new Date();
		currentTime.setHours(currentTime.getHours() + this.timezone);
		// await this.sendMessage(
		// 	`Thời gian hiện tại ${id}: ${currentTime.toLocaleString()}`,
		// 	1775446945
		// );
		// console.log("Thời gian hiện tại: ", currentTime.toLocaleString());
		// Lấy thời gian uống nước tiếp theo
		const nextIntakeTime = getNextIntakeTime();
		// await this.sendMessage(
		// 	`Thời gian uống nước ${id}:  ${new Date(nextIntakeTime).toLocaleString()}`,
		// 	1775446945
		// );
		const count_check = WATER_INFO.document.count;
		// Kiểm tra nếu count mà nhỏ hơn numIntakes tức là chưa uống đủ nước
		const numIntakes_check = WATER_INFO.document.numIntakes;
		if (count_check < numIntakes_check) {
			// Kiểm tra nếu thời gian hiện tại lớn hơn hoặc bằng thời gian uống nước
			if (currentTime.getTime() >= nextIntakeTime) {
				await sendNotification();
			}
		}
		// Ngược lại
		else {
			const water_today = WATER_INFO.document.count * GLOBAL_INFO.document.waterDrink;
			const water_need = GLOBAL_INFO.document.waterTotal;
			if (water_need <= water_today && !WATER_INFO.document.done) {
				await this.sendMessage(
					"Chúc mừng, cậu đã uống đủ nước cho hôm nay 😎\nHãy cố gắng vào ngày mai nhé!🥳",
					id
				);
				await this.database
					.db("water_reminder")
					.collection("water_info")
					.updateOne({
						filter: { _id: id },
						update: {
							$set: {
								done: true,
							},
						},
						upsert: true,
					});
				if (GLOBAL_SETTING.document.wake)
					await this.database
						.db("water_reminder")
						.collection("setting")
						.updateOne({
							filter: { _id: this.message.from.id },
							update: { $set: { status: false } },
						});
				const TIME_RESET = new Date(WATER_INFO.document.TIME_RESET);
				// So sánh nếu thời gian hiện tại >= thời gian bbp thức dậy sớm hơn 10 phút
				if (currentTime.getTime() >= TIME_RESET.getTime() - 600000) {
					// Reset các giá trị, update lại ngày tháng cho các biến thời gian
					await this.updateGlobalValues(id);
				}
			}
		}
	}
}
