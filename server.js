require('dotenv').config()

const express = require('express')
const app = express()

//Config
const PORT = process.env.PORT
console.log(PORT)

app.get('/', (req, res) => {
    res.send('Hello World')
  })

  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)

app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })
  