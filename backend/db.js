const pgp = require('pg-promise')();
const db = pgp({
  connectionString: 'postgres://postgres:Destiney7!@localhost:5432/Lotus Love Links'
});

module.exports = db;
