var courseKindsFactory = require('../seeds_factories/courseKindsFactory')

exports.seed = function (knex) {
    return knex('course_kinds').insert(courseKindsFactory.data);
};
