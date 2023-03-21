const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')

//New
breads_router.get('/new', (req, res) => {
    res.render('new')
})


//SHOW
breads_router.get('/:arrayIndex', (req, res) => {
    // res.send(Bread[req.params.arrayIndex])
    if (Bread[req.params.arrayIndex]) {
        res.render('show', {
            bread: Bread[req.params.arrayIndex]
        })

    } else {
        res.send('this index does not exist ---> 404')
    }
   
})

//Delete
breads_router.delete('/:arrayIndex', (req, res) => {
    Bread.splice(req.params.arrayIndex, 1) 
        res.statusCode(303).redirect('/breads')
})

  

//Index
breads_router.get('/', (req, res) => {
    res.render('index', {
        bread: Bread,
        title: 'Index Page'
    })
    //res.send(Bread)
})

//Create
breads_router.post('/', (req, res) => {
    if (!req.body.image) { // req.body.image === false || req.body.image === ""
    req.body.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPA-mqJhZ7w99TBo6y8l1UgRKbr44KzIf8NQ&usqp=CAU"
}

    req.body.hasGluten = req.body.hasGluten === 'on'
    Bread.push(req.body)
    //res.send(Bread)
    res.redirect('/breads')

    })


module.exports = breads_router