const { Client } = require('pg');
const db = new Client({
  connectionString : 'postgres://postgres:changeme@localhost:5432/tododb'
})

db.connect((err) => {
  if (err) {
    return console.log(err)
  }
  console.log('DB CONNECTED !!!!')
})

module.exports = db