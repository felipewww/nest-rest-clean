exports.up = function(knex) {
    return knex.schema
        .createTable('campus', function (table) {
            table.increments('id');

            table.string('name', 255).notNullable();

            table.integer('city_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('cities')
                .notNullable()
                .onDelete('RESTRICT')

            table.integer('university_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('universities')
                .notNullable()
                .onDelete('RESTRICT')

            table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable("campus")
};
