import * as utils from "../utils";
import { supportedLanguages, type InlineKeyboard, type supportedLanguagesType } from "./data";
import type MongoDB from "../mongodb/init";
export default class BotModel {
	[x: string]: any;
	private token: any;
	private commands: any;
	private url: string;
	message: any;
	database: MongoDB;
	userBot: any;
	constructor(config: any) {
		this.token = config.token;
		this.commands = config.commands;
		this.url = "https://api.telegram.org/bot" + this.token;
		this.database = config.database;
		this.userBot = config.userBot;
	}

	async update(request: any) {
		try {
			this.message = request.content.message;
			// console.log(this.message);
			if (this.message.hasOwnProperty("text")) {
				// Test command and execute
				if (!(await this.executeCommand(request))) {
					await this.processText(request);
				}
			} else {
				// process other type
				await this.unDefine(request);
			}
		} catch (error: JSON | any) {
			console.error(error);
			return utils.toJSON("OK");
		}
		// return 200 OK response to every update request
		return utils.toJSON("OK");
	}
	async updateCallback(request: any) {
		try {
			await this.handleCallback(request);
		} catch (error: JSON | any) {
			console.error(error);
			await this.answerCallbackQuery(this.message.id, "Có lỗi xảy ra", true);
			return utils.toError(error.message);
		}
		await this.answerCallbackQuery(this.message.id, "Thành công!", true);
		return utils.toJSON("OK");
	}
	escapeHtml(str: string): string {
		const escapeMap: Record<string, string> = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
		};
		return str.replace(/[&<>"']/g, (match) => escapeMap[match]);
	}
	makeHtmlCode(str: string, language: supportedLanguagesType): string {
		// Kiểm tra xem ngôn ngữ có được hỗ trợ hay không
		if (!supportedLanguages.includes(language)) {
			return `<pre>${this.escapeHtml(str)}</pre>`;
		}
		// Tạo mã HTML với thẻ <code> và cấu trúc cho ngôn ngữ cụ thể
		return `<pre><code class="language-${language}">${this.escapeHtml(str)}</code></pre>`;
	}
	async executeCommand(req: any) {
		let cmdArray = this.message.text.split(" ");
		let command: string = cmdArray.shift();
		if (command.endsWith("@" + this.userBot)) {
			let cmdArray2 = command.split("@");
			//@ts-ignore
			command = cmdArray2.shift();
		}
		const isCommand = Object.keys(this.commands).includes(command);
		if (isCommand) {
			await this.database
				.db("water_reminder")
				.collection("command")
				.deleteOne({
					filter: { _id: this.message.from.id },
				});
			await this.commands[command](this, req, cmdArray.join(""));
			return true;
		}
		return false;
	}
	async getMe() {
		const base_url = `${this.url}/getMe`;
		try {
			const response: any = await fetch(base_url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}).then((resp) => resp.json());
			if (!response.ok) {
				return null;
			}
			return response.result;
		} catch (error: any) {
			console.error("Error sending message:", error.message);
			return null;
		}
	}
	async sendMessage(
		text: string,
		chatId: number,
		message_thread_id?: number,
		inlineKeyboard?: InlineKeyboard,
		parseMode: string = "HTML"
	) {
		const base_url = `${this.url}/sendMessage`;

		const body = {
			chat_id: chatId,
			text: text,
			parse_mode: parseMode,
			reply_markup: inlineKeyboard
				? { inline_keyboard: inlineKeyboard }
				: { remove_keyboard: true },
			message_thread_id: message_thread_id,
		};

		try {
			const response: Response = await fetch(base_url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			}).then((resp) => resp.json());

			return response;
		} catch (error: any) {
			console.error("Error sending message:", error.message);
			return null;
		}
	}
	async sendMediaGroup(
		photoUrls: string[],
		chatId: number,
		caption: string = "",
		message_thread_id?: number,
		parseMode: string = "HTML"
	) {
		const base_url = `${this.url}/sendMediaGroup`;

		const photos = photoUrls.map((photoUrl) => ({
			type: "photo",
			media: photoUrl,
			caption: caption,
		}));

		const body = {
			chat_id: chatId,
			media: photos,
			parse_mode: parseMode,
			caption: caption,
			message_thread_id: message_thread_id,
		};

		try {
			const response = await fetch(base_url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			}).then((resp) => resp.json());

			return response;
		} catch (error: any) {
			console.error("Error sending media group:", error.message);
			return null;
		}
	}
	async sendSticker(
		stickerId: string,
		chatId: number,
		message_thread_id?: number,
		replyMarkup?: InlineKeyboard
	) {
		const base_url = `${this.url}/sendSticker`;

		const body = {
			chat_id: chatId,
			sticker: stickerId,
			reply_markup: replyMarkup
				? { inline_keyboard: replyMarkup }
				: { remove_keyboard: true },
			message_thread_id: message_thread_id,
		};

		try {
			const response: Response = await fetch(base_url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			}).then((resp) => resp.json());

			return response;
		} catch (error: any) {
			console.error("Error sending sticker:", error.message);
			return null;
		}
	}

	async sendPhoto(
		photoUrls: string,
		chatId: number,
		caption: string = "",
		message_thread_id?: number,
		inlineKeyboard?: InlineKeyboard,
		parseMode: string = "HTML"
	) {
		const base_url = `${this.url}/sendPhoto`;

		const body = {
			chat_id: chatId,
			photo: photoUrls,
			parse_mode: parseMode,
			caption: caption,
			reply_markup: inlineKeyboard
				? { inline_keyboard: inlineKeyboard }
				: { remove_keyboard: true },
			message_thread_id: message_thread_id,
		};

		try {
			const response = await fetch(base_url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			}).then((resp) => resp.json());

			return response;
		} catch (error: any) {
			console.error("Error sending photos:", error.message);
			return null;
		}
	}

	// Hàm edit tin nhắn tới telegram dựa vào request POST, dùng fetch để gửi
	async editMessage(
		text: string,
		chatId: number,
		messageId: number,
		inlineKeyboard?: InlineKeyboard,
		parseMode: string = "HTML"
	) {
		const base_url = `${this.url}/editMessageText`;
		const body = {
			chat_id: chatId,
			message_id: messageId,
			text: text,
			parse_mode: parseMode,
			reply_markup: inlineKeyboard
				? { inline_keyboard: inlineKeyboard }
				: { remove_keyboard: true },
		};

		try {
			const response = await fetch(base_url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			}).then((resp) => resp.json());
			return response;
		} catch (error: any) {
			console.error("Error editing message:", error.message);
			return null;
		}
	}
	async answerCallbackQuery(
		callbackQueryId: number,
		text: string | undefined = undefined,
		showAlert: boolean = false
	) {
		const base_url = `${this.url}/answerCallbackQuery`;

		const body = {
			callback_query_id: callbackQueryId,
			text: text,
			show_alert: showAlert,
		};

		try {
			const response = await fetch(base_url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			}).then((resp) => resp.json());

			return response;
		} catch (error: any) {
			console.error("Error answering callback query:", error.message);
			return null;
		}
	}
}
