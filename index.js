const express = require('express')
const pug = require('pug')

const categoryController = require('./controllers/category')
const todoController = require('./controllers/todo')
const userController = require('./controllers/user')
const app = express()

app.use(express.json())

// app.use( (req, res, next) => {
//   res.append('COCO', 'Coucou');
//   next()
// })

app.use('/categories', categoryController)
app.use('/todos', todoController)
app.use('/users', userController)

app.set('view engine', 'pug')

// app.get('/', (req, res) => {
//   res.render('index', {
//       title: "Boujour promo A",
//       categories: [
//         {name: 'A faire'},
//         {name: 'En cours'},
//         {name: 'Fait'}
//       ]
//     })
// })

app.get('/', (req, res) => {
  db.query('SELECT * FROM categories').then( (result) => {
    res.render('index', {
      title: 'COucou la propmo !',
      categories: result.rows
    })
  }).catch( err => {
    console.log('err : ', err)
    res.send(err);
  })
})

//TODO : ca marche pas !!!
app.use((err, req, res, next) => {
  res.status(500).json(err)
})

app.listen(3000, () => {
  console.log('Server connecté sur le port 3000 ( http://localhost:3000)')
})
.on('error', err => console.log('erreur de connexion : ', err))