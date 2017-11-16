const db = require('./db')

module.exports = {

  getAllCategories() {
    return db.query('SLECT * FROM categories ORDER BY id')
  },
  createCategory(name) {
    return db.query(`INSERT INTO categories(id, name) VALUES (DEFAULT, '${name}')`)
  },
  updateCategory(id, name) {
    return db.query(`UPDATE categories SET name='${name}' WHERE id=${id}`)
  }


}

