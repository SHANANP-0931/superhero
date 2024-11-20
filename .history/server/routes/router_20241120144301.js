const express = require('express');
const userController = require('../controller/userController'); // Ensure the path is correct

const router = express.Router();

// Register user route
router.post('/register', userController.registerController);

// Login user route
router.post('/login', userController.loginController);

module.exports = router; // Export `router` for use in `index.js`
