const { composer, middleware } = require('../../core/bot')
const { source } = require('../../views/messages')
const { source_btn } = require('../../views/keyboards')
const { log_module } = require('../../views/consoles')

composer.command('source', async (ctx) => {
    return ctx.reply(source(), source_btn)
})

middleware(composer)
log_module(__filename)
