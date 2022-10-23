import { atom } from 'recoil';

export const isClick = atom<boolean>({
  key: 'isClick',
  default: false,
});

export const isTextWrite = atom<boolean>({
  key: 'isTextWrite',
  default: false,
});
