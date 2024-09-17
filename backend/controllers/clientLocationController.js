

const ClientLocation = require('../models/ClientLocation');


exports.submitClientLocation = async (req, res) => {
    const { employeeId, clientLocation, date } = req.body;
    try {
        const clientRequest = new ClientLocation({ employeeId, clientLocation, date });
        await clientRequest.save();
        res.status(201).json({ message: 'Client location request submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateClientLocationStatus = async (req, res) => {
    try {
        const clientRequest = await ClientLocation.findByIdAndUpdate(req.params.requestId, { status: req.body.status }, { new: true });
        if (!clientRequest) return res.status(404).json({ message: 'Client location request not found' });
        res.status(200).json({ message: 'Client location request status updated', clientRequest });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
