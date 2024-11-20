const express = require('express')
const cors = require('cors')
require('dotenv').config()

const router = require('./routes/router')
require('./dbConnections/connection')
// create express server
const server = express()
// cors call
server.use(cors())
// json to js
server.use(express.json())

//rout set
server.use(router)

server.use('/uploads', express.static('./uploads'))

// port for run server
const PORT = 3000 || process.env.PORT

// run
server.listen(PORT, () => {
    console.log(`server starts at port :${PORT} and wyting for client request!!!!`);

})