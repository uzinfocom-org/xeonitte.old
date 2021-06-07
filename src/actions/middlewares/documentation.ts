import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
// import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command('doc', async (ctx: TelegrafContext): Promise<void> => {
    if (!ctx.message.reply_to_message) {
        await ctx.replyWithHTML(await message.doc(true, ctx), {
            disable_web_page_preview: true
        })
    }

    if (ctx.message.reply_to_message) {
        await ctx.replyWithHTML(await message.doc(false, ctx), {
            disable_web_page_preview: true,
            reply_to_message_id: ctx.message.reply_to_message.message_id
        })
    }
})

middleware(composer)
consoles.module(__filename)
