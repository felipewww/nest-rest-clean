var universityFactory = require('../seeds_factories/universityFactory')

exports.seed =  async function (knex) {
    return knex('universities').insert(universityFactory.data);
};
