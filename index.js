const express = require('express')
const pug = require('pug')
const app = express()

app.use( express.json())

const client = require('pg').Client;

const db = new client({
  connectionString: 'postgres://postgres:changeme@localhost:5432/tododb'
});

db.connect( (err) => {
  if(err) {
    return console.log(err)
  }
  console.log('DB CONNECTED !!!!')
});

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  db.query('SELECT * FROM categories').then( (result) => {
    res.render('index', {
      categories: result.rows
    })
  }).catch( err => {
    console.log('err : ', err)
  })
})

app.get('/categories', (req, res) => {
  db.query('SELECT * FROM categories')
    .then(result => res.json(result.rows))
    .catch( err => console.log(err))
})

app.get('/todos', (req, res) => {
  db.query('SELECT * FROM todos')
    .then(result => res.json(result.rows))
    .catch(err => console.log(err))
})

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users')
    .then(result => res.json(result.rows))
    .catch(err => console.log(err))
})

app.post('/categories', (req, res) => {
  console.log('req.body : ', req.body);
  
  const {name} = req.body;

  db.query(`INSERT INTO categories(id, name) VALUES (DEFAULT, '${name}')`)
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

app.listen(3000, () => {
  console.log('Server connecté sur le port 3000 ( http://localhost:3000)')
})
.on('error', err => console.log('erreur de connexion : ', err))