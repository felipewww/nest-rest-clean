var courseLevelsFactory = require('../seeds_factories/courseLevelsFactory')

exports.seed = function (knex) {
    return knex('course_levels').insert(courseLevelsFactory.data);
};

