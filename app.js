// Startup file for WHC/cPanel Passenger
// Exports an Express server that serves the built Next.js app

const next = require('next')
const express = require('express')

const dev = false
const app = next({ dev, dir: '.' })
const handle = app.getRequestHandler()
const server = express()

module.exports = app.prepare().then(() => {
  server.all('*', (req, res) => handle(req, res))
  return server
})
