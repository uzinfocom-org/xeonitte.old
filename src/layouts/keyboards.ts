/**
 * Keyboard Layout Manager
 * @module layouts/keyboards
 */
import { Markup } from 'telegraf'
import { InlineKeyboardMarkup } from 'telegraf/typings/telegram-types'

export const start: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Guruhimiz`, `https://t.me/xinuxuz`)]
])

export const rules: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Hello World`, `https://google.com`)]
])

export const newMember: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Qoidalarimiz`, `https://t.me/xeonittebot?start=rules`)]
])

export const source: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Havola`, `https://github.com/xinuxuz/xeonitte`)]
])
