
exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments()
    tbl.string('description').unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
};
