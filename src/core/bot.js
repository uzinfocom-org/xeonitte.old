/**
 * Core module
 * @core @module
 * @description The main api wrapper of the bot
 * @returns { bot, middleware, composer }
 */

const { Telegraf, Composer } = require('telegraf')
const { launch, errors } = require('../views/consoles')
require('dotenv').config()

const token = process.env.BOT_TOKEN

if (!token) {
    errors('No token in .env file (maybe invalid token)')
}

const bot = new Telegraf(token)

const composer = new Composer()
const middleware = (composer) => {
    bot.use(composer.middleware())
}

bot.launch()
    .then((d) => {
        launch()
    })
    .catch((err) => {
        errors(err)
    })

module.exports = {
    bot,
    middleware,
    composer
}
