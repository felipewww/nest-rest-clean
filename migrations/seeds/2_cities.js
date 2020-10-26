var cityFactory = require('../seeds_factories/cityFactory')

exports.seed = function (knex) {
    return knex('cities').insert(cityFactory.data);
};
