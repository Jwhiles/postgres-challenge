const env = require('env2');
const fs = require('fs');

env('./config.env');

const dbConn = require('./db_connection.js');

const sql = fs.readFileSync(`${__dirname}/builds.sql`).toString();

dbConn.query(sql, (error, result) => {
  (error ? console.log('Error', error) : console.log('Result', result));
});
