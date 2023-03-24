import axios from 'axios';

const getCookieValue = (key: string): string => {
  const cookie = axios.defaults.headers.common['set-cookie']
    ? axios.defaults.headers.common['set-cookie'].toString()
    : '';
  const cookieKey = `${key}=`;
  let result = '';
  const cookieArr = cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    if (cookieArr[i][0] === ' ') {
      cookieArr[i] = cookieArr[i].substring(1);
    }

    if (cookieArr[i].indexOf(cookieKey) === 0) {
      result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
      return result;
    }
  }
  return result;
};

export default getCookieValue;
