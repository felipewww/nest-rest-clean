module.exports = {
    randomFloatBetween: function (min, max) {
        return Math.random() * (max - min) + min;
    },

    randomMaxFloor: function (max) {
        return Math.floor(Math.random() * max)
    }
}
