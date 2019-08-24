const connection = require('../config/connection');

exports.insertCity = (nameUser, cityUser) => {
  const sql = {
    text: 'INSERT INTO cities (name, city) VALUES($1,$2) returning *',
    values: [
      nameUser,
      cityUser
    ],
  };

  return connection.query(sql);
};