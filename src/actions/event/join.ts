import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'
import env from '@core/env'

composer.on('message', async (ctx: TelegrafContext) => {
    if (ctx.chat.type !== 'private') {
        if (ctx.chat.id === parseInt(env.GROUP)) {
            await ctx.replyWithHTML(`Men bu guruh boshqarishdan bosh tortaman!`)
            await ctx.telegram.leaveChat(ctx.chat.id)
        }
    }
})

middleware(composer)
consoles.module(__filename)
