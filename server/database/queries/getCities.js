const connection = require('../config/connection');

const getCities = () => {
    return connection.query(`SELECT * FROM city`)
}

module.exports = getCities;