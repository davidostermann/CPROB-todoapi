const express = require('express')
const db = require('../models/db')
const model = require('../models/category')

const app = express.Router()

app.get('/', (req, res) => {
  console.log('COUCOU')
  model.getAllCategories()
    .then(result => res.json(result.rows))
    .catch(err => res.json(err))
})

app.post('/', (req, res) => {
  const { name } = req.body;
  model.createCategory(name)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  model.updateCategory(id, name)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM categories WHERE id=${id}`)
    .then((result) => {
      res.json(results)
    })
    .catch((err) => {
      res.json(err)
    })
})

module.exports = app;