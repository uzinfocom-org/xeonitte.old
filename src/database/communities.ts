import { promises } from 'fs'
import { join } from 'path'

interface Community {
    name: string
    about: string
    link: string
    callback: string
    telegram: Partial<string>
}

export default async (): Promise<Community[]> => {
    return JSON.parse(
        await promises.readFile(join('./', 'communities.json'), {
            encoding: 'utf-8'
        })
    )
}
