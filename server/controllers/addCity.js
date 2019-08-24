const { insertCity } = require('../database/queries/addCity');

exports.addCity = (req, res) => {
  const name = req.body.name;
  const city = req.body.city;
  insertCity(name, city)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err))
};