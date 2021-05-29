/**
 * JSON Down Parser
 * @name axios json parser
 * @description parses json from online API
 * @return JSON
 */
const axios = require('axios')

module.exports = async (link) => {
    try {
        const response = await axios.get(link)
        return response.data
    } catch (e) {
        return null
    }
}
