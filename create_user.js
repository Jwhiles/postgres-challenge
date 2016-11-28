const dbConn = require('./db_connection.js');

module.exports = cb =>
  dbConn.query(`INSERT INTO users (firstName, lastName, age, type) VALUES ('Cruella', 'de Vil', 48, 'Style Icon');`, (error, data) =>
    (error ? cb(error) : cb(null, 'New user added')));
