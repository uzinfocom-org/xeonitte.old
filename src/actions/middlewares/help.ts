import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'
import env from '@core/env'

composer.help(async (ctx: TelegrafContext): Promise<void> => {
    if (ctx.chat.id === parseInt(env.GROUP)) {
        await ctx.replyWithHTML(await message.help(true))
    }

    if (ctx.chat.id !== parseInt(env.GROUP)) {
        await ctx.replyWithHTML(await message.help(false), {
            reply_markup: keyboard.help
        })
    }
})

middleware(composer)
consoles.module(__filename)
