import { Method } from 'axios';
import request from '..';

export const getTag = async () => {
  return await request({
    url: '/tag',
    method: 'GET' as Method,
  });
};

export const getTagCategory = async () => {
  return await request({
    url: '/tag/category',
    method: 'GET' as Method,
  });
};
