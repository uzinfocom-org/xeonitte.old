import { promises } from 'fs'
import { join } from 'path'

interface Manual {
    name: string
    info: string
    website: string
    documentation: string
}

export default async (): Promise<Manual[]> => {
    return JSON.parse(
        await promises.readFile(join('./', 'man.json'), {
            encoding: 'utf-8'
        })
    )
}
