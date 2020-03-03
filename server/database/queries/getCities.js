const conect = require("../config/connection")

module.exports = {
  getCities : () => {
  return conect.query('select * from cities')
  }
}