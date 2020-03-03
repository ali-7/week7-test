const conect = require("../config/connection")

module.exports = {
  addCity : (data) => {
  return conect.query('INSERT INTO cities (name,city) VALUES($1,$2)',[data.name,data.city]);
  }
}