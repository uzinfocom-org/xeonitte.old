import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import { TelegrafContext } from '@type/telegraf'

composer.on('new_chat_members', async (ctx: TelegrafContext): Promise<void> => {
    await ctx.deleteMessage()
})

middleware(composer)
consoles.module(__filename)
