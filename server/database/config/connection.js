const { Pool } = require("pg");

dbUrl = process.env.DATABASE_URL;

const opt = {
  connectionString: dbUrl,
  ssl: true
};

module.exports = new Pool(opt);
