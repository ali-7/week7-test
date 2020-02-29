const dbConnection = require('../config/connection');

const addCity = cityData => {
  const { name, city } = cityData;
  const sql = {
    text: "INSERT INTO cities (name, city) VALUES ($1, $2);",
    values: [name, city]
  };
  return dbConnection.query(sql);
};

module.exports = {
    addCity
};