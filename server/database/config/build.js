const fs = require('fs');
const { join } = require('path');

const buildDatabase = () => {
  const connection = require('./connection');
  const sql = fs.readFileSync(join(__dirname, 'build.sql')).toString();

  return connection.query(sql);
}


module.exports = buildDatabase;