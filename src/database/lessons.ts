import { promises } from 'fs'
import { join } from 'path'

interface Lessons {
    name: string
    link: string
    id: number
}

export default async (): Promise<Lessons[]> => {
    return JSON.parse(
        await promises.readFile(join('./', 'lessons.json'), {
            encoding: 'utf-8'
        })
    )
}
