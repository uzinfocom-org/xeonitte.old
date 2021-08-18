import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command('off', async (ctx: TelegrafContext): Promise<void> => {
    if (ctx.message.reply_to_message) {
        await ctx.replyWithHTML(message.offtopic(ctx), {
            reply_markup: keyboard.offtopic,
            reply_to_message_id: ctx.message.reply_to_message.message_id
        })
    }

    if (!ctx.message.reply_to_message) {
        await ctx.replyWithHTML(
            `<b>Kimga eslatish kerak? Shu odamni habarini reply qilib ko'rsating...</b>`
        )
    }
})

middleware(composer)
consoles.module(__filename)
