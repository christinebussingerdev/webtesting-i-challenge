
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'first task'},
        {id: 2, description: 'second task'},
        {id: 3, description: 'third task'},
      ]);
    });
};
