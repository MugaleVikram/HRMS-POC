

const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    hoursWorked: {
        type: Number,
        required: true
    },
    tasks: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Timesheet = mongoose.model('Timesheet', timesheetSchema);
module.exports = Timesheet;
