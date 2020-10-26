var faker = require('faker-br');
var RandomNumbers = require('../utils/RandomNumbers')

function create() {
    const data = [];
    const names = ['UNIP', 'UNICID', 'UNICSUL', 'USP', 'Anhembi-morumbi']

    const max = 5;
    const min = 3;
    for (let idx in names) {

        var fakeScore = RandomNumbers.randomFloatBetween(min, max)

        data.push({
            id: parseInt(idx) + 1,
            name: names[idx],
            score: fakeScore.toFixed(1),
            logo_url: faker.image.imageUrl(),
        })
    }

    return data;
}

module.exports = {
    data: create()
}
