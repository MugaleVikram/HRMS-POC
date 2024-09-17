

const express = require('express');
const router = express.Router();
const { submitClientLocation, updateClientLocationStatus } = require('../controllers/clientLocationController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/', authMiddleware.protect, submitClientLocation);


router.put('/:requestId', authMiddleware.protect, authMiddleware.restrictTo('hr'), updateClientLocationStatus);

module.exports = router;
