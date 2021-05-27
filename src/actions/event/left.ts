import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import { TelegrafContext } from '@type/telegraf'

composer.on('left_chat_member', async (ctx: TelegrafContext): Promise<void> => {
    await ctx.telegram.sendMessage(
        ctx.chat.id,
        `Ishonamizki, ${
            ctx.message?.left_chat_member.first_name ||
            'chiqib ketgan foydalanuvchi'
        } davramizga qaytadi... yoki... yo'q!`,
        {
            parse_mode: 'HTML'
        }
    )
})

middleware(composer)
consoles.module(__filename)
