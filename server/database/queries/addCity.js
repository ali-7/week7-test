const connection = require('../config/connection');

const postData = cityData => {
  return connection.query("INSERT INTO cities (name, city) VALUES ($1, $2)",
     [cityData.name, cityData.city]);
};
module.exports = postData;