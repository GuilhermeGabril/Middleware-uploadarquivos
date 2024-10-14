const express = require('express')
const { middlewareA, middlewareB } = require('./middlewares/middleware-c')
const uploadMiddleware = require('./middlewares/upload-middleware')

const app = express()
app.use(express.static('public'))

app.post('/upload', uploadMiddleware.single('image'), (req, res) => {
  console.log({ a: req.middlewareA, b: req.middlewareB })
  console.log(req.file, req.body)
  res.end()
})

const PORT = 5500
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}/`))