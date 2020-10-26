function create() {
    const data = [];
    const names = ['Presencial','Online','Semi presencial']

    for (let idx in names) {

        data.push({
            id: parseInt(idx) + 1,
            name: names[idx],
        })
    }

    return data;
}

module.exports = {
    data: create()
}
