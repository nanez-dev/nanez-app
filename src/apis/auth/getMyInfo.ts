import { Method } from 'axios';
import request from '..';

export const getMyInfo = async () => {
  return await request({
    url: '/users/me',
    method: 'GET' as Method,
  });
};
