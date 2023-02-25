import { Method } from 'axios';
import request from '..';

export const signIn = async <E, P>(email: E, password: P) => {
  return await request({
    url: '/users/signin',
    method: 'POST' as Method,
    data: {
      email,
      password,
    },
  });
};
