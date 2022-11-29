import instance from '..';
import { responseType } from '../responseType';

export const getMyPerfumeList = async (type: string | null) => {
  return await instance
    .get(`/perfume/my-list?btn=${type}`)
    .then((res: responseType) => res)
    .catch((err: any) => err);
};
