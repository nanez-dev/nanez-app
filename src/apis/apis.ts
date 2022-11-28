import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';
import APPLICATION_ERROR_CODE from '../constants/applicationErrorCode';
import AsyncStorage from '@react-native-async-storage/async-storage';

import API_KEY from '../config/apiKey';

const STATUS_CODE = {
  INTERNAL_SERVER_ERROR: 500,
};

const isAxiosError = (error: any): error is AxiosError => {
  return error.isAxiosError;
};

const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (!error.response) {
        throw { code: APPLICATION_ERROR_CODE.NETWORK_ERROR, message: 'Network Error' };
      }

      if (error.response.status === STATUS_CODE.INTERNAL_SERVER_ERROR) {
        throw {
          code: APPLICATION_ERROR_CODE.INTERNAL_SERVER_ERROR,
          message: 'internal server error',
        };
      }

      throw error.response?.data;
    }
  }
};

axios.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = getLocalStorageItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const API = {
  // GET
  getPerfumeInfo: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/perfume/information` });
  },
  getPerfume: (submitValue?: string) => {
    return request({
      method: 'GET' as Method,
      url: submitValue ? `${API_KEY}/perfume?name=${submitValue}` : `${API_KEY}/perfume`,
    });
  },
  getDetailPerfume: <I>(id: I) => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/perfume/${id}` });
  },
  getAllBrands: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/brand` });
  },
  getPopularBrand: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/brand/popular` });
  },
  getAllNotes: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/note` });
  },
  getAllAccords: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/accord` });
  },
  getNoteCategories: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/note/category` });
  },
  getUserme: (token: string) => {
    return request({
      method: 'GET' as Method,
      url: `${API_KEY}/users/me`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getNewToken: () => {
    return request({
      method: 'GET' as Method,
      url: `${API_KEY}/users/access-token`,
      headers: {
        Authorization: `Bearer ${AsyncStorage.getItem('refresh_token')}`,
      },
    });
  },
  // POST
  postUserEmailSend: <D>(data: D) => {
    return request({
      method: 'POST' as Method,
      url: `${API_KEY}/users/email-send`,
      data,
    });
  },
  postUserEmailVerify: <D>(data: D) => {
    return request({
      method: 'POST' as Method,
      url: `${API_KEY}/users/email-verify`,
      data,
      headers: { 'Content-Type': 'application/json' },
    });
  },
  postUserSignup: <D>(data: D) => {
    return request({
      method: 'POST' as Method,
      url: `${API_KEY}/users/signup`,
      data,
      headers: { 'Content-Type': 'application/json' },
    });
  },
  postUserSignin: <D>(data: D) => {
    return request({
      method: 'POST' as Method,
      url: `${API_KEY}/users/signin`,
      data,
      headers: { 'Content-Type': 'application/json' },
    });
  },
  postNicknameVerify: (nickname: string) => {
    return request({
      method: 'POST' as Method,
      url: `${API_KEY}/users/nickname-verify?nickname=${nickname}`,
      headers: { 'Content-Type': 'application/json' },
    });
  },
};

export default API;
