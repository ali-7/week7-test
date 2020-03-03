const { Pool } = require('pg');
require('env2')('./config.env');

const options = {
  connectionString: process.env.DEV_URL,
  ssl: true
};

module.exports = new Pool(options);
