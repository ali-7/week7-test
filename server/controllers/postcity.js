const addCity = require('../database/queries/addCity');

exports.postCity = (req, res) => {
  addCity(req.body)
    .then((result) => { res.redirect('/'); });
  // .catch(err=>console.log(err));
};
