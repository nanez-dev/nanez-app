import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import API_KEY from '../../config/apiKey';

export const getNewToken = async () => {
  const refresh_token = await EncryptedStorage.getItem('refresh_token');
  return await axios
    .get(`${API_KEY}/users/access-token`, {
      headers: {
        Authorization: `Bearer ${refresh_token}`,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};
