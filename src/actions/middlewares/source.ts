import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command('source', async (ctx: TelegrafContext) => {
    await ctx.replyWithHTML(message.source, {
        parse_mode: 'HTML',
        reply_markup: keyboard.source
    })
})

middleware(composer)
consoles.module(__filename)
