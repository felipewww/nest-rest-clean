exports.up = function(knex) {
    return knex.schema
        .createTable('courses', function (table) {
            table.increments('id');
            table.string('name', 255).notNullable();

            table.integer('course_kind_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('course_kinds')
                .notNullable()
                .onDelete('RESTRICT')

            table.integer('course_level_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('course_levels')
                .notNullable()
                .onDelete('RESTRICT')

            table.integer('course_shift_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('course_shifts')
                .notNullable()
                .onDelete('RESTRICT')

            table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("courses")
};
