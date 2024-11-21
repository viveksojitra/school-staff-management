const Admin = require('../models/adminModel');

// Get single master by ID
const getMaster = async (req, res) => {
    try {
        const master = await Admin.findById(req.params.id);
        if (!master) {
            return res.status(404).json({ message: 'Record not found' });
        }
        return res.status(200).json({ master });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get Admins
const getAdmins = async (req, res) => {
    try {
        const admin = await Admin.find({});
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        return res.status(200).json({ admin });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get single principal by ID
const getPrincipal = async (req, res) => {
    try {
        const principal = await Admin.findById(req.params.id);
        if (!principal) {
            return res.status(404).json({ message: 'Record not found' });
        }
        return res.status(200).json({ principal });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get Principals
const getPrincipals = async (req, res) => {
    try {
        const principal = await Admin.find({ role: 'principal' });
        if (!principal) {
            return res.status(404).json({ message: 'Principal not found' });
        }
        return res.status(200).json({ principal });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get single teacher by ID
const getTeacher = async (req, res) => {
    try {
        const teacher = await Admin.findById(req.params.id);
        if (!teacher) {
            return res.status(404).json({ message: 'Record not found' });
        }
        return res.status(200).json({ teacher });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get Teachers
const getTeachers = async (req, res) => {
    try {
        const teacher = await Admin.find({ role: 'teacher' });
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        return res.status(200).json({ teacher });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

// Get Single Student by ID
const getStudent = async (req, res) => {
    try {
        const student = await Admin.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Record not found' });
        }
        return res.status(200).json({ student });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
}

// Get Students
const getStudents = async (req, res) => {
    try {
        const student = await Admin.find({ role: 'student' });
        if (!student) {
            return res.status(404).json({ message: 'Students not found' });
        }
        return res.status(200).json({ student });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getMaster,
    getAdmins,
    getPrincipal,
    getPrincipals,
    getTeacher,
    getTeachers,
    getStudent,
    getStudents
}