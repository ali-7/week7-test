const connection = require('../config/connection');

module.exports = () => {
  const sql = `SELECT * FROM city`;
  return connection.query(sql);
};
