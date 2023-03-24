require('dotenv').config()
//Config
const PORT = process.env.PORT
console.log(PORT)

const express = require('express')
const app = express()

//Dependencies
const methodOverride = require('method-override')


//Middleware
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
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
  