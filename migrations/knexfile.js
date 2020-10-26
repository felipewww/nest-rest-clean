// Update with your config settings.
module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            database: 'nest_api',
            user: 'root',
            password: 'secret',
            host: 'nest-db',
            port: '3306'
        },
        pool: {
            min: 1,
            max: 1
        },
        migrations: {
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './seeds'
        }
    },
};
