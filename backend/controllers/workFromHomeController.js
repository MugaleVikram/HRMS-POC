// workFromHomeController.js

const WorkFromHome = require('../models/WorkFromHome');

// Submit work from home request
exports.submitWorkFromHome = async (req, res) => {
    const { employeeId, startDate, endDate } = req.body;
    try {
        const workFromHome = new WorkFromHome({ employeeId, startDate, endDate });
        await workFromHome.save();
        res.status(201).json({ message: 'Work-from-home request submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Approve/Reject work from home request
exports.updateWorkFromHomeStatus = async (req, res) => {
    try {
        const workFromHome = await WorkFromHome.findByIdAndUpdate(req.params.requestId, { status: req.body.status }, { new: true });
        if (!workFromHome) return res.status(404).json({ message: 'Work-from-home request not found' });
        res.status(200).json({ message: 'Work-from-home request status updated', workFromHome });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
