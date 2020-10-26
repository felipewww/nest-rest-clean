var RandomNumbers = require('../utils/RandomNumbers')

function create() {

    const data2 = [
        {
            price: RandomNumbers.randomFloatBetween(350, 1200),
            course_id: 1,
            campus_id: 1,
        },
        {
            price: RandomNumbers.randomFloatBetween(350, 1200),
            course_id: 2,
            campus_id: 1,
        },
        {
            price: RandomNumbers.randomFloatBetween(350, 1200),
            course_id: 3,
            campus_id: 4,
        },
        {
            price: RandomNumbers.randomFloatBetween(350, 1200),
            course_id: 4,
            campus_id: 5,
        },
        {
            price: RandomNumbers.randomFloatBetween(350, 1200),
            course_id: 5,
            campus_id: 6,
        },
        {
            price: RandomNumbers.randomFloatBetween(350, 1200),
            course_id: 6,
            campus_id: 6,
        },
        {
            price: RandomNumbers.randomFloatBetween(350, 1200),
            course_id: 7,
            campus_id: 8,
        },
        {
            price: RandomNumbers.randomFloatBetween(350, 1200),
            course_id: 8,
            campus_id: 9,
        },
        {
            price: RandomNumbers.randomFloatBetween(350, 1200),
            course_id: 10,
            campus_id: 5,
        },
    ]

    return data2;
}

module.exports = {
    data: create()
}
