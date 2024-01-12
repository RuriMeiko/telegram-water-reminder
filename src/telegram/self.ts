import BotModel from "./core";

export default class randomfoodBot extends BotModel {
	constructor(config: any) {
		super(config);
	}
	// bot command: /start
	async start(req: any, content: string) {
		const text = await this.database
			.db("water_reminder")
			.collection("user_info")
			.insertOne({ hi: content ? content : "ha" });
		await this.sendMessage(
			this.makeHtmlCode(JSON.stringify(text, null, 2), "JSON"),
			this.message.chat.id
		);
	}
	async about(req: any, content: string) {
		const text = "Bot này tạo ra bởi <b>nthl</b> aka <b>rurimeiko</b> ヽ(✿ﾟ▽ﾟ)ノ";
		await this.sendMessage(text, this.message.chat.id);
	}
	async help(req: any, content: string) {
		// const text = "help mi";
		const text = await this.database.db("water_reminder").collection("user_info").find();
		await this.sendMessage(
			this.makeHtmlCode(JSON.stringify(text, null, 2), "JSON"),
			this.message.chat.id
		);
	}
	async setting(req: any, content: string) {
		// const text = "help mi";
		const text = await this.database.db("water_reminder").collection("user_info").find();
		await this.sendMessage(
			this.makeHtmlCode(JSON.stringify(text, null, 2), "JSON"),
			this.message.chat.id
		);
	}
}
