const { composer, middleware } = require('../../core/bot')
const { start } = require('../../views/messages')
const { start_keyboard } = require('../../views/keyboards')
const { rules } = require('../../views/messages')
const { log_module } = require('../../views/consoles')

composer.start(async (ctx) => {
    switch (ctx.startPayload) {
        case 'rules':
            await ctx.replyWithHTML(rules, {
                reply_markup: keyboard.rules
            })
            break
        default:
            await ctx.replyWithHTML(start(ctx), { reply_markup: start_keyboard })
            break
    }
})

middleware(composer)
log_module(__filename)
