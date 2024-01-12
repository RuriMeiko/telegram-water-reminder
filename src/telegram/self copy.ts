import BotModel from "./core";
import { type InlineKeyboard } from "./data";

export default class randomfoodBot extends BotModel {
	constructor(config: any) {
		super(config);
	}
	// processType
	async processText(request: any) {
		console.log("eyyy");
	}
	async processPhoto(request: any) {
		console.log("eyyy");
	}
	async processVideo(request: any) {
		console.log("eyyy");
	}
	async processAnimation(request: any) {
		console.log("eyyy");
	}
	async processLocaiton(request: any) {
		console.log("eyyy");
	}
	async processPoll(request: any) {
		console.log("eyyy");
	}
	async processContact(request: any) {
		console.log("eyyy");
	}
	async processDice(request: any) {
		console.log("eyyy");
	}
	async processSticker(request: any) {
		console.log("eyyy");
	}
	async processReply(request: any) {
		console.log("eyyy");
	}
	async unDefine(request: any) {
		console.log("eyyy");
	}
	// bot command: /start
	async start(req: any, content: string | null) {
		interface UserInfo {
			username: string;
			fullName: string;
			sleeptime: string | null;
			waketime: string | null;
			weight: string | null;
			height: string | null;
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
			sleeptime: null,
			waketime: null,
			weight: null,
			height: null,
		};
		const setting: settingInfo = {
			status: false,
			autoTime: true,
			autoWater: true,
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
		await this.sendMessage(welcomeText, this.message.chat.id, this.message.message_thread_id);
	}
	async about(req: any, content: string | null) {
		const text = "Bot này tạo ra bởi <b>nthl</b> aka <b>rurimeiko</b> ヽ(✿ﾟ▽ﾟ)ノ";
		return await this.sendMessage(text, this.message.chat.id);
	}
	async help(req: any, content: string | null) {
		// const text = "help mi";
		const text = await this.database.db("water_reminder").collection("user_info").find();
		return await this.sendMessage(
			this.makeHtmlCode(JSON.stringify(text, null, 2), "JSON"),
			this.message.chat.id
		);
	}
	async setting(req: any, content: string | null, callback?: boolean, status?: boolean) {
		// const text = "help mi";

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
		const setting_user = await this.database
			.db("water_reminder")
			.collection("setting")
			.findOne({ filter: { _id: this.message.from.id } });
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
		const data_user = await this.database
			.db("water_reminder")
			.collection("user_info")
			.findOne({ filter: { _id: this.message.from.id } });
		if (!callback)
			return await this.sendMessage(
				`ID: <code>${data_user.document._id}</code>\nTên: <code>${data_user.document.fullName}</code>\nUsername: <code>${data_user.document.username}</code>\nCân nặng: <code>${data_user.document.weight}</code>\nChiều cao: <code>${data_user.document.height}</code>\nThời gian ngủ: <code>${data_user.document.sleeptime}</code>\nThời gian thức: <code>${data_user.document.waketime}</code>\n`,
				chatId,
				thread_id,
				inline_keyboard
			);
		return await this.editMessage(
			`ID: <code>${data_user.document._id}</code>\nTên: <code>${data_user.document.fullName}</code>\nUsername: <code>${data_user.document.username}</code>\nCân nặng: <code>${data_user.document.weight}</code>\nChiều cao: <code>${data_user.document.height}</code>\nThời gian ngủ: <code>${data_user.document.sleeptime}</code>\nThời gian thức: <code>${data_user.document.waketime}</code>\n`,
			chatId,
			this.message.message.message_id,
			inline_keyboard
		);
	}
	private async waterCallback(id: number, on: boolean = true) {
		await this.database
			.db("water_reminder")
			.collection("setting")
			.updateOne({
				filter: { _id: this.message.from.id },
				update: { $set: { autoWater: on } },
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
			[{ text: "Đặt lượng nước cần uống một ngày 🌊", callback_data: "water_set" }],
			[{ text: "Quay lại 👈", callback_data: "setting" }],
		];
		await this.editMessage(
			`Chức năng tự động tính lượng nước dựa trên <b>cân nặng</b> và <b>chiều cao</b>, tắt chức năng tự động để có thể dùng lượng nước tự đặt 💦`,
			this.message.message.chat.id,
			this.message.message.message_id,
			inline_keyboard
		);
	}
	private async timeCallback(id: number, on: boolean = true) {
		await this.database
			.db("water_reminder")
			.collection("setting")
			.updateOne({
				filter: { _id: this.message.from.id },
				update: { $set: { autoTime: on } },
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
			[{ text: "Đặt thời gian nhắc lại", callback_data: "time_set" }],
			[{ text: "Quay lại 👈", callback_data: "setting" }],
		];

		await this.editMessage(
			`Chức năng tự động tính thời gian nhắc dựa trên <b>thời gian thức</b> và <b>thời gian ngủ</b>, tắt chức năng tự động để có thể dùng khoảng thời gian tự đặt ⏲`,
			this.message.message.chat.id,
			this.message.message.message_id,
			inline_keyboard
		);
	}

	async handleCallback(request: any) {
		this.message = request.content.callback_query;
		const inline_keyboard: InlineKeyboard = [[{ text: "Huỷ 🕳", callback_data: "cancel" }]];
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
					`Gửi tớ thời gian ngủ của cậu nhé 😪\nHãy dùng như ví dụ này: <code>07:00</code>\nĐịnh dạng giờ là 24h nha cậu 😶‍🌫️`,
					this.message.message.chat.id,
					this.message.message.message_id,
					inline_keyboard
				);
				return await this.answerCallbackQuery(this.message.id);
			case "waketime":
				await this.editMessage(
					`Gửi tớ thời gian thức của cậu nhé 🤭\nHãy dùng như ví dụ này: <code>22:00</code>\nĐịnh dạng giờ là 24h nha cậu 😶‍🌫️`,
					this.message.message.chat.id,
					this.message.message.message_id,
					inline_keyboard
				);
				return await this.answerCallbackQuery(this.message.id);
			case "weight":
				await this.editMessage(
					`Gửi tớ cân nặng của cậu nhé 🤭\nHãy dùng như ví dụ này: <code>63.4</code> hoặc <code>60</code>\nĐịnh dạng số thực hoặc số nguyên, đơn vị là <b>kg</b> 😶‍🌫️`,
					this.message.message.chat.id,
					this.message.message.message_id,
					inline_keyboard
				);
				return await this.answerCallbackQuery(this.message.id);
			case "height":
				await this.editMessage(
					`Gửi tớ chiều cao của cậu nhé 🤭\nHãy dùng như ví dụ này: <code>163.4</code> hoặc <code>160</code>\nĐịnh dạng số thực hoặc số nguyên, đơn vị là <b>cm</b> 😶‍🌫️`,
					this.message.message.chat.id,
					this.message.message.message_id,
					inline_keyboard
				);
				return await this.answerCallbackQuery(this.message.id);
			case "setting":
				await this.setting(request, null, true);
				return await this.answerCallbackQuery(this.message.id);
			case "auto_time_true":
				await this.timeCallback(this.message.from.id);
				return await this.answerCallbackQuery(
					this.message.id,
					"Thời gian nhắc lại đã đặt thành tự động",
					true
				);
			case "auto_water_true":
				await this.waterCallback(this.message.from.id);
				return await this.answerCallbackQuery(
					this.message.id,
					"Lượng nước đã đặt thành tự động",
					true
				);
			case "auto_time_false":
				await this.timeCallback(this.message.from.id, false);
				return await this.answerCallbackQuery(
					this.message.id,
					"Thời gian nhắc lại đã đặt thành thủ công",
					true
				);
			case "auto_water_false":
				await this.waterCallback(this.message.from.id, false);
				return await this.answerCallbackQuery(
					this.message.id,
					"Lượng nước đã đặt thành thủ công",
					true
				);
			case "water_set":
				console.log("x");
				return await this.answerCallbackQuery(this.message.id);
			case "time_set":
				console.log("x");
				return await this.answerCallbackQuery(this.message.id);
			case "cancel":
				console.log("x");
				return await this.answerCallbackQuery(this.message.id);
		}
	}
}
