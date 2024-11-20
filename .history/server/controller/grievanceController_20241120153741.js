const Grievance = require('../models/grievenceModel');
const nodemailer = require('nodemailer');

// Handle grievance submission
const submitGrievance = async (req, res) => {
    try {
        const { name, email, mobileNumber, problemDescription } = req.body;

        const newGrievance = new Grievance({
            name,
            email,
            mobileNumber,
            problemDescription
        });

        await newGrievance.save();
        res.status(201).json({ message: 'Grievance submitted successfully!' });
    } catch (error) {
        console.error('Error submitting grievance:', error);
        res.status(500).json({ message: 'Error submitting grievance', error });
    }
};

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

// Send email notification using nodemailer

const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

// Configure the transporter using environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this if you're using a different email service
    auth: {
        user: process.env.EMAIL_USER,   // Use the EMAIL_USER from the .env file
        pass: process.env.EMAIL_PASS,   // Use the EMAIL_PASS from the .env file
    },
});

const sendEmail = async (email, name, problemDescription) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,    // Use the EMAIL_USER from the .env file
        to: email,
        subject: 'Grievance Solved',
        text: `Dear ${name},\n\nYour grievance has been marked as 'Solved'.\n\nProblem: ${problemDescription}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendEmail };  // Export the sendEmail function for use in other files



module.exports = {
    submitGrievance,
    getAllGrievances,
    updateStatus,
    sendEmail,
};
