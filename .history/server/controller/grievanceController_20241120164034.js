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
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "your-ethereal-email@ethereal.email", // Replace with your Ethereal email
        pass: "your-ethereal-password", // Replace with your Ethereal password
    },
});

const sendEmail = async (email, name, problemDescription) => {
    const mailOptions = {
        from: '"Admin Dashboard" <admin@dashboard.com>', // sender address
        to: email, // receiver address
        subject: "Your Issue Has Been Solved", // Subject line
        text: `Hi ${name},\n\nYour reported issue has been solved. Description: ${problemDescription}.\n\nThank you.`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.messageId);
        console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = sendEmail;


module.exports = {
    submitGrievance,
    getAllGrievances,
    updateStatus,
    sendEmail,
};
