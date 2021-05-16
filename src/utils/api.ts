/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { REFRESH_TOKEN } from 'constants/key';
import LocalStorageService from './localStorageService';

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });
const localStorageService = LocalStorageService.getInstance();

export const refreshToken = async (): Promise<string> => {
  try {
    const response = await api.request({
      url: process.env.REACT_APP_AUTH_URL,
      method: 'POST',
      data: {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        grant_type: REFRESH_TOKEN,
        refresh_token: process.env.REACT_APP_REFRESH_TOKEN,
      },
    });

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { access_token, expires_in } = response.data;

    api.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    localStorageService.setToken(access_token, expires_in);

    setTimeout(() => {
      refreshToken();
    }, (expires_in - 100) * 1000);

    return 'Success';
  } catch (error) {
    return error;
  }
};

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

      refreshToken()
        .then(() => api(originalRequest))
        .catch((err) => console.error(err));
    }
    return Promise.reject(error);
  }
);

export default api;
