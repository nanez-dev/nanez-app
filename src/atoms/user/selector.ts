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
  set: ({ set }, { username, name, email, password, gender, age_group }: any) => {
    set(loginUserState, {
      isLoggedin: true,
      username: username,
      name: name,
      email: email,
      password: password,
      gender: gender,
      age_group: age_group,
    });
  },
});

export { getLoginUser };
