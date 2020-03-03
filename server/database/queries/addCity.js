const connection = require('../config/connection');

const addData = (data) => {
  const sql = {
    text: 'INSERT INTO cities (name, city) VALUES ($1, $2) RETURNING *;',
    values: [data.name, data.city],
  };
  return connection.query(sql);
};

module.exports = { addData };
