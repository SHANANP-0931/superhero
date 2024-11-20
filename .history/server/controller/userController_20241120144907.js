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

// services/allapi.js (loginAPI)
import axios from 'axios';

export const loginAPI = async (reqBody) => {
    try {
        const response = await axios.post('http://localhost:5000/api/login', reqBody);
        return response;
    } catch (error) {
        console.error("API error: ", error);
        throw error; // Re-throw to be caught in the calling component
    }
};
