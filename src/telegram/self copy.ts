import { type InlineKeyboard } from "./data";
import BotModel from "./cron";

export default class randomfoodBot extends BotModel {
	constructor(config: any) {
		super(config);
	}
	// processType
	async processText(request: any) {
		const curCommand = await this.database
			.db("water_reminder")
			.collection("command")
			.findOne({
				filter: { _id: this.message.from.id },
			});
		if (curCommand.document) {
			const inline_keyboard: InlineKeyboard = [
				[{ text: "Quay lại 👈", callback_data: "setting" }],
			];

			switch (curCommand.document.command) {
				case "sleeptime":
					const sleeptime = this.message.text;
					const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
					// Kiểm tra chính quy
					if (!timeFormat.test(sleeptime)) {
						return await this.sendMessage(
							"Đặt thời gian ngủ không thành công\nVui lòng đọc kỹ hướng dẫn và thử lại 😌",
							this.message.chat.id
						);
					}
					await this.database
						.db("water_reminder")
						.collection("user_info")
						.updateOne({
							filter: { _id: this.message.from.id },
							update: { $set: { sleeptime: sleeptime } },
							upsert: true,
						});
					await this.editMessage(
						"Đặt thời gian ngủ thành công~ 😴",
						this.message.chat.id,
						curCommand.document.messageId,
						inline_keyboard
					);
					break;
				case "waketime":
					const waketime = this.message.text;
					// Kiểm tra chính quy
					const timeFormat2 = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
					if (!timeFormat2.test(waketime)) {
						return await this.sendMessage(
							"Đặt thời gian thức không thành công\nVui lòng đọc kỹ hướng dẫn và thử lại 😌",
							this.message.chat.id
						);
					}
					await this.database
						.db("water_reminder")
						.collection("user_info")
						.updateOne({
							filter: { _id: this.message.from.id },
							update: { $set: { waketime: waketime } },
							upsert: true,
						});
					await this.editMessage(
						"Đặt thời gian thức thành công~ 😋",
						this.message.chat.id,
						curCommand.document.messageId,
						inline_keyboard
					);
					break;
				case "weight":
					const weight = this.message.text;
					// Kiểm tra chính quy
					const check_weight = /\b(?:[1-9]\d|1\d{2}|200|2[0-9]{2}|300)\b/;
					if (!check_weight.test(weight)) {
						return await this.sendMessage(
							"Đặt cân nặng không thành công\nVui lòng đọc kỹ hướng dẫn và thử lại 😌",
							this.message.chat.id
						);
					}
					await this.database
						.db("water_reminder")
						.collection("user_info")
						.updateOne({
							filter: { _id: this.message.from.id },
							update: { $set: { weight: { $numberInt: weight } } },
							upsert: true,
						});
					await this.editMessage(
						"Đặt cân nặng thành công~ 🙄",
						this.message.chat.id,
						curCommand.document.messageId,
						inline_keyboard
					);
					break;
				case "height":
					const height = this.message.text;
					// Kiểm tra chính quy
					const check_height = /\b(?:[1-9]\d|1\d{2}|200|2[0-9]{2}|300)\b/;

					if (!check_height.test(height)) {
						return await this.sendMessage(
							"Đặt chiều cao không thành công\nVui lòng đọc kỹ hướng dẫn và thử lại 😌",
							this.message.chat.id
						);
					}
					await this.database
						.db("water_reminder")
						.collection("user_info")
						.updateOne({
							filter: { _id: this.message.from.id },
							update: { $set: { height: { $numberInt: height } } },
							upsert: true,
						});
					await this.editMessage(
						"Đặt chiều cao thành công~ 🙄",
						this.message.chat.id,
						curCommand.document.messageId,
						inline_keyboard
					);
					break;
				case "water_set":
					const waterTotal = this.message.text;
					// Kiểm tra chính quy
					const WaterFormat = /^(?:[1-5]\d{0,3}|6000)$/;
					if (!WaterFormat.test(waterTotal)) {
						return await this.sendMessage(
							"Đặt tổng lượng nước trong một ngày không thành công\nVui lòng đọc kỹ hướng dẫn và thử lại 😌",
							this.message.chat.id
						);
					}
					await this.database
						.db("water_reminder")
						.collection("user_info")
						.updateOne({
							filter: { _id: this.message.from.id },
							update: { $set: { waterTotal: { $numberInt: waterTotal } } },
							upsert: true,
						});
					await this.editMessage(
						"Đặt tổng lượng nước trong một ngày thành công~ 🙄",
						this.message.chat.id,
						curCommand.document.messageId,
						inline_keyboard
					);
					break;
				case "water_amo_set":
					const waterDrink = this.message.text;
					// Kiểm tra chính quy
					const waterDrinkFormat = /^(?:[1-9]\d{0,2}|1000)$/;
					if (!waterDrinkFormat.test(waterDrink)) {
						return await this.sendMessage(
							"Đặt lượng nước uống không thành công\nVui lòng đọc kỹ hướng dẫn và thử lại 😌",
							this.message.chat.id
						);
					}
					await this.database
						.db("water_reminder")
						.collection("user_info")
						.updateOne({
							filter: { _id: this.message.from.id },
							update: { $set: { waterDrink: { $numberInt: waterDrink } } },
							upsert: true,
						});

					await this.editMessage(
						"Đặt lượng nước uống thành công~ 🙄",
						this.message.chat.id,
						curCommand.document.messageId,
						inline_keyboard
					);
					break;
				case "time_set":
					const notiTime = this.message.text;
					const timeFormat3 = /\b(?:[1-9]\d|1\d{2}|200|2[0-9]{2}|300)\b/;
					// Kiểm tra chính quy
					if (!timeFormat3.test(notiTime)) {
						return await this.sendMessage(
							"Đặt thời gian nhắc uống nước không thành công\nVui lòng đọc kỹ hướng dẫn và thử lại 😌",
							this.message.chat.id
						);
					}
					await this.database
						.db("water_reminder")
						.collection("user_info")
						.updateOne({
							filter: { _id: this.message.from.id },
							update: { $set: { notiTime: { $numberInt: notiTime } } },
							upsert: true,
						});
					await this.editMessage(
						"Đặt thời gian nhắc uống nước thành công~ 😴",
						this.message.chat.id,
						curCommand.document.messageId,
						inline_keyboard
					);
					break;
			}
			await this.database
				.db("water_reminder")
				.collection("command")
				.deleteOne({
					filter: { _id: this.message.from.id },
				});
		}
	}
	async unDefine(request: any) {
		console.log("eyyy");
	}
	// bot command: /start
	async start(req: any, content: string | null) {
		interface UserInfo {
			username: string;
			fullName: string;
			sleeptime: string | undefined;
			waketime: string | undefined;
			weight: string | undefined;
			height: string | undefined;
			waterTotal: string | undefined;
			waterDrink: string | undefined;
			notiTime: string | undefined;
		}
		interface settingInfo {
			autoTime: boolean;
			autoWater: boolean;
			status: boolean;
		}
		const first_name: string = this.message.from.first_name;
		const last_name: string = this.message.from.last_name ? this.message.from.last_name : "";
		const user_info: UserInfo = {
			username: this.message.from.username,
			fullName: last_name !== "" ? `${first_name} ${last_name}` : first_name,
			sleeptime: undefined,
			waketime: undefined,
			weight: undefined,
			height: undefined,
			waterTotal: undefined,
			waterDrink: undefined,
			notiTime: undefined,
		};
		const setting: settingInfo = {
			status: false,
			autoTime: false,
			autoWater: false,
		};
		const botinfo = await this.getMe();
		await this.database
			.db("water_reminder")
			.collection("user_info")
			.updateOne({
				filter: { _id: this.message.from.id },
				update: { $set: user_info },
				upsert: true,
			});
		await this.database
			.db("water_reminder")
			.collection("setting")
			.updateOne({
				filter: { _id: this.message.from.id },
				update: { $set: setting },
				upsert: true,
			});
		const welcomeText = `Chào mừng <b>${user_info.fullName}</b> đến với <b>${botinfo.first_name}</b>\nBấm vào /help để xem chỉ dẫn nha 😉`;
		return await this.sendMessage(
			welcomeText,
			this.message.chat.id,
			this.message.message_thread_id
		);
	}
	async wake(req: any, content: string | null) {
		function getCurrentTime(): string {
			const now = new Date();
			const hours = now.getHours().toString().padStart(2, "0");
			const minutes = now.getMinutes().toString().padStart(2, "0");
			return `${hours}:${minutes}`;
		}
		try {
			await this.database
				.db("water_reminder")
				.collection("user_info")
				.updateOne({
					filter: { _id: this.message.from.id },
					update: { $set: { waketime: getCurrentTime() } },
					upsert: true,
				});
			await this.updateGlobalValues(this.message.from.id);
			return await this.sendMessage(
				"Cậu dậy rồi ư?, bắt đầu uống nước ngày hôm nay nhé! 😎",
				this.message.chat.id,
				this.message.message_thread_id
			);
		} catch (error) {
			return await this.sendMessage(
				"Có lỗi xảy ra roài, hãy chắc chắn cậu đã điền đủ thông tin trong /setting, nếu lỗi vẫn có hãy liên hệ @rurimeiko 😎",
				this.message.chat.id,
				this.message.message_thread_id
			);
		}
	}
	async about(req: any, content: string | null) {
		const text = "Bot này tạo ra bởi <b>nthl</b> aka <b>rurimeiko</b> ヽ(✿ﾟ▽ﾟ)ノ";
		return await this.sendMessage(text, this.message.chat.id);
	}
	async help(req: any, content: string | null) {
		// const text = "help mi";
		const text = `Các lệnh như sau:\n\n/start Tạo tài khoảng mới 🆕\n\n/wake Thông báo là vừa thức dậy, bot sẽ bắt đầu nhắc cậu uống nước kể từ lúc này (thời gian cậu bấm /wake sẽ lưu sang ngày hôm sau, tức hôm sau không cần bấm /wake bot vẫn nhớ và nhắc cậu uống nước kể từ lúc đó, có thể bấm /wake để reset lại ➰\n\n/setting Cài đặt các thông tin cơ bản để có thể sử dụng bot 🌒\n\n/about about me 🌟`;
		return await this.sendMessage(text, this.message.chat.id, this.message.message_thread_id);
	}
	async setting(req: any, content: string | null, callback?: boolean, status?: boolean) {
		let chatId: number;
		let thread_id: number;
		if (callback) {
			await this.database
				.db("water_reminder")
				.collection("setting")
				.updateOne({
					filter: { _id: this.message.from.id },
					update: { $set: { status: status } },
				});
			this.message = req.content.callback_query;
			chatId = this.message.message.chat.id;
			thread_id = this.message.message.message_thread_id;
		} else {
			chatId = this.message.chat.id;
			thread_id = this.message.message_thread_id;
		}
		await this.database
			.db("water_reminder")
			.collection("command")
			.deleteOne({
				filter: { _id: this.message.from.id },
			});
		const data_user = await this.database
			.db("water_reminder")
			.collection("user_info")
			.findOne({ filter: { _id: this.message.from.id } });
		if (callback && status)
			if (
				data_user.document.height &&
				data_user.document.sleeptime &&
				data_user.document.waketime &&
				data_user.document.waterDrink &&
				data_user.document.waterTotal &&
				data_user.document.weight &&
				data_user.document.notiTime
			) {
				await this.updateGlobalValues(this.message.from.id);
			} else {
				await this.database
					.db("water_reminder")
					.collection("setting")
					.updateOne({
						filter: { _id: this.message.from.id },
						update: { $set: { status: false } },
					});
				return await this.sendMessage(
					`Cần điền đủ thông tin để bắt đầu, vui lòng cung cấp các thông tin tối thiểu trong /setting!`,
					chatId,
					thread_id
				);
			}

		const setting_user = await this.database
			.db("water_reminder")
			.collection("setting")
			.findOne({ filter: { _id: this.message.from.id } });
		if (setting_user.document) {
			const inline_keyboard: InlineKeyboard = [
				[
					{
						text: `Trạng thái thông báo ${setting_user.document.status ? "⭕" : "❌"}`,
						callback_data: `status_${!setting_user.document.status}`,
					},
				],
				[
					{ text: "Cân nặng 👞", callback_data: "weight" },
					{ text: "Chiều cao 🥼", callback_data: "height" },
				],
				[
					{ text: "Giờ ngủ 💤", callback_data: "sleeptime" },
					{ text: "Giờ thức 🌅", callback_data: "waketime" },
				],
				[{ text: "Lượng nước 💧", callback_data: "water" }],
				[
					{
						text: "Khoảng thời gian nhắc lại ⏳",
						callback_data: "time",
					},
				],
			];

			if (!callback)
				return await this.sendMessage(
					`ID: <code>${data_user.document._id}</code>\nTên: <code>${
						data_user.document.fullName
					}</code>\nUsername: <code>${
						data_user.document.username
					}</code>\nCân nặng: <code>${
						data_user.document.weight
							? data_user.document.weight + " kg"
							: "Chưa đặt 🔴"
					}</code>\nChiều cao: <code>${
						data_user.document.height
							? data_user.document.height + " cm"
							: "Chưa đặt 🔴"
					}</code>\nThời gian ngủ: <code>${
						data_user.document.sleeptime ? data_user.document.sleeptime : "Chưa đặt 🔴"
					}</code>\nThời gian thức: <code>${
						data_user.document.waketime ? data_user.document.waketime : "Chưa đặt 🔴"
					}</code>\nLượng nước tổng: <code>${
						data_user.document.waterTotal
							? data_user.document.waterTotal + " ml"
							: "Chưa đặt 🔴"
					}</code>\nLượng nước uống: <code>${
						data_user.document.waterDrink
							? data_user.document.waterDrink + " ml"
							: "Chưa đặt 🔴"
					}</code>\nThời gian nhắc lại: <code>${
						data_user.document.notiTime
							? data_user.document.notiTime + " phút"
							: "Chưa đặt 🔴"
					}</code>`,
					chatId,
					thread_id,
					inline_keyboard
				);
			return await this.editMessage(
				`ID: <code>${data_user.document._id}</code>\nTên: <code>${
					data_user.document.fullName
				}</code>\nUsername: <code>${data_user.document.username}</code>\nCân nặng: <code>${
					data_user.document.weight ? data_user.document.weight + " kg" : "Chưa đặt 🔴"
				}</code>\nChiều cao: <code>${
					data_user.document.height ? data_user.document.height + " cm" : "Chưa đặt 🔴"
				}</code>\nThời gian ngủ: <code>${
					data_user.document.sleeptime ? data_user.document.sleeptime : "Chưa đặt 🔴"
				}</code>\nThời gian thức: <code>${
					data_user.document.waketime ? data_user.document.waketime : "Chưa đặt 🔴"
				}</code>\nLượng nước tổng: <code>${
					data_user.document.waterTotal
						? data_user.document.waterTotal + " ml"
						: "Chưa đặt 🔴"
				}</code>\nLượng nước uống: <code>${
					data_user.document.waterDrink
						? data_user.document.waterDrink + " ml"
						: "Chưa đặt 🔴"
				}</code>\nThời gian nhắc lại: <code>${
					data_user.document.notiTime
						? data_user.document.notiTime + " phút"
						: "Chưa đặt 🔴"
				}</code>`,
				chatId,
				this.message.message.message_id,
				inline_keyboard
			);
		}
		return await this.sendMessage(
			`Không tìm thấy dữ liệu tài khoảng\nNhấn gửi /start để đăng ký mới!`,
			chatId,
			thread_id
		);
	}
	private async waterCallback(id: number, on?: boolean) {
		const data_user = await this.database
			.db("water_reminder")
			.collection("user_info")
			.findOne({ filter: { _id: this.message.from.id } });
		if (on) {
			if (!data_user.document.height || !data_user.document.weight) {
				await this.sendMessage(
					`Cần điền đủ thông tin để bắt đầu, vui lòng cung cấp các thông tin tối thiểu trong /setting! <b>(Chiều cao và cân nặng)</b>`,
					this.message.message.chat.id,
					this.message.message.message_thread_id
				);
				return await this.answerCallbackQuery(
					this.message.id,
					"Đặt lượng nước thất bại!",
					true
				);
			}
		} else if (on === false) {
			if (!data_user.document.waterTotal) {
				await this.sendMessage(
					`Cần điền đủ thông tin để bắt đầu, vui lòng cung cấp các thông tin tối thiểu trong /setting! <b>(Lượng nước)</b>`,
					this.message.message.chat.id,
					this.message.message.message_thread_id
				);
				return await this.answerCallbackQuery(
					this.message.id,
					"Đặt lượng nước thất bại!",
					true
				);
			}
		}
		await this.database
			.db("water_reminder")
			.collection("setting")
			.updateOne({
				filter: { _id: this.message.from.id },
				update: { $set: { autoWater: on } },
				upsert: true,
			});
		const setting_user = await this.database
			.db("water_reminder")
			.collection("setting")
			.findOne({ filter: { _id: this.message.from.id } });

		const inline_keyboard: InlineKeyboard = [
			[
				{
					text: `Tự động ${setting_user.document.autoWater ? "⭕" : "❌"}`,
					callback_data: `auto_water_${!setting_user.document.autoWater}`,
				},
			],
			[
				{ text: "Đặt lượng nước 🌊", callback_data: "water_set" },
				{ text: "Đặt lượng uống 🥤", callback_data: "water_amo_set" },
			],
			[{ text: "Quay lại 👈", callback_data: "setting" }],
		];
		await this.editMessage(
			`Chức năng tự động tính lượng nước dựa trên <b>cân nặng</b> và <b>chiều cao</b>, tắt chức năng tự động để có thể dùng lượng nước tự đặt 💦`,
			this.message.message.chat.id,
			this.message.message.message_id,
			inline_keyboard
		);
		if (on) {
			return await this.answerCallbackQuery(
				this.message.id,
				"Lượng nước đã đặt thành tự động",
				true
			);
		} else if (on === false)
			return await this.answerCallbackQuery(
				this.message.id,
				"Lượng nước đã đặt thành thủ công",
				true
			);
	}
	private async timeCallback(id: number, on?: boolean) {
		const data_user = await this.database
			.db("water_reminder")
			.collection("user_info")
			.findOne({ filter: { _id: this.message.from.id } });
		if (on) {
			if (!data_user.document.sleeptime || !data_user.document.waketime) {
				await this.sendMessage(
					`Cần điền đủ thông tin để bắt đầu, vui lòng cung cấp các thông tin tối thiểu trong /setting! <b>(Thời gian ngủ và thời gian thức)</b>`,
					this.message.message.chat.id,
					this.message.message.message_thread_id
				);
				return await this.answerCallbackQuery(
					this.message.id,
					"Đặt thời gian nhắc lại thất bại!",
					true
				);
			}
		} else if (on === false) {
			if (!data_user.document.notiTime) {
				await this.sendMessage(
					`Cần điền đủ thông tin để bắt đầu, vui lòng cung cấp các thông tin tối thiểu trong /setting! <b>(Thời gian nhắc lại)</b>`,
					this.message.message.chat.id,
					this.message.message.message_thread_id
				);
				return await this.answerCallbackQuery(
					this.message.id,
					"Đặt thời gian nhắc lại thất bại!",
					true
				);
			}
		}
		await this.database
			.db("water_reminder")
			.collection("setting")
			.updateOne({
				filter: { _id: this.message.from.id },
				update: { $set: { autoTime: on } },
				upsert: true,
			});
		const setting_user = await this.database
			.db("water_reminder")
			.collection("setting")
			.findOne({ filter: { _id: this.message.from.id } });
		const inline_keyboard: InlineKeyboard = [
			[
				{
					text: `Tự động ${setting_user.document.autoTime ? "⭕" : "❌"}`,
					callback_data: `auto_time_${!setting_user.document.autoTime}`,
				},
			],
			[{ text: "Đặt thời gian nhắc lại ⏳", callback_data: "time_set" }],
			[{ text: "Quay lại 👈", callback_data: "setting" }],
		];

		await this.editMessage(
			`Chức năng tự động tính thời gian nhắc dựa trên <b>thời gian thức</b> và <b>thời gian ngủ</b>, tắt chức năng tự động để có thể dùng khoảng thời gian tự đặt ⏲`,
			this.message.message.chat.id,
			this.message.message.message_id,
			inline_keyboard
		);
		if (on) {
			return await this.answerCallbackQuery(
				this.message.id,
				"Thời gian nhắc lại đã đặt thành tự động",
				true
			);
		} else if (on === false)
			return await this.answerCallbackQuery(
				this.message.id,
				"Thời gian nhắc lại đã đặt thành thủ công",
				true
			);
	}
	async handleCallback(request: any) {
		this.message = request.content.callback_query;
		const inline_keyboard: InlineKeyboard = [[{ text: "Huỷ 🕳", callback_data: "setting" }]];
		switch (this.message.data) {
			case "status_true":
				await this.setting(request, null, true, true);
				return await this.answerCallbackQuery(
					this.message.id,
					"Đã bật thông báo uống nước 💦",
					true
				);
			case "status_false":
				await this.setting(request, null, true, false);
				return await this.answerCallbackQuery(
					this.message.id,
					"Đã tắt thông báo uống nước 💦",
					true
				);
			case "water":
				await this.waterCallback(this.message.from.id);
				return await this.answerCallbackQuery(this.message.id);
			case "time":
				await this.timeCallback(this.message.from.id);
				return await this.answerCallbackQuery(this.message.id);
			case "sleeptime":
				await this.editMessage(
					`Gửi tớ thời gian ngủ của cậu nhé 😪\nHãy gửi tin nhắn như ví dụ này để đặt thời gian ngủ là <b>10h PM</b>:\n\n<code>22:00</code>\n\nĐịnh dạng giờ là 24h nha cậu ⏲`,
					this.message.message.chat.id,
					this.message.message.message_id,
					inline_keyboard
				);
				await this.database
					.db("water_reminder")
					.collection("command")
					.updateOne({
						filter: { _id: this.message.from.id },
						update: {
							$set: {
								messageId: this.message.message.message_id,
								command: "sleeptime",
							},
						},
						upsert: true,
					});
				return await this.answerCallbackQuery(this.message.id);
			case "waketime":
				await this.editMessage(
					`Gửi tớ thời gian thức của cậu nhé 🤭\nHãy gửi tin nhắn như ví dụ này để đặt thời gian thức là <b>07h AM</b>:\n\n<code>07:00</code>\n\nĐịnh dạng giờ là 24h nha cậu ⏲`,
					this.message.message.chat.id,
					this.message.message.message_id,
					inline_keyboard
				);
				await this.database
					.db("water_reminder")
					.collection("command")
					.updateOne({
						filter: { _id: this.message.from.id },
						update: {
							$set: {
								messageId: this.message.message.message_id,
								command: "waketime",
							},
						},
						upsert: true,
					});
				return await this.answerCallbackQuery(this.message.id);
			case "weight":
				await this.editMessage(
					`Gửi tớ cân nặng của cậu nhé 🤭\nHãy gửi tin nhắn như ví dụ này để đặt cân nặng là <b>60kg</b>:\n\n<code>60</code>\n\nĐịnh số nguyên, đơn vị là <b>kg</b> 😶‍🌫️`,
					this.message.message.chat.id,
					this.message.message.message_id,
					inline_keyboard
				);
				await this.database
					.db("water_reminder")
					.collection("command")
					.updateOne({
						filter: { _id: this.message.from.id },
						update: {
							$set: {
								messageId: this.message.message.message_id,
								command: "weight",
							},
						},
						upsert: true,
					});
				return await this.answerCallbackQuery(this.message.id);
			case "height":
				await this.editMessage(
					`Gửi tớ chiều cao của cậu nhé 🤭\nHãy gửi tin nhắn như ví dụ này để đặt chiều cao là <b>1m60</b>:\n\n<code>160</code>\n\nĐịnh số nguyên, đơn vị là <b>cm</b> 😶‍🌫️`,
					this.message.message.chat.id,
					this.message.message.message_id,
					inline_keyboard
				);
				await this.database
					.db("water_reminder")
					.collection("command")
					.updateOne({
						filter: { _id: this.message.from.id },
						update: {
							$set: {
								messageId: this.message.message.message_id,
								command: "height",
							},
						},
						upsert: true,
					});
				return await this.answerCallbackQuery(this.message.id);
			case "setting":
				await this.setting(request, null, true);
				return await this.answerCallbackQuery(this.message.id);
			case "auto_time_true":
				return await this.timeCallback(this.message.from.id, true);

			case "auto_water_true":
				return await this.waterCallback(this.message.from.id, true);

			case "auto_time_false":
				return await this.timeCallback(this.message.from.id, false);

			case "auto_water_false":
				return await this.waterCallback(this.message.from.id, false);

			case "water_set":
				await this.editMessage(
					`Gửi tớ lượng nước tổng của cậu nhé 🤭\nHãy gửi tin nhắn như ví dụ này để đặt lượng nước uống là <b>2 lít rưỡi</b>:\n\n<code>2500</code>\n\nĐịnh dạng số nguyên, đơn vị là <b>ml</b> 💦💧`,
					this.message.message.chat.id,
					this.message.message.message_id,
					inline_keyboard
				);
				await this.database
					.db("water_reminder")
					.collection("command")
					.updateOne({
						filter: { _id: this.message.from.id },
						update: {
							$set: {
								messageId: this.message.message.message_id,
								command: "water_set",
							},
						},
						upsert: true,
					});
				return await this.answerCallbackQuery(this.message.id);
			case "water_amo_set":
				await this.editMessage(
					`Gửi tớ lượng nước mỗi lần uống của cậu nhé 🤭\nHãy gửi tin nhắn như ví dụ này để đặt lượng nước uống là <b>500ml</b>:\n\n<code>500</code>\n\nĐịnh dạng số nguyên, đơn vị là <b>ml</b> 💦💧`,
					this.message.message.chat.id,
					this.message.message.message_id,
					inline_keyboard
				);
				await this.database
					.db("water_reminder")
					.collection("command")
					.updateOne({
						filter: { _id: this.message.from.id },
						update: {
							$set: {
								messageId: this.message.message.message_id,
								command: "water_amo_set",
							},
						},
						upsert: true,
					});
				return await this.answerCallbackQuery(this.message.id);
			case "time_set":
				await this.editMessage(
					`Gửi tớ khoảng thời gian nhắc lại cậu cần đặt nhé 🤭\nHãy gửi tin nhắn như ví dụ này để đặt 30 phút nhắc một lần:\n\n<code>30</code>\n\nĐịnh dạng là <b>phút</b> nhé ⏲`,
					this.message.message.chat.id,
					this.message.message.message_id,
					inline_keyboard
				);
				await this.database
					.db("water_reminder")
					.collection("command")
					.updateOne({
						filter: { _id: this.message.from.id },
						update: {
							$set: {
								messageId: this.message.message.message_id,
								command: "time_set",
							},
						},
						upsert: true,
					});
				return await this.answerCallbackQuery(this.message.id);
		}
	}
}
