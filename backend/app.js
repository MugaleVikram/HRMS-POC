// app.js

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const leaveRoutes = require('./routes/leaveRoutes');
const timesheetRoutes = require('./routes/timesheetRoutes');
const workFromHomeRoutes = require('./routes/workFromHomeRoutes');
const clientLocationRoutes = require('./routes/clientLocationRoutes');

const dbConfig = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


dbConfig();


app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/timesheets', timesheetRoutes);
app.use('/api/work-from-home', workFromHomeRoutes);
app.use('/api/client-locations', clientLocationRoutes);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
