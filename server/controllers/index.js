const express = require("express");
const { getData } = require("../database/queries/getCities");
const { addData } = require("../database/queries/addCity");

const router = express.Router();
router.get("/cities", (req, res) => {
  getData()
    .then(result => res.json(result.rows))
    .catch(e => console.log("error >> " + e));
});
router.post("/add-city", (req, res) => {
  addData(req.body)
    .then(() => res.redirect("/"))
    .catch(e => console.log("error >> " + e));
});

module.exports = router;
