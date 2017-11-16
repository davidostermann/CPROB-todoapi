const express = require('express')
const db = require('../models/db')
const app = express.Router()

app.post('/', (req, res) => {
  const { name, catId } = req.body;
  db.query(`INSERT INTO todos(id, name, category_id) VALUES (DEFAULT, '${name}', ${catId})`)
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

app.get('/', (req, res) => {
  db.query('SELECT * FROM todos')
    .then(result => res.json(result.rows))
    .catch(err => console.log(err))
})

module.exports = app