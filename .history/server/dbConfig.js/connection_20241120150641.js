// dbConfig.js/connection.js
const mongoose = require('mongoose');

// Use a flag to track if the connection is already established
let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        console.log('Using existing MongoDB connection');
        return; // Avoid making a new connection if one already exists
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDB;
