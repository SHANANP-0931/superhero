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

const transporter = nodemailer.createTransport({
    service: 'gmail', // or your chosen email service
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
    },
});

const sendEmail = async (email, name, problemDescription) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
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


module.exports = {
    submitGrievance,
    getAllGrievances,
    updateStatus,
    sendEmail,
};
