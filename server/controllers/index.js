const express = require("express");

const router = express.Router();

const { getCities } = require("../database/queries/getCities")
const { addCity } = require("../database/queries/addCity")

router.get('/cities' ,(req,res,next)=>{
  getCities()
  .then((result)=> res.json(result.rows))
  .catch(() => next('Erorr in database'))
}) 

router.post('/add-city', (req,res,next)=>{
  const data = req.body;
  addCity(data)
    .then(res.redirect('/'))
    .catch(() => next('Erorr in add Data'))
})

module.exports = router;
