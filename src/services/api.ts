import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.26.100.103:3333',
});

export default api;
