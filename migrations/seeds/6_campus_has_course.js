var campusHasCourseFactory = require('../seeds_factories/campusHasCourseFactory')

exports.seed = function (knex) {
    return knex('campus_has_course').insert(campusHasCourseFactory.data);
};
