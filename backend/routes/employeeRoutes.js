

const express = require('express');
const router = express.Router();
const { getAllEmployees, createEmployee, getEmployeeById, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/', authMiddleware.protect, authMiddleware.restrictTo('hr'), getAllEmployees);


router.post('/', authMiddleware.protect, authMiddleware.restrictTo('hr'), createEmployee);


router.get('/:employeeId', authMiddleware.protect, authMiddleware.restrictTo('hr'), getEmployeeById);


router.put('/:employeeId', authMiddleware.protect, authMiddleware.restrictTo('hr'), updateEmployee);


router.delete('/:employeeId', authMiddleware.protect, authMiddleware.restrictTo('hr'), deleteEmployee);

module.exports = router;
