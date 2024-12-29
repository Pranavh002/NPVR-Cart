const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Adjust path to your User model
const router = express.Router();
require('dotenv').config(); // Load environment variables from .env file


// Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, number } = req.body;

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('Email already registered');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ name, email, password: hashedPassword, number });
        await newUser.save();

        res.status(201).send('User registered successfully');
    } catch (err) {
        res.status(500).send(`Error: ${err.message}`);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }

        // Compare password with hashed password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).send('Invalid credentials');
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        res.status(500).send(`Error: ${err.message}`);
    }
});

module.exports = router;
