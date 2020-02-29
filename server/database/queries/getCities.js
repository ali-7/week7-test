const dbConnection = require('../config/connection');

const getCities = () => {
    return dbConnection.query(`SELECT * FROM cities;`);
  };
  
  module.exports = { getCities };