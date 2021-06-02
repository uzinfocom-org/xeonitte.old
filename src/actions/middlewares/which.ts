import { composer, middleware, counter } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import { TelegrafContext } from '@type/telegraf'

const ahegao: string | undefined =
    'AgACAgIAAxkBAAICA2C3w3d2LmK6i6q2_sZPN9h8ODddAAINszEbd6zBSVx9RQy8gBTsIN1Toi4AAwEAAwIAA3kAAy8RAwABHwQ'

const whichAhegao = async (ctx: TelegrafContext) => {
    const chance = Math.random()

    // 10% chance to have this message
    if (chance * 100 < 1) {
        await ctx.replyWithPhoto(ahegao, {
            caption: `<b>Yamete kudasai! @genemator</b>`,
            parse_mode: 'HTML'
        })
    } else {
        await ctx.replyWithHTML(`<b>Yamete kudasai! @genemator</b>`)
    }
}

composer.command('which', async (ctx: TelegrafContext): Promise<void> => {
    if (ctx.from.id !== 756870298) {
        switch (counter.yamete) {
            case 3:
                await whichAhegao(ctx)
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
        switch (counter.yamete) {
            case 3:
                await whichAhegao(ctx)
                counter.yamete = 0
                break
            default:
                await ctx.replyWithHTML(
                    `<b>Ara-ara! Sizga taqiqlanadi ushbu komandani ishga tushurish!</b>`
                )
                counter.yamete++
                break
        }

        // await ctx.replyWithHTML(await message.which(ctx))
    }
})

middleware(composer)
consoles.module(__filename)
