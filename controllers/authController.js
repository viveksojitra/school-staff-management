const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Admin = require('../models/adminModel');

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET;

// Signup
const signup = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        console.log('Hashing password:', password);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newAdmin = new Admin({
            username,
            password: hashedPassword,
            role
        });

        await newAdmin.save();

        console.log('User Registered: ', newAdmin);

        return res.status(200).json({ message: 'User Registered:', newAdmin });
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(400).json({ message: `Error during registration: ${error}` });
    }
}

// Login
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Find the Admin
        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Validate the password
        const isValid = await bcrypt.compare(password, admin.password);

        if (!isValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign({ id: admin._id, role: admin.role }, JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ message: "Sign-In Successful: ", token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: `Something went wrong: ${err}` });
    }
};

module.exports = {
    signup,
    login,
};
