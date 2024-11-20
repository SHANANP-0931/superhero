const express = require('express')
const cors = require('cors')
require('dotenv').config()

const router = require('./routes/router')
require('./dbConfig.js/connection')
// create express server
const server = express()
// cors call
server.use(cors())
// json to js
server.use(express.json())

//rout set
server.use(router)


// port for run server
const PORT = 5000 || process.env.PORT

// run
server.listen(PORT, () => {
    console.log(`server starts at port :${PORT} and wyting for client request!!!!`);

})