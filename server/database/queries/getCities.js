const connection = require('../config/connection');

const getCities = () => connection.query('select * from cities');
module.exports = getCities;
