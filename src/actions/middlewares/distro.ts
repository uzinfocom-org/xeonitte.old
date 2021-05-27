import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command('distro', async (ctx: TelegrafContext): Promise<void> => {
    await ctx.replyWithHTML(message.distro, {
        reply_markup: await keyboard.distro()
    })
})

middleware(composer)
consoles.module(__filename)
