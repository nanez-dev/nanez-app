import instance from '..';
import { responseType } from '../responseType';

export const getMyInfo = async () => {
  return await instance
    .get('/users/me')
    .then((res: responseType) => res)
    .catch((err) => err);
};
