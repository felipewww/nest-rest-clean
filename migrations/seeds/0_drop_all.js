exports.seed =  async function (knex) {
    await knex('campus').del()
    await knex('cities').del()
    await knex('universities').del()
    await knex('courses').del()
    await knex('course_kinds').del()
    await knex('course_levels').del()
    await knex('course_shifts').del()
    await knex('campus_has_course').del()
    await knex('campus_course_offers').del()
};
