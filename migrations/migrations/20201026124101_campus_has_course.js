
exports.up = function(knex) {
    return knex.schema
        .createTable('campus_has_course', function (table) {

            table.float('price').notNullable();

            table.integer('campus_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('campus')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('course_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('courses')
                .notNullable()
                .onDelete('CASCADE')

            table.dateTime('created_at').notNullable();

            table.primary(['campus_id', 'course_id']);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("campus_has_course")
};
