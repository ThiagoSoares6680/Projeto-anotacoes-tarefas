const Router = require('express').Router
const db = require('../db/conection')
const { ObjectID } = require('mongodb')


const router = Router()

//Criacao de rotas

router.get('/',function(req, res){

    res.render('notes/create')

})

router.post('/', function(req, res){

    const data = req.body
    const title = data.title
    const description = data.description
 
    db.getDb()
        .db()
        .collection('notes')
        .insertOne({title: title, description: description})

    res.redirect(301,'/')
})

module.exports = router