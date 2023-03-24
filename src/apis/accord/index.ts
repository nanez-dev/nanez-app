import { Method } from 'axios';
import request from '..';

export const getAccord = async () => {
  return await request({
    url: '/accord',
    method: 'GET' as Method,
  });
};
