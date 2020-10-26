
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appsetup').del()
    .then(function () {
      // Inserts seed entries
      return knex('appsetup').insert([
        {id: 1, col_test: 'rowValue1'},
        {id: 2, col_test: 'rowValue2'},
        {id: 3, col_test: 'rowValue3'}
      ]);
    });
};
