/**
 * JSON Down Parser
 * @name axios json parser
 * @description parses json from online API
 * @return JSON | null
 */
import axios, { AxiosResponse } from 'axios'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export default async (link: string | URL): Promise<any> => {
    try {
        const response: AxiosResponse = await axios.get(<string>link)
        return response.data
    } catch (e) {
        return null
    }
}
