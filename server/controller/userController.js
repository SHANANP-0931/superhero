
const users = require('../models/userModel')
const jwt = require('jsonwebtoken')


//register logic

exports.registerController = async (req, res) => {
    console.log("Inside registerController");

    const { username, email, password } = req.body;
    console.log("Data received:", username, email, password);

    try {
        const existingUser = await users.findOne({ email });
        console.log("Existing user check:", existingUser);

        if (existingUser) {
            return res.status(406).json("User already exists");
        }

        const newUser = new users({
            username,
            email,
            password,
        });

        const savedUser = await newUser.save();
        console.log("User saved:", savedUser);

        res.status(200).json(savedUser);
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};



// loginController

exports.loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await users.findOne({ email, password });
        if (existingUser) {
            // Generate token using JWT
            const token = jwt.sign({ userID: existingUser._id }, process.env.JWT_PASSWORD, { expiresIn: '1h' });
            res.status(200).json({
                user: existingUser,
                token
            });
        } else {
            res.status(404).json({ message: "Invalid email or password" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

