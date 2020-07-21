const db = require('../dbConfig')

module.exports = {
  find,
  add,
  remove
}

function find() {
  return db('tasks')
}

function add(newTask) {
  return db('tasks')
  .insert(newTask)
}

function remove(id) {
  return db('tasks')
  .where('id', id)
  .del()
}