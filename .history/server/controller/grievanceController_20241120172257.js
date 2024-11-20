const Grievance = require('../models/grievenceModel');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

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
        const mailOptions = {
            from: `"Admin Dashboard" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Your Issue Has Been Recorded",
            text: `Hello ${name},\n\nYour reported issue has been recorded.We will let you know once it is resolved.\n\nThank you for your patience.\n\nBest regards,\nAdmin`,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.messageId);
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


// Function to send an email
const sendEmail = async (req, res) => {
    try {
        const { email, name, problemDescription } = req.body;

        if (!email || !name || !problemDescription) {
            return res.status(400).json({ error: "All fields (email, name, problemDescription) are required." });
        }

        const mailOptions = {
            from: `"Admin Dashboard" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Your Issue Has Been Solved",
            text: `Hello ${name},\n\nYour reported issue has been resolved. Here is the description of your problem:\n\n${problemDescription}\n\nThank you for your patience.\n\nBest regards,\nAdmin`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.messageId);

        res.status(200).json({ message: "Email sent successfully", messageId: info.messageId });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
};

module.exports = {
    sendEmail,
    submitGrievance,
    getAllGrievances,
    updateStatus,
    sendEmail,
};
