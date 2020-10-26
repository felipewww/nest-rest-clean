var coursesFactory = require('../seeds_factories/coursesFactory')

exports.seed = function (knex) {
    return knex('courses').insert(coursesFactory.data);
};
