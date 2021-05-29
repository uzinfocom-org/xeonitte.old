const { composer, middleware } = require('../../core/bot')
const { wiki_family, wiki_distro } = require('../../views/messages')
const { log_module } = require('../../views/consoles')
const { wiki_btn, wiki_arch, wiki_debian } = require('../../views/keyboards')

composer.command('wiki', async (ctx) => {
    return ctx.replyWithMarkdown(wiki_family(), { reply_markup: await wiki_btn() })
})

composer.action('Arch()', async (ctx) => {
    ctx.deleteMessage()
    await ctx.replyWithMarkdown(wiki_distro(), { reply_markup: await wiki_arch() })
})

composer.action('Debian()', async (ctx) => {
    ctx.deleteMessage()
    await ctx.replyWithMarkdown(wiki_distro(), { reply_markup: await wiki_debian() })
})

middleware(composer)
log_module(__filename)
