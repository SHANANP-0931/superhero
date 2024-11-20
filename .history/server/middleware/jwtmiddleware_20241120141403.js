const jwt = require('jsonwebtoken');

// JWT Middleware
const jwtmiddleware = (req, res, next) => {
    console.log('Inside JWT Middleware');

    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token not found in authorization header" });
    }

    try {
        // Verify token and extract payload
        const jwtResponse = jwt.verify(token, process.env.JWT_PASSWORD);
        console.log("JWT Response:", jwtResponse);

        req.userId = jwtResponse.userID;

        next(); // Continue to the next middleware or route handler
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(401).json({ message: "Authentication failed, please login" });
    }
};

module.exports = jwtmiddleware;
