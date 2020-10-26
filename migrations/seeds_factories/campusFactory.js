var faker = require('faker-br');
var universityFactory = require('./universityFactory')
var cityFactory = require('./cityFactory')
var RandomNumbers = require('../utils/RandomNumbers')

var allCities = cityFactory.data;
var allUniversities = universityFactory.data;

function RandomCityId() {
    const randomIndex = RandomNumbers.randomMaxFloor(allCities.length)
    return allCities[randomIndex].id
}

function RandomUniversityId() {
    const randomIndex = RandomNumbers.randomMaxFloor(allUniversities.length)
    return allUniversities[randomIndex].id
}

function create() {
    const len = 10;
    const data = [];

    while (data.length < len) {
        data.push({
            id: data.length + 1,
            name: faker.address.streetName(),
            city_id: RandomCityId(),
            university_id: RandomUniversityId(),
        })
    }

    return data
}


module.exports = {
    data: create()
}
