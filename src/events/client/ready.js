const { db } = require("../../loaders/bot.js")
module.exports = async (bot) => {
	setInterval(function() {
		bot.user.setActivity("Use '.s help' for commands!")
	}, 3000)
	console.log(bot.guilds.cache.map(guild => guild.name))
	console.log(bot.guilds.cache.map(guild => guild.id))
}
