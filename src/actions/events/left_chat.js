const { composer, middleware } = require('../../core/bot')
require('dotenv').config()
const { log_module } = require('../../views/consoles')

composer.on('left_chat_member', async (ctx) => {
    if (ctx.message.left_chat_member.id !== parseInt(process.env.BOT_ID))
        return ctx.deleteMessage()
})

middleware(composer)
log_module(__filename)
