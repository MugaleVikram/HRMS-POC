// attendanceController.js

const Attendance = require('../models/Attendance');

// Check-in
exports.checkIn = async (req, res) => {
    const { employeeId, checkInTime, location } = req.body;
    try {
        const attendance = new Attendance({ employeeId, checkInTime, location });
        await attendance.save();
        res.status(201).json({ message: 'Check-in recorded successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Check-out
exports.checkOut = async (req, res) => {
    const { employeeId, checkOutTime, location } = req.body;
    try {
        const attendance = await Attendance.findOneAndUpdate(
            { employeeId, checkOutTime: null },
            { checkOutTime, location },
            { new: true }
        );
        if (!attendance) return res.status(404).json({ message: 'No check-in found for the employee' });
        res.status(201).json({ message: 'Check-out recorded successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get attendance records
exports.getAttendanceRecords = async (req, res) => {
    const { employeeId, startDate, endDate } = req.query;
    try {
        const records = await Attendance.find({
            employeeId,
            checkInTime: { $gte: startDate, $lte: endDate },
        });
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
