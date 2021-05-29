const fs = require('fs')
const path = require('path')

module.exports = async () => {
    return JSON.parse(
        await fs.promises.readFile(path.join(__dirname, '/', 'wiki.json'), {
            encoding: 'utf-8'
        })
    )
}
