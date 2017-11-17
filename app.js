const express = require('express')
const moment = require('moment')
const debug = require('debug')('app')

require('dotenv').config()
const { 
    DEBUG,
    WEB_PORT
} = require('./constants')

if (DEBUG)
{
    debug('> Started:\t\t', new Date().toLocaleString())
    debug('DEBUG\t\t\t', DEBUG)
    debug('WEB_PORT\t\t\t', WEB_PORT)
}

if (!WEB_PORT)
return debug('> Set the WEB environment variables first.')

// WEB & API SERVER ----------------------------------
const app = express()

// PUG -----------------------------------------------
app.use(express.static('public'))
app.set('view engine', 'pug')

// REGISTER OUR ROUTES -------------------------------
// routes for the open web
app.use('/', require('./routes'))

// SERVER UP -----------------------------------------
app.listen(WEB_PORT, () => {
    debug(`> Magic happens on port ${WEB_PORT}`) // eslint-disable-line
})

process.on('SIGINT', function() {
  debug('> Bye bye! Have a nice day ;-)')
  debug('> Closed:\t\t', new Date().toLocaleString())
  process.exit()
})