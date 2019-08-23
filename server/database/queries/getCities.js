const connection = require('../config/connection');
const getData = () => {
  return connection.query(`SELECT * FROM cities;`);
};
module.exports = getData;