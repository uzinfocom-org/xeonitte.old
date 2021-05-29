/**
 * Keyboard template manager
 * @module views/keyboards
 */

const { Markup } = require('telegraf')
const wiki = require('../db/wiki')
const wikis = require('../db/wiki')

const start_keyboard = Markup.inlineKeyboard([
    Markup.button.url('Guruhimiz', 'https://t.me/xinuxuz')
])

const rules_btn = Markup.inlineKeyboard([
    Markup.button.url('Qoidalar', 'https://t.me/xeonittebot?start=rules')
])

const which_keyboard = Markup.inlineKeyboard([
    Markup.button.callback("Ko'rish", 'which()')
])

const source_btn = Markup.inlineKeyboard([
    Markup.button.url('Source', 'https://github.com/xinuxuz/xeonitte'),
    Markup.button.url('Guruh', 'https://t.me/xeonitte_beta_test')
])

const wiki_btn = async () => {
    const base = []
    for (let wiki of await wikis()) {
        base.push([Markup.button.callback(wiki.name, `${wiki.name}()`)])
    }
    return Markup.inlineKeyboard(base)
}

const wiki_arch = async () => {
    const action = 'Arch'
    const btns = []
    let the_wiki = await wikis()
    for (let i = 0; i < the_wiki.length; i++) {
        if (the_wiki[i].name === action) {
            for (let j = 0; j < the_wiki[i].distros.length; j++) {
                btns.push([
                    Markup.button.url(
                        the_wiki[i].distros[j].name,
                        the_wiki[i].distros[j].link
                    )
                ])
            }
        }
    }
    return Markup.inlineKeyboard(btns)
}

const wiki_debian = async () => {
    const action = 'Debian'
    const btns = []
    let the_wiki = await wikis()
    for (let i = 0; i < the_wiki.length; i++) {
        if (the_wiki[i].name === action) {
            for (let j = 0; j < the_wiki[i].distros.length; j++) {
                btns.push([
                    Markup.button.url(
                        the_wiki[i].distros[j].name,
                        the_wiki[i].distros[j].link
                    )
                ])
            }
        }
    }
    return Markup.inlineKeyboard(btns)
}

module.exports = {
    start_keyboard,
    rules_btn,
    which_keyboard,
    source_btn,
    wiki_btn,
    wiki_arch,
    wiki_debian
}
