require("dotenv").config()
const express = require('express')
const cors = require('cors')
require('./dbConfig.js/connection')
const router = require('./routes/router')

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)

const PORT = 5000 || process.env.PORT

server.listen(PORT, () => {
    console.log(`server startted at :${PORT} and wyting for client request`);

})
server.get('/', (req, res) => {
    res.status(200).send(`<h1 style="color:red;">cookpedia server started and wyting client request </h1>`)
})