import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
// import aur from '@database/aur'
import { TelegrafContext } from '@type/telegraf'
import { Markup } from 'telegraf'
import { AUR, Search, STD } from 'xeorarch'

composer.on('inline_query', async (ctx: TelegrafContext) => {
    const request = await Search.search(ctx.inlineQuery.query)
    if (request.length !== 0) {
        const results = request.slice(0, 49).map((item, index) => ({
            type: 'article',
            id: index,
            title: item.name,
            url: item.type === "std" && item.url ? item.url : `https://archlinux.org/packages/${item.repo}/${item.arch}/${item.name}/`,
            description: item.desc ? item.desc : "Ma'lumot mavjud emas",
            input_message_content: {
                message_text:
                    `<b>Nomi:</b> ${item.name}` +
                    `\n` +
                    (item.version &&
                        '<b>Versiyasi:</b> ' + item.version + `\n`) +
                    (item.desc && "<b>Ma'lumot:</b> " + item.desc + `\n`) +
                    (item.repo ? '<b>Repozitoriya:</b> ' + item.repo + `\n` : "") +
                    (item.updated &&
                        "<b>O'zgartirilgan:</b> " +
                            `${new Date(item.updated).toLocaleString()}` +
                            `\n`) +
                    `\n` +
                    `<b>O'rnatish uchun:</b>` +
                    `\n` +
                    `<code>${item.install}</code>`,
                parse_mode: 'HTML'
            },
            reply_markup: Markup.inlineKeyboard([
                [Markup.urlButton(`Web Sahifasi`, item.type === "std" && item.url ? item.url : `https://archlinux.org/packages/${item.repo}/${item.arch}/${item.name}/`)]
            ])
        }))

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return await ctx.answerInlineQuery(results)
    }

    if (request.length === 0) {
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
