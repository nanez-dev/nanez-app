import instance from '..';
import { responseType } from '../responseType';

export const getBrandDetail = async (id: string) => {
  return await instance
    .get(`/brand/${id}`)
    .then((res: responseType) => res)
    .catch((err) => err);
};
