// export database config
// connect to the database server

const pgp = require('pg-promise')();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'cafe_db',
};

const db = pgp(process.env.DATABASE_URL || config);

module.exports = db;
