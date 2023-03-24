import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import API_KEY from '../../config/apiKey';

export const getNewToken = async () => {
  return await axios
    .get(`${API_KEY}/users/access-token`, {
      headers: {
        Authorization: `Bearer ${EncryptedStorage.getItem('refresh_token')}`,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};
