const addCities = require('../database/queries/addCity')

const addCity = (req, res)=>{
    const citiesData = req.body;
    addCities(citiesData)
    .then(()=> res.redirect('/'))
    .catch(console.error())
    
}

module.exports = addCity;