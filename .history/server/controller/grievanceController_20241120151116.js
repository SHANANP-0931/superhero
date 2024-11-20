// controllers/grievanceController.js
const Grievance = require('../models/Grievance');

// Get all grievances
const getAllGrievances = async (req, res) => {
    try {
        const grievances = await Grievance.find();
        res.status(200).json(grievances);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch grievances', error });
    }
};

// Update the status of a grievance
const updateStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updatedGrievance = await Grievance.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );
        res.status(200).json(updatedGrievance);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update status', error });
    }
};

// Send email notification (you can use a library like nodemailer)
const sendEmail = async (req, res) => {
    const { email, name, problemDescription } = req.body;

    // Setup your email service here, for example using nodemailer
    try {
        // Simulate email sending logic
        console.log(`Email sent to: ${email}, Subject: Grievance Solved`);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send email', error });
    }
};

module.exports = {
    getAllGrievances,
    updateStatus,
    sendEmail,
};
