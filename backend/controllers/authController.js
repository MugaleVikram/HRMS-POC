

const Employee = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newEmployee = new Employee({ email, password: hashedPassword, role });
        await newEmployee.save();
        res.status(201).json({ message: 'Employee registered' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const employee = await Employee.findOne({ email });
        if (!employee || !(await bcrypt.compare(password, employee.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: employee._id, role: employee.role }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        res.status(200).json({ token, role: employee.role, message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.logout = (req, res) => {
    
    res.status(200).json({ message: 'Logout successful' });
};
