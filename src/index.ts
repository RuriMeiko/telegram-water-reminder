import * as utils from "./utils";
import Handler from "./telegram/utils";
import HandlerCrons from "./telegram/cron";

import mongodb from "./mongodb/init";
import botCommands from "./telegram/command";
// // The Worker's environment bindings. See `wrangler.toml` file.
interface Bindings {
	API_MONGO_TOKEN: string;
	API_TELEGRAM: string;
	URL_API_MONGO: string;
}

// Define the Worker logic
const worker: ExportedHandler<Bindings> = {
	async fetch(req, env) {
		const database = new mongodb({
			apiKey: env.API_MONGO_TOKEN,
			apiUrl: env.URL_API_MONGO,
			dataSource: "AtlasCluster",
		});
		const url = new URL(req.url);
		const path = url.pathname.replace(/[/]$/, "");
		if (path !== "/api/water") {
			return utils.toError(`?`, 404);
		}
		const botConfig = {
			userBot: "bbp_water_bot",
			database: database,
			token: env.API_TELEGRAM,
			commands: {
				"/start": botCommands.start,
				"/help": botCommands.help,
				"/setting": botCommands.setting,
				"/wake": botCommands.wake,
				"/about": botCommands.about,
			},
		};
		const bot = new Handler(botConfig);

		try {
			return bot.handle(req);
		} catch (err) {
			const msg = (err as Error).message || "Error with query.";
			return utils.toJSON(msg, 200);
		}
	},
	async scheduled(event, env, ctx) {
		const database = new mongodb({
			apiKey: env.API_MONGO_TOKEN,
			apiUrl: env.URL_API_MONGO,
			dataSource: "AtlasCluster",
		});
		const botConfig = {
			userBot: "bbp_water_bot",
			database: database,
			token: env.API_TELEGRAM,
		};
		const bot = new HandlerCrons(botConfig);

		try {
			const data_user = await database.db("water_reminder").collection("setting").find({});
			if (data_user.documents) {
				for await (const iterator of data_user.documents) {
					if (iterator.status) {
						await bot.handleScheduled(iterator._id);
					}
				}
			}
		} catch (err) {
			const msg = (err as Error).message || "Error with query.";
			console.log(msg);
		}
	},
};

// Export for discoverability
export default worker;
