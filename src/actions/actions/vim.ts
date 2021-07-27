import { Markup } from 'telegraf'
import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import database from '@database/vim'
import { TelegrafContext } from '@type/telegraf'
// import { CallbackButton, UrlButton } from 'telegraf/typings/markup'

// Back button
composer.action(/vim_(.+)/gi, async (ctx: TelegrafContext): Promise<void> => {
    const objectID = parseInt(ctx.match[1]) - 1
    const foundData = (await database())[objectID]

    const keyboard = [
        [Markup.urlButton(`Video Darslik`, foundData.link)],
        [Markup.callbackButton(`⬅️ Orqaga`, `vim`)]
    ]

    try {
        await ctx.editMessageText(message.vimCallback(foundData), {
            parse_mode: 'HTML',
            reply_markup: Markup.inlineKeyboard(keyboard)
        })
    } catch (e) {
        await console.log(e.message)
    }
})

composer.action('vim', async (ctx: TelegrafContext): Promise<void> => {
    await ctx.editMessageText(message.vim, {
        parse_mode: 'HTML',
        reply_markup: await keyboard.vim()
    })
})

middleware(composer)
consoles.module(__filename)
