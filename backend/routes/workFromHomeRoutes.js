

const express = require('express');
const router = express.Router();
const { submitWorkFromHome, updateWorkFromHomeStatus } = require('../controllers/workFromHomeController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/', authMiddleware.protect, submitWorkFromHome);


router.put('/:requestId', authMiddleware.protect, authMiddleware.restrictTo('hr'), updateWorkFromHomeStatus);

module.exports = router;
