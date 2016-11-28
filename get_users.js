const dbConn = require('./db_connection.js');

module.exports = cb =>
  dbConn.query('SELECT * FROM users;', (error, data) =>
    (error ? cb(error) : cb(null, data.rows)));
