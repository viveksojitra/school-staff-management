const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['master', 'principal', 'teacher', 'student']
    },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Admin', AdminSchema);