const express = require('express')
const db = require('../models/db')
const app = express.Router()

app.post('/', (req, res) => {
  const { lastname, firstname } = req.body;
  db.query(`INSERT INTO users(id, firstname, lastname) VALUES (DEFAULT, '${firstname}', '${lastname}')`)
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

app.get('/', (req, res) => {
  db.query('SELECT * FROM users')
    .then(result => res.json(result.rows))
    .catch(err => console.log(err))
})

module.exports = app