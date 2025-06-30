import axios from 'axios';
import LocalStorageService from './localStorage.service';
import { USER_TOKEN } from '../constants/constants';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add a token to a request
api.interceptors.request.use(
  (config) => {
    const token = LocalStorageService.getItem(USER_TOKEN);

    // If token - add Authorization header
    // If request goes to a public route, server just ignores the header.
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
