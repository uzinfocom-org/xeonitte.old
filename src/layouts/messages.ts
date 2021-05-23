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

export const newMember: string =
    `<b>Xush kelibsiz guruhimizga, hurmatli administrator!</b>` +
    `\n` +
    `\n` +
    `Administrator, iltimos, ushbu guruhda faoliyat olib borishdan avval, qoidalarimiz bilan tanishib chiqing. So'ngra, ` +
    `bizning guruhimiz bilan hech qanday muammolar yuz bermasin.` +
    `\n` +
    `\n` +
    `<i>Hurmat ila, Xeonitte (Kseyonita) va Administratorlar</i>`

export const which = (ctx: TelegrafContext): string => {
    return `<b>Ushbu guruh unikal identifikatori</b> <code>${ctx.chat.id}</code> <b>ga teng va komanda </b> <code>${ctx.from.id}</code> <b>tomonidan ishga tushurildi</b>`
}
