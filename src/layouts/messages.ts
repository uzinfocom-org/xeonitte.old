/**
 * Message Template Layout Manager
 * @module layouts/messages
 */
import { TelegrafContext } from '@type/telegraf'
import { CallbackButton, UrlButton } from 'telegraf/typings/markup'

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
        `/doc - <code>replay qilingan odamga dokumentatsiya borligi haqida eslatiladi</code>` +
        `\n` +
        `/help - <code>ushbu habarni qayta ko'rsatish</code>` +
        `\n` +
        `/beta - <code>ushbu botimizning rivojlantirish qismi</code>` +
        `\n` +
        `/rules - <code>qoidalarni aks ettirish</code>` +
        `\n` +
        `/source - <code>shu telegram bot kodlarini ko'rsatish</code>` +
        `\n` +
        `/which - <code>ushbu guruh va foydalanuvchi metrik ma'lumotlarini ko'rsatish</code>` +
        `\n` +
        `/distro - <code>saytimizdagi distributivlarni havolasini olish</code>` +
        `\n` +
        `/community - <code>butun dunyo bo'yicha kommyunitylar havolasini olish</code>` +
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

export const distro:
    | string
    | undefined = `<b>Ushbu ro'yxatlar ichidan o'zingizga kerakli distributivni tanlang:</b>`

export const community: string | undefined =
    `<b>Ushbu komandada siz kommunitylarning havolalarini topishingiz mumkin!</b>` +
    `\n` +
    `\n` +
    `<i>Ma'lumotlar </i><a href="https://t.me/Anvar_Alimov">Anvar</a><i> tomonidan yozilgan</i>`

export const communityCallback = (data: {
    name: string
    about: string
    keyboard: (CallbackButton | UrlButton)[][]
}): string =>
    `<b>${data.name} distro</b>` +
    `\n` +
    `\n` +
    `<i>${data.about}</i>` +
    `\n` +
    `\n` +
    `<b>Quyidagi havola yordamida sotsial tizimlariga o'ting:</b>`

export const beta: string =
    `<b>Hurmatli foydalanuvchi!</b> \n` +
    `\n` +
    `Bizning botimiz aktiv tarzda shakllantirib boriladi. ` +
    `Buning ustida esa bir necha avtor va dasturchilar turadi, ` +
    `ushbu havolalar orqali bizning sinovchilarimizdan biriga aylaning ` +
    `va biz bilan botimiz, hamda guruhimiz ishlatish qulayligini oshiring.`

export const doc = async (
    hasReply: boolean,
    ctx: TelegrafContext
): Promise<string> => {
    if (hasReply) {
        return `<b>Qani menga shu shovvoz bolani bir ko'rsatingchi xatini reply qilib!?...</b>`
    }

    if (!hasReply) {
        return (
            `<b>Demak, ${ctx.message.reply_to_message.from.first_name}</b>` +
            `\n` +
            `\n` +
            `<i>Bir bor ekan, bir yo'q ekan... Qadim o'tgan zamonlarda dokumentatsiya ` +
            `bo'lgan ekan. Aytishlariga qaraganda, undan deyarli hamma savollarga ` +
            `javob olsa bo'larkanda. Yanachi, unga avtorlar shunchalik ko'p vaqt ajratishar ` +
            `ekanu, lekin uni sanoqligina odam o'qisharkan. Attang...</i>`
        )
    }
}

export const man = async (
    hasQuery: boolean,
    query: string
): Promise<string> => {
    if (hasQuery) {
        return `<b>Ushbu</b> <i>"${query}"</i> <b>uchun natijalar:</b>`
    }

    if (!hasQuery) {
        return `<b>Bu komandaning maqsadi, kalit so'zlar orqali shu dasturning dokumentativ saytlariga havolalarni topib berishdir!</b>`
    }
}

export const vim:
    | string
    | undefined = `<b>Ushbu havolalardan darsliklarni tanlab oling:</b>`

export const vimCallback = (data: {
    name: string
    lesson: number
    link: string
}): string => `${data.lesson}. ${data.name}`

export const lessons: string | undefined = `<b>Darsliklar:</b>`
export const lessonsCallback = (data: {
    name: string
    link: string
    id: number
}): string => `${data.name}`
