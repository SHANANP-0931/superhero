// grievanceModel.js
const mongoose = require('mongoose');

// Define the grievance schema
const grievanceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    problemDescription: { type: String, required: true },
}, { timestamps: true });

// Create a model based on the schema
const Grievance = mongoose.model('Grievance', grievanceSchema);

module.exports = Grievance;
