import EncryptedStorage from 'react-native-encrypted-storage';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import API_KEY from '../config/apiKey';
import { getNewToken } from './auth/getNewToken';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: API_KEY,
  timeout: 1000,
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const cookie = await EncryptedStorage.getItem('authCookie');
    if (config.headers && cookie) {
      config.headers.Authorization = `Bearer ${cookie}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
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
      if (newAccessToken.response && newAccessToken.response.status === 403) {
        AsyncStorage.removeItem('refresh_token');
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
