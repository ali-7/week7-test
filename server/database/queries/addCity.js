const connection = require('../config/connection');

const addCity = citiesData => {
    const {name ,city} = citiesData
    const sql = {
        text : 'INSERT INTO city (name, city) VALUES ($1, $2)',
        values: [name, city]
    }
    return connection.query(sql)
}

module.exports = addCity;