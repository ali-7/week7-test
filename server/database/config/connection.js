require('env2')('./config.env');
const { Pool } = require('pg');

let dbURL = '';
if (process.env.NODE_ENV === 'test') {
  dbURL = process.env.TESTDB_URL;
} else if (process.env.NODE_ENV === 'production') {
  dbURL = process.env.DATABASE_URL;
} else if (process.env.NODE_ENV === 'development') {
  dbURL = process.env.DB_URL;
}

if (!dbURL) throw new Error('No Database URL!!!');


const options = {
  connectionString: dbURL,
  ssl: true,
};
module.exports = new Pool(options);
