import { promises } from 'fs'
import { join } from 'path'

interface Vim {
    name: string
    link: string
    lesson: number
}

export default async (): Promise<Vim[]> => {
    return JSON.parse(
        await promises.readFile(join('./', 'vim.json'), {
            encoding: 'utf-8'
        })
    )
}
