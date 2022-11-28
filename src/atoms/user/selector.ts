import { selector } from 'recoil';
import loginUserState from './atom';

const getLoginUser = selector({
  key: 'getLoginUser',
  get: async ({ get }) => {
    const loginUser = get(loginUserState);

    if (loginUser.isLoggedin === false) {
      return;
    }

    return loginUser;
  },
  set: ({ set }, { nickname, email, gender, age_group, profile_image }: any) => {
    set(loginUserState, {
      isLoggedin: true,
      nickname,
      email,
      gender,
      age_group,
      profile_image,
    });
  },
});

export { getLoginUser };
