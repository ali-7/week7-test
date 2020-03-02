const router = require('express').Router();
const getCities = require('../database/queries/getCities');
const addCity = require('../database/queries/addCity');

router.get('/cities', (req, res) => {
  getCities()
    .then(({ rows }) => res.json(rows))
    .catch((err) => console.error(err));
});


router.post('/add-city', (req, res) => {
  addCity(req.body).then(() => res.redirect('/')).catch(console.error);
});

module.exports = router;
