function create() {
    const data = [];
    const names = ['Manhã', 'Tarde', 'Noite', 'Integral']

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
