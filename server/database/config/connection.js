const { Pool } = require('pg');
require('env2')('./config.env');

module.exports = new Pool({
    connectionString: process.env.DB_URL,
    ssl:false,
    /*ssl : {
        rejectUnauthorized: false
    }*/
});
