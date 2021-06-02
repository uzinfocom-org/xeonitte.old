import { composer, middleware, counter } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import { TelegrafContext } from '@type/telegraf'

composer.command('which', async (ctx: TelegrafContext, next): Promise<void> => {
    if (ctx.from.id !== 756870298) {
        switch (counter.yamete) {
            case 3:
                await ctx.replyWithHTML(`<b>Yamete kudasai! @genemator</b>`)
                counter.yamete = 0
                break
            default:
                await ctx.replyWithHTML(
                  `<b>Ara-ara! Sizga taqiqlanadi ushbu komandani ishga tushurish!</b>`
                )
                counter.yamete++
                break
        }
    }

    if (ctx.from.id === 756870298) {
        await ctx.replyWithHTML(await message.which(ctx))
    }
})

middleware(composer)
consoles.module(__filename)
