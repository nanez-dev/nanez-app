import { Method } from 'axios';
import request from '..';

export const getPopularBrand = async () => {
  return await request({
    url: '/brand/popular',
    method: 'GET' as Method,
  });
};

export const getBrand = async () => {
  return await request({
    url: '/brand',
    method: 'GET' as Method,
  });
};
