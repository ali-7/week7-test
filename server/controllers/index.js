const router = require('express').Router();
const getCities = require('./getCities');
const addCity = require('./addCity.js');

router.get('/cities', getCities);
router.post('/add-city', addCity);

module.exports = router;
