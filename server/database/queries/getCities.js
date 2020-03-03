const connection = require('../config/connection');
const getData = () => connection.query('select * from cities');

module.exports = { getData };
