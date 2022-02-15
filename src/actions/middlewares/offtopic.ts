import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command('off', async (ctx: TelegrafContext): Promise<void> => {
    if (ctx.message.reply_to_message) {
        ctx.message.reply_to_message.from.id === ctx.botInfo.id
            ? await ctx.replyWithHTML(`Ha-ha... yaxshi urinish!`)
            : await ctx.replyWithHTML(message.offtopic(ctx), {
                  reply_markup: keyboard.offtopic
              })
        await ctx
            .deleteMessage(ctx.message.reply_to_message.message_id)
            .catch(() => {
                ctx.replyWithHTML(
                    `<b>Menda yetarlicha priveligiya yo'q ushbu spam | flood ni o'chirish uchun. Menga admin berilar!!!</b>`
                )
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
