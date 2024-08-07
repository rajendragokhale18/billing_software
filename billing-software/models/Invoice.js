const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    clientAddress: { type: String, required: true },
    items: [{ description: String, quantity: Number, price: Number }],
    totalAmount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Invoice', InvoiceSchema);
