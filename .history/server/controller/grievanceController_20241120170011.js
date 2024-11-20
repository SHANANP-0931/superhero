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



const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Mailtrap host from environment variables
    port: 587, // Mailtrap typically uses port 587
    auth: {
        user: process.env.SMTP_USER, // Mailtrap user from environment variables
        pass: process.env.SMTP_PASS, // Mailtrap password from environment variables
    },
});
// Function to send an email
const sendEmail = async (req, res) => {
    console.log(req)
    const mailOptions = {
        from: `"Admin Dashboard" <${process.env.SMTP_USER}>`, // Sender email
        to: req.email, // Recipient email
        subject: "Your Issue Has Been Solved", // Subject line
        text: `Hello ${name},\n\nYour reported issue has been resolved. Here is the description of your problem:\n\n${problemDescription}\n\nThank you for your patience.\n\nBest regards,\nAdmin`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
};




module.exports = {
    sendEmail,
    submitGrievance,
    getAllGrievances,
    updateStatus,
    sendEmail,
};
