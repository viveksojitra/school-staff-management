const jwt = require('jsonwebtoken');

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET;

// Verify JWT token and role
const verifyToken = (requestedRoles) => {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) {
            return res.status(403).json({ message: 'No token provided' });
        }

        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            // Attach the User and Role
            req.user = decoded;

            // Check the Role
            if (requestedRoles && !requestedRoles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Access denied. Insufficient role.' });
            }

            next();
        });
    };
};

module.exports = verifyToken;
