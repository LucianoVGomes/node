const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)
 
app.use(express.json())

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) =>{
    const title = req.body.title
    const pageqty = req.body.pageqty

    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')` // query é a instrução 

    conn.query(query, function(err) {
        if (err) {
            console.log(err)
        }

        res.redirect('/books') // Caso aconteça algum erro, será redirecionado pra pasta HOME ' Principal '
    })
})

app.get('/books', function (req, res) {
    const query = `SELECT * FROM books`
  
    conn.query(query, function (err, data) {
      if (err) {
        console.log(err)
      }
  
      const books = data
  
      console.log(data)
  
      res.render('books', { books })
    })
  })

app.get('/books/:id', (req,res) => {

    const id = req.params.id // Resgatando o ID de uma URL

    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, function(err, data){
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('book', { book })
    } )
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`
    
    conn.query(sql, function(err, data){
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('editbook', { book })
    } )
})
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vini',
    database: 'nodemysql2',
})

conn.connect(function(err) {

    if(err) {
        console.log(err)
    }
    console.log('Conectou ao MYSQL')

    app.listen(3000)
})