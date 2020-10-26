exports.up = function(knex) {
    return knex.schema
        .createTable('campus_course_offers', function (table) {
            table.increments('id');

            table.string('name', 255).notNullable();

            table.float('discount_percentage').notNullable();

            table.boolean('enabled').notNullable();

            table.date('start_date').notNullable();

            table.string('enrollment_semester', 255).notNullable();

            table.integer('course_id')
                .unsigned()
                .index()
                .references('course_id')
                .inTable('campus_has_course')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('campus_id')
                .unsigned()
                .index()
                .references('campus_id')
                .inTable('campus_has_course')
                .notNullable()
                .onDelete('CASCADE')

            table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("campus_course_offers")
};
