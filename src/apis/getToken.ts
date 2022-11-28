import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
  const token = AsyncStorage.getItem('token');
  if (token) {
    return `Bearer ${token}`;
  } else {
    return null;
  }
};
export default getToken;
