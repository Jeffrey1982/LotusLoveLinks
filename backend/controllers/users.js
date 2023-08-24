const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Set up nodemailer with your SMTP details
const transporter = nodemailer.createTransport({
    // ... your SMTP settings, like service, auth etc.
});

// Register User
router.post('/register', async (req, res) => {
  // ... (Keep this route's content as is, no changes here)
});

// Verify Email
router.post('/verify-email', async (req, res) => {
  // ... (Keep this route's content as is, no changes here)
});

// Fetch all user photos
router.get('/userphotos', async (req, res) => {
    try {
        const allPhotos = await db.query("SELECT * FROM photos");  // I've changed `pool` to `db` to match your setup
        res.json(allPhotos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Fetch photos for a specific user
router.get('/userphotos/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const userPhotos = await db.query("SELECT * FROM photos WHERE user_id = $1", [userId]);  // Again, changed `pool` to `db`
        res.json(userPhotos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
