const pgp = require('pg-promise')();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'cafe_db',
};

const db = pgp(config);

module.exports = db;
