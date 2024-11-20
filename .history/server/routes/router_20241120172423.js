const express = require('express');
const userController = require('../controller/userController');
const grievanceController = require('../controller/grievanceController');

const router = express.Router();

// Register user route
router.post('/register', userController.registerController);

// Login user route
router.post('/login', userController.loginController);

// Grievance Routes
// Get all grievances
router.get('/grievances/all', grievanceController.getAllGrievances);

// Update grievance status
router.put('/grievances/update-status/:id', grievanceController.updateStatus);

// Send email for grievance
router.post('/grievances/send-email', grievanceController.sendEmail);

module.exports = router;
