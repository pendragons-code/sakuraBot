const env = require("dotenv").config()
const { loadEvents } = require("./src/loaders/events.js")
const { loadCommands } = require("./src/loaders/messageCommands.js")
const { bot } = require("./src/loaders/bot")
loadEvents()
loadCommands()
bot.login(process.env.token)
console.log(`Hanging out at process: ${process.pid}`)
process.traceDeprecation = true
