// models/Grievance.js
const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    problemDescription: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    emailSent: { type: Boolean, default: false },
});

const Grievance = mongoose.model('Grievance', grievanceSchema);

module.exports = Grievance;
