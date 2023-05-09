//configuracoes

const express =  require('express')
const exphbs = require('express-handlebars')
const bodyParser =  require('body-parser')

const app = express()
const port = 3000;

//DB

const db = require('./db/conection') 

//template engine

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true }))

//importacao de rotas

const notesRoutes = require('./routes/notes')

//Rotas

app.get('/', (req,res) => {
    res.render('home')
})

app.use('/notes', notesRoutes)

db.initDb((err,db)=> {
    if(err){
        console.log(err)
    }else{
        console.log("O banco conectou com sucesso")
        app.listen(port, () => {
            console.log(`Projeto rodando na porta ${port}`)
        })
    }
})