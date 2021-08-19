/**
 * Keyboard Layout Manager
 * @module layouts/keyboards
 */
import { Markup } from 'telegraf'
import vims from '@database/vim'
import mans from '@database/man'
import distros from '@database/distros'
import communities from '@database/communities'

import Fuse from 'fuse.js'

import { InlineKeyboardMarkup } from 'telegraf/typings/telegram-types'

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

export const man = async (query: string): Promise<InlineKeyboardMarkup> => {
    const base = []
    const result = new Fuse(await mans(), {
        keys: ['name', 'info']
    })

    for (const key of result.search(query)) {
        base.push([Markup.urlButton(key.item.name, key.item.documentation)])
    }
    return Markup.inlineKeyboard(base)
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

export const vim = async (): Promise<InlineKeyboardMarkup> => {
    const base = []
    for (const vim of await vims()) {
        base.push(Markup.callbackButton(`${vim.lesson}`, `vim_${vim.lesson}`))
    }
    return Markup.inlineKeyboard(base, {
        wrap: (btn, index, currentRow) => currentRow.length > 3
    })
}

export const offtopic: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Offtopic Guruhimiz`, `https://t.me/xinuxuz_offtopic`)]
])

export const aur: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [
        Markup.urlButton(
            `Yay [Golang] (tavsiya qilinadi)`,
            `https://aur.archlinux.org/packages/yay/`
        )
    ],
    [
        Markup.urlButton(
            `Paru [Rust] (tavsiya qilinadi)`,
            `https://aur.archlinux.org/packages/paru/`
        )
    ],
    [
        Markup.urlButton(
            `Aura [Haskell]`,
            `https://aur.archlinux.org/packages/aura/`
        )
    ],
    [
        Markup.urlButton(
            `Pacaur [Bash]`,
            `https://aur.archlinux.org/packages/pacaur/`
        )
    ],
    [
        Markup.urlButton(
            `Pakku [Nim]`,
            `https://aur.archlinux.org/packages/pakku/`
        )
    ],
    [
        Markup.urlButton(
            `Pikaur [Python]`,
            `https://aur.archlinux.org/packages/pikaur/`
        )
    ],
    [
        Markup.urlButton(
            `Trizen [Perl]`,
            `https://aur.archlinux.org/packages/trizen/`
        )
    ]
])
