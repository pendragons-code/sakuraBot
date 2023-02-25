const { EmbedBuilder } = require("discord.js")
const { rate } = require("../../../../assets/commands.json")
const { Default } = require("../../../../configuration/config.json")
module.exports = {
	name: "rate",
	aliases: [],
	category: "core",
	desc: "Tells you what sakura thinks of something.",
	utilisation: "rate <field>",
	async execute(bot, messageCreate, args, prefix) {
		if(!args[0]) return messageCreate.channel.send(`<:s_wat:565306689289715723> Senpai, what would you like me to rate exactly?\n${this.utilisation}`)
		let possibleNumbers = [1, 2, 3, 4, 5, 6, 8, 9, 10] // The original bot did not have 7 as a possibility
		const randomNumbers = possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)]
		if(randomNumbers < 4) { // 1 - 3
		}
		if(randomNumbers < 7) { // 4 - 6
		}
		// 8 - 10
	}
}
