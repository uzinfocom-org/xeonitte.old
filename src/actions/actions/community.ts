import { Markup } from 'telegraf'
import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import communities from '@database/communities'
import { TelegrafContext } from '@type/telegraf'
import { CallbackButton, UrlButton } from 'telegraf/typings/markup'

interface Dataset {
    name: string
    about: string
    keyboard: (UrlButton | CallbackButton)[][]
}

composer.action('community', async (ctx: TelegrafContext): Promise<void> => {
    await ctx.editMessageText(message.community, {
        parse_mode: 'HTML',
        reply_markup: await keyboard.community(),
        disable_web_page_preview: true
    })
})

composer.action(
    /community_(.+)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const data: Dataset = {
            name: '',
            about: '',
            keyboard: []
        }
        const communityData = ctx.match[1]

        for (const database of await communities()) {
            if (database.callback !== communityData) {
                continue
            }

            if (database.telegram) {
                data.name = database.name
                data.about = database.about
                data.keyboard.push(
                    [
                        Markup.urlButton(`Website`, database.link),
                        Markup.urlButton(
                            `Telegram`,
                            database?.telegram.replace('@', 'https://t.me/')
                        )
                    ],
                    [Markup.callbackButton(`⬅ Back`, `community`)]
                )
            }

            if (!database.telegram) {
                data.name = database.name
                data.about = database.about
                data.keyboard.push(
                    [Markup.urlButton(`Website`, database.link)],
                    [Markup.callbackButton(`⬅ Back`, `community`)]
                )
            }
        }

        try {
            await ctx.editMessageText(message.communityCallback(data), {
                parse_mode: 'HTML',
                reply_markup: Markup.inlineKeyboard(data.keyboard),
                disable_web_page_preview: true
            })
        } catch (e) {
            await console.log(e.message)
        }
    }
)

middleware(composer)
consoles.module(__filename)
