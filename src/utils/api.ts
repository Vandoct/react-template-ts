/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { REFRESH_TOKEN } from 'constants/key';
import LocalStorageService from './localStorageService';

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });
const localStorageService = LocalStorageService.getInstance();

// Add a request interceptor
api.interceptors.request.use(
  (c) => {
    const config = c;
    const token = localStorageService.getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === process.env.REACT_APP_AUTH_URL
    ) {
      // Failed to refresh token
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await api.request({
        url: process.env.REACT_APP_AUTH_URL,
        method: 'POST',
        data: {
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          grant_type: REFRESH_TOKEN,
          refresh_token: process.env.REACT_APP_REFRESH_TOKEN,
        },
      });

      if (res.status === 200) {
        const { data } = res;
        localStorageService.setToken(data.access_token, data.expires_in);
        api.defaults.headers.common.Authorization = `Bearer ${localStorageService.getAccessToken()}`;
        return api(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
