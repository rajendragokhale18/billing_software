import React, { useEffect, useState } from 'react';
import { getInvoices } from '../services/invoiceService';

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            const response = await getInvoices();
            setInvoices(response.data);
        };

        fetchInvoices();
    }, []);

    return (
        <div>
            <h2>Invoices</h2>
            <ul>
                {invoices.map((invoice) => (
                    <li key={invoice._id}>{invoice.clientName} - {invoice.totalAmount}</li>
                ))}
            </ul>
        </div>
    );
};

export default InvoiceList;


// this is a comment 