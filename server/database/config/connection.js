const { Pool } = require('pg');

require('env2')('./config.env');

if (!process.env.DB_URL) throw new Error('No Database URL!!!');

const options = {
  connectionString: process.env.DB_URL,
  ssl: true
};

module.exports = new Pool(options);