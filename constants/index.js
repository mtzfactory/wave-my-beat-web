const { DEBUG } = process.env

const { WEB_PORT } = process.env
let { PORT } = process.env

if (!PORT)
    PORT = WEB_PORT

module.exports = {
    DEBUG,
    PORT
}
