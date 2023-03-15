require('dotenv').config()

const express = require('express')
const app = express()

//Config
const PORT = process.env.PORT
console.log(PORT)

//Middleware
app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req, res) => {
    res.send('Hello World')
  })

  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)

  //404 GO LAST
  app.get('*', (req, res) => {
    res.send('this is a 404')
  })

app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })
  