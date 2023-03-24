import { Method } from 'axios';
import request from '..';

export const getNote = async () => {
  return await request({
    url: '/note',
    method: 'GET' as Method,
  });
};

export const getNoteCategory = async () => {
  return await request({
    url: '/note/category',
    method: 'GET' as Method,
  });
};
