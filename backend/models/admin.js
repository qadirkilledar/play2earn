// models/admin.js
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile_pic_url: {
        type: String,
        default: null,
    },
}, { timestamps: true });

module.exports = mongoose.model('Admin', AdminSchema);
