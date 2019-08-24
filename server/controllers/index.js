const express = require('express');

const { showCities } = require('./cities');
const { postCity } = require('./postcity');

const router = express.Router();

router.get('/cities', showCities);
router.post('/add-city', postCity);

module.exports = router;
