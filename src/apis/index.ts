import EncryptedStorage from 'react-native-encrypted-storage';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import API_KEY, { REFRESH_TOKEN } from '../config/apiKey';
import { getNewToken } from './auth/getNewToken';
import getCookieValue from '../utils/cookie';

const instance = axios.create({
  baseURL: API_KEY,
  timeout: 5000,
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const cookie = await EncryptedStorage.getItem('authCookie');
    config.headers = {
      ...config.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      [REFRESH_TOKEN]: getCookieValue(REFRESH_TOKEN),
    };
    if ((config.headers && cookie && cookie !== undefined) || cookie !== null) {
      config.headers.Authorization = `Bearer ${cookie}`;
    }
    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response) => {
    return { data: response.data, status: response.data };
  },
  async (error) => {
    const { config, response } = error;
    if (response.status === 403) {
      const originalRequest = config;
      const newAccessToken = await getNewToken();
      if (newAccessToken.response && newAccessToken.response.status === 401) {
        EncryptedStorage.removeItem('refresh_token');
        EncryptedStorage.removeItem('authCookie');
      } else {
        EncryptedStorage.setItem('authCookie', newAccessToken.data.access_token);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken.data.access_token}`;
        return instance.request(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
