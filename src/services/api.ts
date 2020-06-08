import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.0.33.103:3333',
  baseURL: 'http://localhost:3333',
});

export default api;
