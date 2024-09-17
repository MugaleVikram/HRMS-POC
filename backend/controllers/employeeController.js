

const Employee = require('../models/User');


exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createEmployee = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        const newEmployee = new Employee({ email, password, role });
        await newEmployee.save();
        res.status(201).json({ message: 'Employee created' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.employeeId, req.body, { new: true });
        if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ message: 'Employee updated', updatedEmployee });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete employee by ID
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.employeeId);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ message: 'Employee deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
