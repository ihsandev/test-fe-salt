const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.NODE_ENV === 'production' ? 2026 : 2027
const compression = require('compression')
const app = next({ dir: '.', dev })

// routing
const routes = require('./config/routes')
const handler = routes.getRequestHandler(app)

// With express
const express = require('express')
app.prepare().then(() => {
  const server = express()

  server.use(handler)

  server.use(express.static(__dirname, { dotfiles: 'allow' }))
  server.use(compression())

  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })

})