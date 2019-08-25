const { join } = require('path');

const { readFileSync } = require('fs');
const connection = require('./connection');


const sql = readFileSync(join(__dirname, 'build.sql')).toString();

connection.query(sql);
// .then((r) => console.log('build done <>'))
// .catch((r) => { console.log(r); });
