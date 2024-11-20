require("dotenv").config();
const express = require('express');
const cors = require('cors');
require('./dbConfig.js/connection');
const router = require('./routes/router');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const grievanceController = require('./controller/grievanceController');

const app = express(); // Use `app` consistently

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router); // Mount all API routes under `/api`

// Root route
app.get('/', (req, res) => {
    res.status(200).send(`<h1 style="color:red;"> server started and waiting for client requests</h1>`);
});

// Port configuration
const PORT = process.env.PORT || 5000;








// Middleware to parse JSON
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/grievanceDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

// Grievance submission route
app.post('/api/grievances/submit', grievanceController.submitGrievance);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT} and waiting for client requests`);
});
