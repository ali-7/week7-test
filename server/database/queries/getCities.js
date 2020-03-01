module.exports = () => 
    require("../config/connection")
        .query("SELECT * FROM cities")