import axios from 'axios';

import { BASE_URL_API } from '../constants';


const api = axios.create({
  baseURL: BASE_URL_API,
  responseType: 'json'
});


export default api;
