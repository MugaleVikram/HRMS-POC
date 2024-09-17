

const express = require('express');
const router = express.Router();
const { submitTimesheet, getTimesheets } = require('../controllers/timesheetController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/', authMiddleware.protect, submitTimesheet);


router.get('/', authMiddleware.protect, authMiddleware.restrictTo('hr'), getTimesheets);

module.exports = router;
