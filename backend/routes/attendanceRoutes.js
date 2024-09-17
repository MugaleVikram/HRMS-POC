

const express = require('express');
const router = express.Router();
const { checkIn, checkOut, getAttendanceRecords } = require('../controllers/attendanceController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/check-in', authMiddleware.protect, checkIn);


router.post('/check-out', authMiddleware.protect, checkOut);


router.get('/records', authMiddleware.protect, authMiddleware.restrictTo('hr'), getAttendanceRecords);

module.exports = router;
