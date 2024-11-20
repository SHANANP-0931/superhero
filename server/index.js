require("dotenv").config();
const express = require('express');
const cors = require('cors');
require('./dbConfig.js/connection');
const router = require('./routes/router');
const grievanceController = require('./controller/grievanceController');
const bodyParser = require('body-parser');
const grievancesRoute = require('./routes/router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.status(200).send(`<h1 style="color:red;">Server started and waiting for client requests</h1>`);
});

// Grievance submission route (separate controller logic)
app.post('/api/grievances/submit', grievanceController.submitGrievance);

// API routes
app.use('/api', router);
app.use('/api/grievances', grievancesRoute);

// Port configuration
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});
