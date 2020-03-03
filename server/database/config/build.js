const { readFileSync } = require("fs");
const { join } = require("path");
const connection = require("./connection");

const path = join(__dirname, "build.sql")
const sql = readFileSync(path).toString();

connection.query(sql)
    .then(() => console.log("built successfully!"))
    .catch(e => console.error("failed to build!", e.message)); 