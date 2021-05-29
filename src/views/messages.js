/**
 * Message template manager
 * @module views/messages
 */

/**
 * Provoked when bot was added to another group
 * @param id
 * @returns string
 */

const no_action = (id) => {
    return (
        `Men <a href="https://t.me/${id}">Xinux</a> jamiyati tomonidan ishlab chiqilgan botman va faqat shu guruhga xizmat ko'rsataman!` +
        `\n` +
        `Men ochiq kodliman va kodlarimni <a href="https://github.com/xinuxuz/xeonitte">github sahifam</a>dan topishingiz mumkin :)`
    )
}

/**
 * Provoked on /start command
 * @param ctx
 * @returns string
 */

const start = (ctx) => {
    return (
        `Assalomu alaykum, ${ctx.from.first_name}!\n` +
        '\n' +
        `Ismim <b>Xeonitte</b> bo'lib, <b>"Xinux"</b> - linuxga qaratilgan o'zbek jamiyati tomonidan ishlab chiqilganman.\n` +
        `\n` +
        `Men ushbu guruh foydalanuvchilari uchun foydali resurslarni saqlash, yetkazish va saralash uchun xizmat qilaman.\n` +
        '\n' +
        `Marhamat, siz ham jamiyatimiz a'zosiga aylaning :)\n` +
        `\n` +
        `Mavjud buyruqlarni ko'rish uchun /help burug'idan foydalaning.`
    )
}

/**
 * Provoked when new member joins the group
 * @param ctx
 * @returns string
 */

const new_member = (ctx) => {
    return (
        `Xush kelibsiz, <a href="tg://user?id=${ctx.from.id}"> ${ctx.from.first_name}</a>!` +
        `\n` +
        `Bizning guruh bilan hech qanday tushunmovchilikka borib qolmaslik uchun iltimos, qoidalar bilan tanishib chiqing` +
        ' 🙃'
    )
}

/**
 * Provokes on /help command
 * @returns string
 */

const help = () => {
    return (
        `Mavjud buyruqlar: \n` +
        `\n` +
        `1. /start - botni ishga tushurish.\n` +
        `2. /help - mavjud buyruqlarni ko'rish.\n` +
        `3. /rules - guruh qoidalari bilan tanishish\n` +
        `4. /wiki - jamiyatimiz tomonidan yozilgan "wiki"ni o'qish (yoki ma'lumot qo'shish)\n` +
        `5. /source - mening kodlarim joylashgan sahifaga o'tish`
    )
}

const rules = () => {
    return (
        `<b>Hurmatli guruh a'zosi...</b> ` +
        `\n` +
        `\n` +
        `Iltimos qoidalarga oz bo'lsada vaqt ajratishni unutmang, bu muhim! Ushbu guruhda quyidagi harakatlar taqiqlanadi:` +
        `\n` +
        `\n` +
        `<code>* Besabab bir-birini kamsitish yoki so'kinish</code>` +
        `\n` +
        `<code>* Sababsiz guruhga spam yozaverish yoki tashlash</code>` +
        `\n` +
        `<code>* So'ralgan narsani yana qayta ezmalash</code> ` +
        `\n` +
        `<code>* Administratorlarga nisbatan juddayam qattiq kritika</code>` +
        `\n` +
        `<code>* Faoliyat ustidan shikoyat qilaverish yoki nolish (tanqid to'g'ri qabul qilinadi) </code>` +
        `\n` +
        `\n` +
        `<b>Ushbu qoidalarni doimiy tarzda buzish, butunlay ban yoki bir necha ogohlantirishlirga olib keladi!</b>`
    )
}

const rules_redirect = () => {
    return (
        `Hurmatli guruh a'zosi, ushbu guruhni spam bilan to'ldirib tashlamaslik maqsadida,` +
        ` guruhning o'ziga o'tib qoidalarni ko'rib chiqishingizni xohlardik!`
    )
}

const which = (ctx) => {
    return `"which" buyrug'i <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a> tomonidan ishga tushurildi.`
}

const source = () => {
    return (
        `Meni yaxshilash fikriga kelganingizdan xursandman va minnatdorchilik bildiraman 🙂\n` +
        `\n` +
        `Quyidagi havola orqali mening kodlarimni topishingiz va meni rivojlantiruvchilar guruhiga qo'shilingiz mumkin!`
    )
}

const wiki_family = () => {
    return `Kerakli turkumni tanlang`
}

const wiki_distro = () => {
    return `Kerakli distributivni tanlang va u haqida ushbu jamiyat tomonidan yozilgan ma'lumotlarni o'qing.`
}

module.exports = {
    no_action,
    start,
    help,
    new_member,
    which,
    rules,
    rules_redirect,
    source,
    wiki_family,
    wiki_distro
}
