function create() {
    const data = [];
    const names = ['Bacharelado','Superior','Técnico','Tecnólogo','Mestrado','Doutorado','MBA']

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
