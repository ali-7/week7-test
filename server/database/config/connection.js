const { Pool } =require('pg');
require('dotenv').config();
console.log(process.env.DEV_URL)
let dbUrl;

if (process.env.NODE_ENV === 'production') {
    dbUrl = process.env.DATABASE_URL;
  } else  {
    dbUrl = process.env.DEV_URL;
    console.log('here')
  }

  if( !dbUrl ) throw new Error('No database url !!!');

  const options = {
    connectionString: dbUrl,
    ssl: true
  }
  
  module.exports = new Pool(options);