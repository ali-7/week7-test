module.exports = data => 
    require("../config/connection")
        .query({
            text: "INSERT INTO cities (name, city) VALUES ($1, $2)",
            values: [data.name, data.city]
        });