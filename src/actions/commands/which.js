const { composer, middleware } = require('../../core/bot')
const { which } = require('../../views/messages')
const { which_keyboard } = require('../../views/keyboards')
const { log_module } = require('../../views/consoles')
require('dotenv').config()

composer.command('which', async (ctx) => {
    return ctx.replyWithHTML(which(ctx), { reply_markup: which_keyboard })
})

composer.action('which()', async (ctx) => {
    if (
        ctx.from.id !==
        parseInt(
            process.env.MY_ID || ctx.from.id !== parseInt(process.env.GENEMATOR)
        )
    ) {
        return ctx.answerCbQuery("Sizga mumkin emas bu xabarni ko'rish!", {
            show_alert: true
        })
    } else {
        return ctx.answerCbQuery(`id: ${ctx.chat.id}, chat: ${ctx.chat.type}`, {
            show_alert: true
        })
    }
})

middleware(composer)
log_module(__filename)
