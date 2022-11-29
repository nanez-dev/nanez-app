import instance from '..';
import { responseType } from '../responseType';

export const searchPerfumes = async (name: string | null) => {
  return await instance
    .get(`/perfume?name=${name}`)
    .then((res: responseType) => res)
    .catch((err: any) => err);
};

export const getPerfumeByLimit = async () => {
  return await instance
    .get('/perfume?limit=8')
    .then((res: responseType) => res)
    .catch((err: any) => err);
};

export const getPerfumeDetailInfo = async (id: string | undefined) => {
  return await instance
    .get(`/perfume/${id}`)
    .then((res: responseType) => res)
    .catch((err: any) => err);
};
