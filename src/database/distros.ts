import { promises } from 'fs'
import { join } from 'path'

interface Distro {
    name: string
    link: string
}

export default async (): Promise<Distro[]> => {
    return JSON.parse(
        await promises.readFile(join('./', 'distros.json'), {
            encoding: 'utf-8'
        })
    )
}
