import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import { TelegrafContext } from '@type/telegraf'

composer.command('which', async (ctx: TelegrafContext): Promise<void> => {
    if (ctx.from.id !== 756870298) {
        await ctx.replyWithHTML(
            `Ara-ara! Sizga taqiqlanadi ushbu komandani ishga tushurish!`
        )
    }

    if (ctx.from.id === 756870298) {
        await ctx.replyWithHTML(await message.which(ctx))
    }
})

middleware(composer)
consoles.module(__filename)
