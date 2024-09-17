

const Leave = require('../models/Leave');


exports.submitLeave = async (req, res) => {
    const { employeeId, startDate, endDate } = req.body;
    try {
        const leave = new Leave({ employeeId, startDate, endDate });
        await leave.save();
        res.status(201).json({ message: 'Leave application submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAllLeaves = async (req, res) => {
    try {
        const leaves = await Leave.find({});
        res.status(200).json(leaves);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateLeaveStatus = async (req, res) => {
    try {
        const leave = await Leave.findByIdAndUpdate(req.params.leaveId, { status: req.body.status }, { new: true });
        if (!leave) return res.status(404).json({ message: 'Leave application not found' });
        res.status(200).json({ message: 'Leave status updated', leave });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
