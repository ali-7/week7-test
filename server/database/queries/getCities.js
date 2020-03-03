const dbConnection = require('../config/connection');

const getCities = () => dbConnection.query('select * from cities');

module.exports = getCities;
