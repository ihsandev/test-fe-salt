const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.NODE_ENV || 3500
const express = require('express')
const app = next({ dir: '.', dev })

// routing
const routes = require('./config/routes')
const handler = routes.getRequestHandler(app)

// With express
app.prepare().then(() => {
  const server = express()

  server.use(handler)

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})