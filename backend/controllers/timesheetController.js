

const Timesheet = require('../models/Timesheet');


exports.submitTimesheet = async (req, res) => {
    const { employeeId, date, hoursWorked } = req.body;
    try {
        const timesheet = new Timesheet({ employeeId, date, hoursWorked });
        await timesheet.save();
        res.status(201).json({ message: 'Timesheet submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getTimesheets = async (req, res) => {
    const { employeeId, startDate, endDate } = req.query;
    try {
        const timesheets = await Timesheet.find({ employeeId, date: { $gte: startDate, $lte: endDate } });
        res.status(200).json(timesheets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
