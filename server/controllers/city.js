const getCities = require("../database/queries/getCities");
const addCity = require("../database/queries/addCity");

module.exports = {
    list: (req, res) => {
        getCities()
        .then(result => res.json(result.rows))
        .catch(error => console.log("Error:", error));
    },
    add: (req, res) => {
        addCity(req.body)
        .then(() => res.redirect("/"))
        .catch(error => console.log("Error:", error));
    }
}