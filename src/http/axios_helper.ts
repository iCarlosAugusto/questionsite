import axios from 'axios';

const axiosReq = axios.create({
  baseURL: 'https://664aa2d7a300e8795d427962.mockapi.io',
});

export { axiosReq };
