import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.on('new_chat_members', async (ctx: TelegrafContext) => {
    await ctx.telegram.sendMessage(ctx.chat.id, message.newMember, {
        parse_mode: 'HTML',
        reply_markup: keyboard.newMember
    })
})

middleware(composer)
consoles.module(__filename)
