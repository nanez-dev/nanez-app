import { Method } from 'axios';
import request from '..';

export const getSearchPerfumes = async <T>(name: T) => {
  return await request({
    url: '/perfume',
    method: 'GET' as Method,
    params: {
      name,
    },
  });
};

export const getPerfumeByLimit = async () => {
  return await request({
    url: '/perfume?limit=8',
    method: 'GET' as Method,
  });
};

export const getPerfumeDetailInfo = async <T>(id: T) => {
  return await request({
    url: `/perfume/${id}`,
    method: 'GET' as Method,
  });
};

export const getPerfumeMylist = async <T>(type: T) => {
  return await request({
    url: '/perfume/my-list',
    method: 'GET' as Method,
    params: {
      btn: type,
    },
  });
};

export const patchPerfumeMylist = async <I, T>(id: I, type: T) => {
  return await request({
    url: `/perfume/${id}`,
    method: 'PATCH' as Method,
    params: {
      btn: type,
    },
  });
};
