var faker = require('faker-br');

function create() {
    const len = 10;
    const data = [];

    while (data.length < len) {
        data.push({
            id: data.length + 1,
            name: faker.address.city()
        })
    }

    return data
}

module.exports = {
    data: create()
}
