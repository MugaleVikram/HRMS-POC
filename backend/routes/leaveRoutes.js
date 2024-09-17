

const express = require('express');
const router = express.Router();
const { getAllLeaves, submitLeave, getLeaveById, updateLeaveStatus } = require('../controllers/leaveController');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/', authMiddleware.protect, authMiddleware.restrictTo('hr'), getAllLeaves);


router.post('/', authMiddleware.protect, submitLeave);


router.get('/:leaveId', authMiddleware.protect, authMiddleware.restrictTo('hr'), getLeaveById);


router.put('/:leaveId', authMiddleware.protect, authMiddleware.restrictTo('hr'), updateLeaveStatus);

module.exports = router;
