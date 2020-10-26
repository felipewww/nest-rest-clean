var campusCourseOffersFactory = require('../seeds_factories/campusCourseOffersFactory')

exports.seed = function (knex) {
    return knex('campus_course_offers').insert(campusCourseOffersFactory.data);
};
