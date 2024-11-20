const express = require('express');
const userController = require('../controller/userController'); // Ensure the path is correct
const grievanceController = require('../controller/grievanceController')
const router = express.Router();

// Register user route
router.post('/register', userController.registerController);

// Login user route
router.post('/login', userController.loginController);


// Get all grievances
router.get('/grievances/all', grievanceController.getAllGrievances);

// Update grievance status
router.put('/grievances/update-status/:id', grievanceController.updateStatus);

// Send email for grievance
router.post('/grievances/send-email', grievanceController.sendEmail);
module.exports = router; // Export `router` for use in `index.js`
