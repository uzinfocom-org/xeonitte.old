/**
 * Console input manager
 * @module views/consoles
 */

const path = require('path')

const errors = (err) => {
    console.log(`\n` + `#Error occurred while running the app: ${err}``\n`)
}

const launch = (env) => {
    console.log(
        `\n` + `*Bot has been started successfully (env: local)*` + `\n`
    )
}

const log_module = (fn) => {
    const modules =
        path.dirname(fn).split(path.sep).pop() + '/' + path.basename(fn)
    console.log(`The module ${modules} has been loaded.`)
}

module.exports = {
    launch,
    log_module,
    errors
}
