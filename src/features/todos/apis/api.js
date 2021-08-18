import axios from "axios";

const api = axios.create({
    baseURL: 'https://611cd50c7d273a0017e2f461.mockapi.io/'
});

export default api;