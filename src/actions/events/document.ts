import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import { TelegrafContext } from '@type/telegraf'

composer.on('document', async (ctx: TelegrafContext): Promise<void> => {
    await ctx.replyWithDocument(
        'BQACAgIAAxkBAAID7GEB5XtV_zFSfNDFaGNOH2xW8v3iAAKHEQACfIwISNlzuUyOfH7jIAQ'
    )
})

middleware(composer)
consoles.module(__filename)
