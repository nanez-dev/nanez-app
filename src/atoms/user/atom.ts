import { atom } from 'recoil';

const loginUserState = atom({
  key: 'loginUserState',
  default: {
    isLoggedin: false,
    nickname: '',
    email: '',
    gender: '',
    age_group: '',
    profile_image: '',
  },
});

export default loginUserState;
