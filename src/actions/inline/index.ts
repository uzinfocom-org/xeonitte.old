import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import aur from '@database/aur'
import { TelegrafContext } from '@type/telegraf'
import { Markup } from 'telegraf'

composer.on('inline_query', async (ctx: TelegrafContext) => {
    const request = await aur('search', ctx.inlineQuery.query)
    await console.log(request)
    if (request.resultcount !== 0) {
        const results = request.results.slice(0, 49).map((item) => ({
            type: 'article',
            id: item.ID,
            title: item.Name,
            url: `https://aur.archlinux.org/packages/${item.Name}`,
            description: item.Description
                ? item.Description
                : "Ma'lumot mavjud emas",
            input_message_content: {
                message_text:
                    `<b>Nomi:</b> ${item.Name}` +
                    `\n` +
                    (item.Version &&
                        '<b>Versiyasi:</b> ' + item.Version + `\n`) +
                    (item.Description &&
                        "<b>Ma'lumot:</b> " + item.Description + `\n`) +
                    (item.FirstSubmitted &&
                        "<b>Qo'shilgan:</b> " +
                            `${new Date(
                                item.FirstSubmitted * 1000
                            ).toLocaleString()}` +
                            `\n`) +
                    (item.LastModified &&
                        "<b>O'zgartirilgan:</b> " +
                            `${new Date(
                                item.LastModified * 1000
                            ).toLocaleString()}` +
                            `\n`) +
                    `\n` +
                    `<b>O'rnatish uchun:</b>` +
                    `\n` +
                    `<code>[yay|paru] -S ${item.Name}</code>`,
                parse_mode: 'HTML'
            },
            reply_markup: Markup.inlineKeyboard([
                [
                    Markup.urlButton(
                        `Arch AUR Sahifasi`,
                        `https://aur.archlinux.org/packages/${item.Name}`
                    )
                ],
                [
                    Markup.urlButton(
                        `AUR o'zi nima?`,
                        `https://t.me/xeonittebot?start=aur`
                    )
                ]
            ])
        }))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return await ctx.answerInlineQuery(results)
    }

    if (request.resultcount === 0) {
        if (ctx.inlineQuery.query === '') {
            return await ctx.answerInlineQuery([
                {
                    type: 'article',
                    id: '101',
                    title: `Qidirishni boshlang!`,
                    description: `Qidirmoqchi bo'lgan paketingiz nomini yozing!`,
                    input_message_content: {
                        message_text:
                            `<b>Salom foydalanuvchi!</b>` +
                            `\n` +
                            `Siz inline rejim ishga tushurdingiz. Ushbu qulaylik yordamida siz AUR ` +
                            `web sahifasiga kirmasdan turib telegramdan AUR dasturlar va paketlarni ` +
                            `qidirish imkoniga ega bo'lasiz! Qidirishni boshlash uchun ` +
                            `\n` +
                            `<code>@xeonittebot &lt;paket nomi&gt;</code>` +
                            `\n` +
                            `yozasiz`,
                        parse_mode: 'HTML'
                    },
                    reply_markup: Markup.inlineKeyboard([
                        [
                            Markup.switchToCurrentChatButton(
                                `Misol uchun`,
                                `foobar`
                            )
                        ]
                    ])
                }
            ])
        }

        if (ctx.inlineQuery.query !== '') {
            return await ctx.answerInlineQuery([
                {
                    type: 'article',
                    id: '404',
                    title: `Xatolik yuz berdi!`,
                    description: `Ushbu "${ctx.inlineQuery.query}" ga oid natija topilmadi!`,
                    input_message_content: {
                        message_text:
                            `<b>"${ctx.inlineQuery.query}" ga oid natija mavjud emas!</b>` +
                            `\n` +
                            `Iltimos, boshqattan ushbu qidirmoqchi bo'lgan paketingiz yozib qidirib ko'ring.`,
                        parse_mode: 'HTML'
                    },
                    reply_markup: Markup.inlineKeyboard([
                        [
                            Markup.switchToCurrentChatButton(
                                `Misol uchun...`,
                                `foobar`
                            )
                        ]
                    ])
                }
            ])
        }
    }
})

middleware(composer)
consoles.module(__filename)
