import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import { TelegrafContext } from '@type/telegraf'
import env from '@core/env'

composer.on('new_chat_members', async (ctx: TelegrafContext) => {
    if (ctx.chat.type !== 'private') {
        if (
            ctx.chat.id !== parseInt(env.GROUP) ||
            ctx.chat.id !== -1001456005278
        ) {
            await ctx.replyWithHTML(`<b>Men bu guruh boshqarishdan bosh tortaman, bu Xinux jamiyatiga tegishli guruh emas!</b>`)
            await ctx.telegram.leaveChat(ctx.chat.id)
        }
    }
})

middleware(composer)
consoles.module(__filename)
