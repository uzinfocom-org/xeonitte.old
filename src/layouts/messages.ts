/**
 * Message Template Layout Manager
 * @module layouts/messages
 */
import { TelegrafContext } from '@type/telegraf'

export const start: string =
    `<b>Assalomu alaykum, hurmatli administrator!</b> \n` +
    `\n` +
    `Sizni ko'rib turganimdan bag'oyatda hursandman. ` +
    `Men Xinux Jamiyati tomonidan yaratilgan bot hisoblanib, ` +
    `ushbu guruh foydalanuvchilari uchun foydali resurslarni yetkazish, saqlash va ` +
    `ularni saralash uchun xizmat qilaman.`

export const rule: string = `<b>Hurmatli guruh a'zosi, ushbu guruhni spam bilan to'ldirib tashlamaslik maqsadida, guruhning o'ziga o'tib qoidalarni ko'rib chiqishingizni xohlardik!</b> `

export const rules: string =
    `<b>Hurmatli guruh a'zosi...</b> ` +
    `\n` +
    `\n` +
    `Iltimos qoidalarga oz bo'lsada vaqt ajratishni unutmang, bu muhim! Ushbu guruhda quyidagi harakatlar taqiqlanadi:` +
    `\n` +
    `\n` +
    `<code>* Besabab bir-birini kamsitish yoki so'kinish</code>` +
    `\n` +
    `<code>* Sababsiz guruhga spam yozaverish yoki tashash</code>` +
    `\n` +
    `<code>* So'ralgan narsani yana qayta ezmalash</code>`

/**
 * Provoked on new member join
 * @param ctx
 * @return string
 */

export const newMember = (ctx: TelegrafContext): string => {
    return (
        `<b>Xush kelibsiz guruhimizga, hurmatli ${ctx.from.first_name} administrator!</b>` +
        `\n` +
        `\n` +
        `Administrator, iltimos, ushbu guruhda faoliyat olib borishdan avval, qoidalarimiz bilan tanishib chiqing. So'ngra, ` +
        `bizning guruhimiz bilan hech qanday muammolar yuz bermasin.` +
        `\n` +
        `\n` +
        `<i>Hurmat ila, Xeonitte (Kseyonita) va Administratorlar</i>`
    )
}

/**
 * Provoked on /which command
 * @param ctx
 * @return string
 */

export const which = (ctx: TelegrafContext): string => {
    return `<b>Ushbu guruh unikal identifikatori</b> <code>${ctx.chat.id}</code> <b>ga teng va komanda </b> <code>${ctx.from.id}</code> <b>tomonidan ishga tushurildi</b>`
}

export const source: string =
    `<b>Oldindan minnatdorchiligimni bildiraman, meni yaxshilash fikriga kelganingiz uchun.</b> ` +
    `\n` +
    `\n` +
    `Ushbu havola orqali mening kodlarimni topishingiz mumkin:`
