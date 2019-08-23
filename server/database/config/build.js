const {join} = require('path');
const{readFileSync} = require('fs');
const connection = require('./connection');

const data = readFileSync(join(__dirname,'build.sql')).toString();

connection.query(data)
.then(res=> console.log('your Database is built successfully', res.rows))
.catch(error=> console.log(error.stack))