const express = require("express");
const { allCities } = require('./allCities');
const { addCity } = require('./addCity');

const router = express.Router();


router.get('/cities', allCities);
router.post('/add-city', addCity);

module.exports = router;
