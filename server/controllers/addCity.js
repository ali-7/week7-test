const addCity = require('../database/queries/addCity');

module.exports = (req, res, next) => {
  const { name, city } = req.body;

  addCity({ name, city })
    .then(() => res.redirect('/'))
    .catch(next);
};
