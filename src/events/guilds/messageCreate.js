const { db } = require("../../loaders/bot.js")
const { Default } = require("../../../configuration/config.json")
module.exports = async (bot, messageCreate) => {
	let dbPrefix = await db.get(`prefix_${messageCreate.guild.id}`)
	if(dbPrefix === null) dbPrefix = Default.prefix
	let prefix = messageCreate.content.includes(dbPrefix) ? dbPrefix : `<@${1078923739544170566}>`
	if(messageCreate.author.bot || messageCreate.channel.type == "dm" || messageCreate.content.indexOf(prefix) !== 0) return
	const args = messageCreate.content.slice(prefix.length).trim().split(/ +/g)
	const command = args.shift().toLowerCase()
	const cmd = bot.messageCommands.get(command) || bot.messageCommands.find(cmd => cmd.aliases && cmd.aliases.includes(command))
	if(!cmd) return
	if(args[0] === "-h") return messageCreate.channel.send(cmd.utilisation)
	cmd.execute(bot, messageCreate, args, prefix)
}
