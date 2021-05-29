const { composer, middleware } = require('../../core/bot')
const { new_member } = require('../../views/messages')
const { rules } = require('../../views/keyboards')
const { log_module } = require('../../views/consoles')

composer.on('new_chat_members', async (ctx) => {
    if (ctx.message.new_chat_members.some((user) => user.username === ctx.me)) {
        await ctx.telegram.sendMessage(
            ctx.chat.id,
            'Guruhga xush kelibman. Bugundan boshlab guruhni boshqarishda yordam beraman.'
        )
    } else {
        await ctx.replyWithHTML(new_member(ctx), rules)
    }
})

middleware(composer)
log_module(__filename)
