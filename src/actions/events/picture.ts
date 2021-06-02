import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import { TelegrafContext } from '@type/telegraf'

composer.on('photo', async (ctx: TelegrafContext): Promise<void> => {
    console.log(ctx.message.photo)
})

middleware(composer)
consoles.module(__filename)
