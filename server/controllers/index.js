const express = require("express");
const router = express.Router();

const cities = require('./cities');
const addCity = require('./addCity')

router.get('/cities',cities)
router.post('/add-city',addCity)

module.exports = router;
