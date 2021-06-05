/**
 * Keyboard Layout Manager
 * @module layouts/keyboards
 */
import { Markup } from 'telegraf'
import distros from '@database/distros'
import communities from '@database/communities'
import { InlineKeyboardMarkup } from 'telegraf/typings/telegram-types'
import { CallbackButton, UrlButton } from 'telegraf/typings/markup'

export const start: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Guruhimiz`, `https://t.me/xinuxuz`)]
])

export const help: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Guruhimiz`, `https://t.me/xinuxuz`)]
])

export const rule: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [
        Markup.urlButton(
            `Qoidalarni Ko'rish`,
            `https://t.me/xeonittebot?start=rules`
        )
    ]
])

export const rules: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Guruhga Qaytish`, `https://t.me/xinuxuz`)]
])

export const newMember: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Qoidalarimiz`, `https://t.me/xeonittebot?start=rules`)]
])

export const source: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Havola`, `https://github.com/xinuxuz/xeonitte`)]
])

export const distro = async (): Promise<InlineKeyboardMarkup> => {
    const base = []
    for (const distro of await distros()) {
        base.push([Markup.urlButton(distro.name, distro.link)])
    }
    return Markup.inlineKeyboard(base)
}

export const community = async (): Promise<InlineKeyboardMarkup> => {
    const base = []
    for (const community of await communities()) {
        base.push(
            Markup.callbackButton(
                community.name,
                'community_' + community.callback
            )
        )
    }
    return Markup.inlineKeyboard(base, {
        wrap: (btn, index, currentRow) => currentRow.length > 2
    })
}

export const beta: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Guruhimiz`, `https://t.me/xeonitte_beta_test`)],
    [Markup.urlButton(`JS Test Botimiz`, `https://t.me/xeonitte_beta_bot`)],
    [
        Markup.urlButton(
            `TS Test Botimiz`,
            `https://t.me/xeonitte_genemator_bot`
        )
    ],
    [Markup.urlButton(`Admin (Jakhongir)`, `https://t.me/JustCodeIt`)]
])
