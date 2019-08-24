const { getAllCities } = require('../database/queries/getCities');


exports.allCities = (req, res) => {
  getAllCities()
    .then((result) => {
      res.writeHead(200, { 'Content-Type': 'application.json' })
      res.end(JSON.stringify(result.rows));
    })
    .catch(err => console.log(err));
};
