const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reward: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);
