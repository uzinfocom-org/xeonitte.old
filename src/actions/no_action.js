require('dotenv').config()
const { composer, middleware } = require('../core/bot')
const { no_action } = require('../views/messages')
const { log_module } = require('../views/consoles')

composer.on('new_chat_members', async (ctx, next) => {
    if (
        ctx.chat.type !== 'private' &&
        ctx.chat.id !== parseInt(process.env.GROUP)
    ) {
        await ctx.reply(no_action(process.env.GROUP), { parse_mode: 'HTML' })
        return ctx
            .leaveChat()
            .then()
            .catch((err) => console.log(err))
    } else {
        return next()
    }
})

middleware(composer)
log_module(__filename)
