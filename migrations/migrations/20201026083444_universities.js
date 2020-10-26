
exports.up = function(knex) {
    return knex.schema
        .createTable('universities', function (table) {
            table.increments('id');

            table.string('name', 255).notNullable();
            table.float('score');
            table.string('logo_url', 255).notNullable();

            table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("universities")
};
