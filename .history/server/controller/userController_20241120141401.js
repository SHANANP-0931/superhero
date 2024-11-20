// import model
const users = require('../models/userModel')
// import jwt
const jwt = require('jsonwebtoken')


//register logic

exports.registerController = async (req, res) => {
    console.log("inside register controller");
    const { username, email, password } = req.body
    console.log(username, password, email);
    // check data is presenting @ mongodb use mangoose

    try {
        const existingUser = await users.findOne({ email })
        console.log(existingUser);
        if (existingUser) {
            // already user
            res.status(406).json("already exist")
        } else {
            // new user register
            const newUser = new users({
                username, email, password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }

    } catch (error) {
        res.status(401).json(newUser)
    }



}


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