const Invoice = require('../models/Invoice');

exports.createInvoice = async (req, res) => {
    try {
        const { clientName, clientAddress, items } = req.body;
        const totalAmount = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const newInvoice = new Invoice({ clientName, clientAddress, items, totalAmount });
        await newInvoice.save();
        res.status(201).json({ message: 'Invoice created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
