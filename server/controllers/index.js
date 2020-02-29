const express = require("express");
const { getCities } = require('../database/queries/getCities');
const { addCity } = require('../database/queries/addCity');

const router = express.Router();

router.get('/cities', (req, res) => {
    getCities ()
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => console.log("err:", err));
});

router.post("/add-city", (req, res) => {
    const cityInfo = req.body;
    addCity(cityInfo)
      .then(() => res.redirect("/"))
      .catch(err => console.log("err:", err));
  });

module.exports = router;
