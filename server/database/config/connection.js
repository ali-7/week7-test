const { Pool } = require('pg');

require('env2')('./config.env');

// const dbUrl = '';
const dbUrl = 'postgress://week7_user:123@localhost:5432/week7';

// if (process.env.NODE_ENV === 'development') {
//   dbUrl = process.env.DB_URL;
// } else {
//   dbUrl = process.env.DATABASE_URL;
// }

if (!dbUrl) {
  throw new Error('dbUrl must be set');
}

const option = {
  connectionString: dbUrl,
  ssl: true
}


module.exports = new Pool(option);