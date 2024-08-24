import axios from 'axios';

const axiosReq = axios.create({
  baseURL: 'http://localhost:8080',
});

export { axiosReq };
