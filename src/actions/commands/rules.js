const { composer, middleware } = require('../../core/bot')
const { rules_redirect, rules } = require('../../views/messages')
const { rules_btn } = require('../../views/keyboards')
const { log_module } = require('../../views/consoles')

composer.command('rules', async (ctx) => {
    if (ctx.chat.type === 'private') {
        return ctx.replyWithHTML(rules())
    } else if (ctx.chat.type === 'supergroup' || ctx.chat.type === 'group') {
        return ctx.replyWithMarkdown(rules_redirect(), { reply_markup: await rules_btn() })
    }
})

middleware(composer)
log_module(__filename)
