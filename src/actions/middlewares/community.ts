import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command('community', async (ctx: TelegrafContext): Promise<void> => {
    await ctx.replyWithHTML(message.community, {
        reply_markup: await keyboard.community(),
        disable_web_page_preview: true
    })
})

middleware(composer)
consoles.module(__filename)
