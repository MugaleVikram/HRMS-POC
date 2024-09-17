

const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    checkInTime: {
        type: Date,
        required: true
    },
    checkOutTime: {
        type: Date
    },
    location: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;
