const getCities = require('../database/queries/getCities');

module.exports = (req, res, next) => {
  getCities()
    .then(result => {
      return result.rows;
    })
    .then(result => res.json(result))
    .catch(next);
};
