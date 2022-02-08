/**
 * Application Core Module
 * @module @core
 * @description the main api wrapper point
 * @return { bot, composer, middleware }
 */

import { Telegraf, Composer } from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context'
import { User } from 'telegram-typings'
import env from '@core/env'
import * as consoles from '@layouts/consoles'

export const counter: {
    yamete: number
} = {
    yamete: 0
}
export const bot = new Telegraf<TelegrafContext>(env.TOKEN)
export const composer = new Composer<TelegrafContext>()
export const middleware = (composer: Composer<TelegrafContext>): void => {
    bot.use(composer.middleware())
}

bot.telegram.getMe().then((botInfo: User) => {
    bot.options.username = botInfo.username
})

bot.use(async (ctx) => {
    try {
        if (ctx.message.message_id) {
            if (ctx.from.username) {
                if (ctx.from.username === 'Channel_Bot') {
                    await ctx.deleteMessage()
                }
            }

            const arabic = /[\u0600-\u06FF\u0750-\u077F]/
            if (arabic.test(ctx.message.text)) {
                await ctx.deleteMessage()
            }
        }
    } catch (_) {
        await console.log("Can't delete")
    }
})

try {
    if (env.ENVIRONMENT === 'heroku')
        bot.launch({
            webhook: {
                domain: env.DOMAIN,
                hookPath: '/bot',
                port: parseInt(env.PORT)
            }
        })
            .then(async () => {
                consoles.launch(env.ENVIRONMENT)
            })
            .catch((error: Error) => consoles.errors(error))
    else if (env.ENVIRONMENT === 'local')
        bot.launch()
            .then(() => consoles.launch(env.ENVIRONMENT))
            .catch((error: Error) => consoles.errors(error))
    else consoles.wrongEnv()
} catch (e) {
    console.log(e)
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// process.once('SIGINT', () => bot.stop('SIGINT'))
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// process.once('SIGTERM', () => bot.stop('SIGTERM'))
