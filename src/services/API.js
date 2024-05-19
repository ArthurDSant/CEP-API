import axios from 'axios';
// https://viacep.com.br/ws/01310930/json/

const API = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

export default API;

// 01310930