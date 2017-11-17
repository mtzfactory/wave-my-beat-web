const { DEBUG } = process.env

const { PORT, WEB_PORT } = process.env
if (!PORT)
    PORT = WEB_PORT

module.exports = {
    DEBUG,
    WEB_PORT
}
