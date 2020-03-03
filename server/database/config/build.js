const {readFileSync} = require('fs');
const {join} = require('path');

const conncetion = require('./connection');

const sql = readFileSync(join(__dirname,'build.sql'));

const build = () =>{
    return conncetion
    .query(sql)
    .then(()=> console.log('successfully build'))
    .catch(err => console.error(err.stack))
}


module.exports= build;