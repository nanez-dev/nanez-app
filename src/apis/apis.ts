import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';
import APPLICATION_ERROR_CODE from '../constants/applicationErrorCode';

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
    return config;
  },
  (error) => Promise.reject(error)
);

const API = {
  getAllPerfumes: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/perfume` });
  },
  getAllNotes: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/note` });
  },
  getAllAccords: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/accord` });
  },
  getAllBrands: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/brand` });
  },
  getNoteCategories: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/note/category` });
  },
  getDetailPerfume: (id: string) => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/perfume/${id}` });
  },
  getPerfumeData: () => {
    return request({ method: 'GET' as Method, url: `${API_KEY}/perfume/information` });
  },
};

export default API;
