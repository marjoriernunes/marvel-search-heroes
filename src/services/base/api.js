import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/',
    params: {
        ts: 1,
        apikey: '499974688adf9774fd80b9afb553ebb1',
        hash: 'd8f395515b00fb6b7eac12c3f63f8fdc'}
});

export default api;
