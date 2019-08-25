const connection = require('../config/connection');

module.exports = cityInfomation => {
  const { name, city } = cityInfomation;
  const sql = {
    text: `INSERT INTO city (name,city) VALUES ($1,$2)`,
    values: [name, city]
  };
  return connection.query(sql);
};
