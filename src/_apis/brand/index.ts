import instance from '..';
import { responseType } from '../responseType';

export const allBrands = async () => {
  return await instance
    .get('/brand')
    .then((res: responseType) => res)
    .catch((err) => err);
};
