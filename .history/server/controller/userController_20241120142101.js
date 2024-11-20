// import model
const users = require('../models/userModel')
// import jwt
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



// login 

exports.loginController = async (req, res) => {
    console.log("inside controller");
    // grt user details
    const { email, password } = req.body
    console.log(email, password);
    // check email n pw
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            // allow login
            // genarate token using jwt
            const token = jwt.sign({ userID: existingUser._id }, process.env.JWT_PASSWORD)

            res.status(200).json({
                user: existingUser,
                token
            })
        } else {
            // incorrect
            res.status(404).json("invalid Email/Password")
        }
    } catch (err) {
        res.status(401).json(err)
    }


}