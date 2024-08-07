const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    type: { type: String, enum: ['input', 'output'], required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);
