const express = require('express')
const userController = require('../controller/userController')
// const projectController = require('../controllers/projectController')
// const jwtmiddleware = require('../middleware/jwtmiddleware')
// const multerMiddleware = require('../middleware/multerMiddleware')
const router = new express.Router()


//to set path register request
router.post('/register', userController.registerController)

//to set path login request
router.post('/login', userController.loginController)