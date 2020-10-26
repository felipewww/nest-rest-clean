
exports.up = function(knex) {
    return knex.schema
        .createTable('appsetup', function (table) {
            table.increments('id');

            table.string('col_test', 255).notNullable();

            table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("appsetup")
};
