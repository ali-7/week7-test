const getCities = require('../database/queries/getCities')


const cities = (req, res) => {
        getCities()
        .then(result => res.json(result.rows))
        .catch(console.error())
    }

    module.exports = cities;