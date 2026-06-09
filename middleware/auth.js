const jwt = require("jsonwebtoken");

function authentication(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "Authorization header missing"
            });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Token not found"
            });
        }

        const decoded = jwt.verify(token, process.env.secret_key);

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token",
            error: error.message
        });
    }
}

module.exports = authentication;