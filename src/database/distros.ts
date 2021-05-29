import { promises } from 'fs'
import { join } from 'path'

interface Distro {
    name: string
    link: string
}

interface Family {
    name: string
    link: string
    distros: Distro[]
}

export default async (): Promise<Family[]> => {
    return JSON.parse(
        await promises.readFile(join('./', 'distros.json'), {
            encoding: 'utf-8'
        })
    )
}
