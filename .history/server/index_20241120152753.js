require("dotenv").config();
const express = require('express');
const cors = require('cors');
require('./dbConfig.js/connection');  // Ensure this is properly connecting to your MongoDB database
const router = require('./routes/router');  // This should handle all routes
const grievanceController = require('./controller/grievanceController');
const bodyParser = require('body-parser');
const grievancesRoute = require('./routes/router');

const app = express(); // Use `app` consistently

// Middleware
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests
app.use(bodyParser.json());  // Also add body-parser as a fallback for parsing JSON

// Root route
app.get('/', (req, res) => {
    res.status(200).send(`<h1 style="color:red;">Server started and waiting for client requests</h1>`);
});

// Grievance submission route (separate controller logic)
app.post('/api/grievances/submit', grievanceController.submitGrievance);

// API routes
app.use('/api', router);
app.use('/api/grievances', grievancesRoute);  // Ensure grievancesRoute is correctly used for grievances-related routes

// Port configuration
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});
