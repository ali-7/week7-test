const express = require("express");
const gitCitise = require('../database/queries/getCities')
const addCity = require('../database/queries/addCity');

const router = express.Router();
router.get('/cities', ( req, res ) => {
    gitCitise()
    .then( (result) => res.json(result.rows))
  })

router.post('/add-city', (req, res) => {
    addCity(req.body).then(() => res.redirect('/'))
  });
module.exports = router;
