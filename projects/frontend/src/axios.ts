import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://localhost:8040/api',
  withCredentials: true,
});
