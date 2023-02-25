const { botAddLink } = require("../../../../assets/usefulURLs.json")
module.exports = {
	name: "invite",
	aliases: [],
	category: "core",
	utilisation: "invite <dm/here>",
	desc: "Sends links to add the discord bot! Not specifying where the link should be sent would mean the bot will send the message in the current channel!",
	async execute(bot, messageCreate, args, mainPrefix) {
		if(!args[0] || args[0] ==="here") return messageCreate.channel.send(botAddLink)
		if(args[0] == "dm") return messageCreate.author.send(botAddLink).catch((error) => {
			console.error(error)
			return messageCreate.channel.send("We could not send it to your dms!")
		})
	}
}
