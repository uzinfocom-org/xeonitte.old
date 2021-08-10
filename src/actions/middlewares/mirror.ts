// import { composer, middleware } from '@core/bot'
// import * as consoles from '@layouts/consoles'
// import * as message from '@layouts/messages'
// import * as keyboard from '@layouts/keyboards'
// import { TelegrafContext } from '@type/telegraf'
//
// composer.hears('mirrors', async (ctx: TelegrafContext): Promise<void> => {
//     const link: string = `https://archlinux.org/mirrorlist/?country=RU&protocol=http&protocol=https&ip_version=4&ip_version=6&use_mirror_status=on`
//
//     await ctx.replyWithHTML(await message.man(true, search), {
//         reply_markup: await keyboard.man(search)
//     })
// })
//
// composer.hears(/\/man/gi, async (ctx: TelegrafContext): Promise<void> => {
//     await ctx.replyWithHTML(await message.man(false, null))
// })
//
// middleware(composer)
// consoles.module(__filename)
