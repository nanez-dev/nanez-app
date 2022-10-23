import { atom } from 'recoil';

export const lightMode = atom<boolean>({
  key: 'lightMode',
  default: false,
});

export const darkMode = atom<boolean>({
  key: 'darkMode',
  default: false,
});
