// Startup file for WHC/cPanel Passenger
// Export an Express app synchronously (Passenger expects a plain app, not a Promise)

const next = require('next')
const express = require('express')

const dev = false
// Be explicit about distDir in case next.config.js is not auto-loaded in this host
const nextApp = next({ dev, dir: '.', conf: { distDir: 'next_build' } })
const handle = nextApp.getRequestHandler()
const server = express()

// Basic health endpoint to help diagnose 500s
server.get('/_health', (_req, res) => {
  res.status(200).send('ok')
})

// Export a Promise so Passenger waits for Next.js to be ready before routing
module.exports = nextApp.prepare().then(() => {
  // Route everything through Next once prepared
  server.all('*', (req, res) => handle(req, res))
  // eslint-disable-next-line no-console
  console.log('Next.js prepared and ready')
  return server
}).catch((err) => {
  console.error('Next.js prepare failed during startup:', err)
  // Still export the health endpoint server so /_health works for debugging
  return server
})
