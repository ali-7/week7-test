const { join } = require('path');
const { readFileSync } = require('fs');

const connection = require('./connection');

const dbBuild = () => {
  let sql = '';
  if (process.env.NODE_ENV === 'test') {
    sql = readFileSync(join(__dirname, 'test_db_build.sql')).toString();
    connection.query(readFileSync('./dumyData.sql'));
  } else {
    sql = readFileSync(join(__dirname, 'db_build.sql')).toString();
    connection.query(readFileSync('./dumyData.sql'));
  }
  return connection.query(sql);
};

module.exports = { dbBuild };
