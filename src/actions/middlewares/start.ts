import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.start(async (ctx: TelegrafContext): Promise<void> => {
    switch (ctx.startPayload) {
        case 'rules':
            await ctx.replyWithHTML(message.rules, {
                reply_markup: keyboard.rules
            })
            break
        case 'aur':
            await ctx.replyWithHTML(message.aur, {
                reply_markup: keyboard.aur
            })
            break
        default:
            await ctx.replyWithHTML(message.start, {
                reply_markup: keyboard.start
            })
            break
    }
})

middleware(composer)
consoles.module(__filename)
