const getCities = require('../database/queries/getCities');

exports.showCities = (req, res) => {
  getCities()
    .then((result) => res.send(result.rows));
};
