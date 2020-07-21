const db = require('../dbConfig')

module.exports = {
  find,
  add,
  remove
}

function find() {
  return db('users')
}

function add(newTask) {
  return db('users')
  .insert(newTask)
}

function remove(id) {
  return db('tasks')
  .where(id)
  .del()
}