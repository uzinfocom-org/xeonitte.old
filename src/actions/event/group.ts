import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.on('new_chat_members', async (ctx: TelegrafContext) => {
    if (ctx.message.new_chat_members.some((user) => user.username === ctx.me)) {
        await ctx.telegram.sendMessage(
            ctx.chat.id,
            `<b>Bugundan sizlarga guruhni boshqarishda yordam beraman!</b>`,
            {
                parse_mode: 'HTML'
            }
        )
    }

    if (ctx.message.new_chat_members.some((user) => user.username !== ctx.me)) {
        await ctx.telegram.sendMessage(ctx.chat.id, message.newMember(ctx), {
            parse_mode: 'HTML',
            reply_markup: keyboard.newMember
        })
    }
})

middleware(composer)
consoles.module(__filename)
