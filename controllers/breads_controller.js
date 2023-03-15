const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')


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

  

//Index
breads_router.get('/', (req, res) => {
    res.render('index', {
        bread: Bread,
        title: 'Index Page'
    })
    //res.send(Bread)
})

module.exports = breads_router