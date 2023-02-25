import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../apis';

export const setCookie = (cookie: string) => {
  instance.defaults.headers.Cookies = JSON.parse(cookie);
};

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
