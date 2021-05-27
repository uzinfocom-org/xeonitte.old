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

export const help = async (isOurGroup: boolean): Promise<string> => {
    const base: string =
        `<b>Mavjud komandalar ro'yxati:</b>` +
        `\n` +
        `\n` +
        `/help - <code>ushbu habarni qayta ko'rsatish</code>` +
        `\n` +
        `/rules - <code>qoidalarni aks ettirish</code>` +
        `\n` +
        `/source - <code>shu telegram bot kodlarini ko'rsatish</code>` +
        `\n` +
        `/which - <code>ushbu guruh va foydalanuvchi metrik ma'lumotlarini ko'rsatish</code>` +
        `\n`
    const addition: string =
        `\n` +
        `<b>Hamda, bizning guruhimizga quyidagi tugmachani bosish orqali a'zo bo'lishni unutmang!</b>`
    return isOurGroup ? base : base + addition
}

export const rule = `<b>Hurmatli guruh a'zosi, ushbu guruhni spam bilan to'ldirib tashlamaslik maqsadida, guruhning o'ziga o'tib qoidalarni ko'rib chiqishingizni xohlardik!</b> `

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
    `<code>* So'ralgan narsani yana qayta ezmalash</code> ` +
    `\n` +
    `<code>* Administratorlarga nisbatan juddayam qattiq kritika</code>` +
    `\n` +
    `<code>* Faoliyat ustidan shikoyat qilaverish yoki nolish</code>` +
    `\n` +
    `\n` +
    `<b>Ushbu qoidalarni doimiy tarzda buzish, butunlay ban yoki bir necha ogohlantirishlirga olib keladi!</b>`

/**
 * Provoked on new member join
 * @param ctx
 * @return string
 */

export const newMember = async (ctx: TelegrafContext): Promise<string> => {
    return (
        `<b>Xush kelibsiz guruhimizga, hurmatli administrator${
            ctx.message.new_chat_members.length > 1 ? 'lar' : ''
        }!</b>` +
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

export const which = async (ctx: TelegrafContext): Promise<string> => {
    return `<b>Ushbu guruh unikal identifikatori</b> <code>${ctx.chat.id}</code> <b>ga teng va komanda </b> <code>${ctx.from.id}</code> <b>tomonidan ishga tushurildi</b>`
}

export const source: string =
    `<b>Oldindan minnatdorchiligimni bildiraman, meni yaxshilash fikriga kelganingiz uchun.</b> ` +
    `\n` +
    `\n` +
    `Ushbu havola orqali mening kodlarimni topishingiz mumkin:`
