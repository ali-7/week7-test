const connection = require('../config/connection');

exports.getAllCities = () => {
  return connection.query('SELECT * FROM cities');
};