const botCommands = {
	start: async (bot: any, req: any, args: any) => await bot.start(req, args),
	help: async (bot: any, req: any, args: any) => await bot.help(req, args),
	setting: async (bot: any, req: any, args: any) => await bot.setting(req, args),
	about: async (bot: any, req: any, args: any) => await bot.about(req, args),
};
export default botCommands;
