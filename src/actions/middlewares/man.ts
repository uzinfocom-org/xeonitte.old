import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.hears(/\/man (.*)/gi, async (ctx: TelegrafContext): Promise<void> => {
    const search = ctx.match[1]
    await ctx.replyWithHTML(await message.man(true, search), {
        reply_markup: await keyboard.man(search)
    })
})

composer.hears(/\/man/gi, async (ctx: TelegrafContext): Promise<void> => {
    await ctx.replyWithHTML(await message.man(false, null))
})

middleware(composer)
consoles.module(__filename)
