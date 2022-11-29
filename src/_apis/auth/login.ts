import instance from '..';
import { responseType } from '../responseType';

export const signIn = async (email: string, password: string) => {
  return await instance
    .post('/users/signin', { email, password })
    .then((res: responseType) => res)
    .catch((err) => err);
};
