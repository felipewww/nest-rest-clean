var campusFactory = require('../seeds_factories/campusFactory')

exports.seed = function (knex) {
    return knex('campus').insert(campusFactory.data);
};
