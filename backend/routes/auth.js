const express = require('express');
const router = express.Router();
const pool = require('../db'); // Import your PostgreSQL connection pool

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
    await pool.query(query, [username, email, password]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

module.exports = router;
