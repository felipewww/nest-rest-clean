exports.up = function(knex) {
    return knex.schema
        .createTable('course_kinds', function (table) {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("course_kinds")
};
