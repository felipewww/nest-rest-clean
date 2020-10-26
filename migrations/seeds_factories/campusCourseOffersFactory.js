var RandomNumbers = require('../utils/RandomNumbers')

function create() {

    const data2 = [
        {
            id: 1,
            discount_percentage: RandomNumbers.randomFloatBetween(1, 100),
            enabled: 1,
            start_date: '2020-07-01',
            enrollment_semester: '2020.2',
            course_id: 1,
            campus_id: 1,
        },
        {
            id: 2,
            discount_percentage: RandomNumbers.randomFloatBetween(1, 100),
            enabled: 1,
            start_date: '2020-07-01',
            enrollment_semester: '2020.2',
            course_id: 4,
            campus_id: 5,
        },
        {
            id: 3,
            discount_percentage: RandomNumbers.randomFloatBetween(1, 100),
            enabled: 1,
            start_date: '2020-07-01',
            enrollment_semester: '2020.2',
            course_id: 8,
            campus_id: 9,
        },
    ]

    return data2;
}

module.exports = {
    data: create()
}
