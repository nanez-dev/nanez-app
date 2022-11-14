import { atom } from 'recoil';

const loginUserState = atom({
  key: 'loginUserState',
  default: {
    isLoggedin: false,
    username: '',
    name: '',
    email: '',
    password: '',
    gender: '',
    age_group: '',
  },
});

export default loginUserState;
