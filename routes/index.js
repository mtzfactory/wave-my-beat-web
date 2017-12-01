const express = require('express')
const debug = require('debug')('web')

const { DEBUG } = require('../constants')

const web = express.Router()

if (DEBUG) {
    // middleware to use for all requests
    web.use(function(req, res, next) {
        // do logging
        const { method, path, body} = req
        debug({ method, path, body })
        next() // make sure we go to the next routes and don't stop here
    })
}

const anchors = [
    {link: '/', text: 'home' },
    {link: '/howitfeels', text: 'how it feels' },
    {link: '/contact', text: 'contact' }
]

web.get('/', (req, res) => {
    const CURRENT = 'home'
    res.render(CURRENT, { title: 'wavetronic', anchors: anchors, current: CURRENT })
})

web.get('/howitfeels', (req, res) => {
    const CURRENT = 'howitfeels'
    res.render(CURRENT, { title: 'wavetronic', anchors: anchors, current: CURRENT })
})

web.get('/contact', (req, res) => {
    const CURRENT = 'contact'
    res.render(CURRENT, { title: 'wavetronic', anchors: anchors, current: CURRENT })
})

module.exports = web