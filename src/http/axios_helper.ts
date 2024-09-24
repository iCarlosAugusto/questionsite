import axios from 'axios';

const axiosReq = axios.create({
  baseURL: 'https://oabquestion-api.onrender.com',
});

export { axiosReq };
