const express = require('express')
const favicon = require('favicon')
const moment = require('moment')
const debug = require('debug')('app')

require('dotenv').config()
const {
    DEBUG,
    PORT
} = require('./constants')

if (DEBUG)
{
    debug('> Started:\t\t', new Date().toLocaleString())
    debug('DEBUG\t\t\t', DEBUG)
    debug('PORT\t\t\t', PORT)
}

if (!PORT)
return debug('> Set the WEB environment variables first.')

// WEB & API SERVER ----------------------------------
const app = express()

// PUG -----------------------------------------------
app.use(express.static('public'))
app.set('view engine', 'pug')

// FAVICON
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// REGISTER OUR ROUTES -------------------------------
// routes for the open web
app.use('/', require('./routes'))

// SERVER UP -----------------------------------------
app.listen(PORT, () => {
    debug(`> Magic happens on port ${PORT}`) // eslint-disable-line
})

process.on('SIGINT', function() {
  debug('> Bye bye! Have a nice day ;-)')
  debug('> Closed:\t\t', new Date().toLocaleString())
  process.exit()
})
