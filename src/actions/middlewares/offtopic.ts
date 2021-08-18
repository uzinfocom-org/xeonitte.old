import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command('off', async (ctx: TelegrafContext): Promise<void> => {
    await ctx.replyWithHTML(message.offtopic, {
        reply_markup: keyboard.offtopic,
        reply_to_message_id: ctx.message.reply_to_message.message_id
    })
})

middleware(composer)
consoles.module(__filename)
