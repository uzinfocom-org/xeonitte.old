const { composer, middleware } = require('../../core/bot')
const { help } = require('../../views/messages')
const { log_module } = require('../../views/consoles')

composer.help(async (ctx) => {
    return ctx.reply(help())
})

middleware(composer)
log_module(__filename)
