var courseShiftsFactory = require('../seeds_factories/courseShiftsFactory')

exports.seed = function (knex) {
    return knex('course_shifts').insert(courseShiftsFactory.data);
};
