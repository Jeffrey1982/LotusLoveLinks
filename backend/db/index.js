// backend/db/index.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Lotus Love Links',
  password: 'Destiney7!',
  port: '5432',
});

module.exports = pool;
