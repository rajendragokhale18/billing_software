const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
    try {
        const { type, description, amount } = req.body;
        const newTransaction = new Transaction({ type, description, amount });
        await newTransaction.save();
        res.status(201).json({ message: 'Transaction created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

