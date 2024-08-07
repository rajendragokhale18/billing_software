import axios from 'axios';

const API_URL = 'http://localhost:5000/api/invoices/';

export const createInvoice = (invoiceData) => {
    return axios.post(`${API_URL}create`, invoiceData);
};

export const getInvoices = () => {
    return axios.get(API_URL);
};
