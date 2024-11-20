require("dotenv").config();
const express = require('express');
const cors = require('cors');
require('./dbConfig.js/connection'); // Ensure this file establishes the MongoDB connection
const router = require('./routes/router');

const app = express(); // Use `app` consistently

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router); // Mount all API routes under `/api`

// Root route
app.get('/', (req, res) => {
    res.status(200).send(`<h1 style="color:red;">Cookpedia server started and waiting for client requests</h1>`);
});

// Port configuration
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT} and waiting for client requests`);
});
