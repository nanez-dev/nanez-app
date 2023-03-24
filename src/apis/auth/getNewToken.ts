import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import API_KEY from '../../config/apiKey';

export const getNewToken = async () => {
  return await axios
    .get(`${API_KEY}/users/access-token`, {
      headers: {
        Authorization: `Bearer ${AsyncStorage.getItem('refresh_token')}`,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};
