import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, Switch } from 'react-native';
import { ServiceWrapper } from './Setting.styles';
// import { logout } from '@react-native-seoul/kakao-login';
import { useSetRecoilState } from 'recoil';
import { loginCheck } from '../../atoms/loginCheck';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const STORAGE_KEY = '@accessToken';

const Setting = ({ navigation: { setOptions } }: any) => {
  const { height } = Dimensions.get('window');
  const [isEnabled, setIsEnabled] = useState(false);
  const setIsLogin = useSetRecoilState(loginCheck);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    setOptions({
      title: '설정',
    });
  }, []);

  // const signOutWithKakao = async (): Promise<void> => {
  //   try {
  //     const message = await logout();

  //     setIsLogin(false);
  //     await AsyncStorage.removeItem(STORAGE_KEY, () =>
  //       //@ts-ignore
  //       navigation.navigate('Auth', {
  //         screen: 'OAuth',
  //       })
  //     );
  //     console.log(message);
  //   } catch (err) {
  //     // eslint-disable-next-line no-console
  //     console.error('signOut error', err);
  //   }
  // };

  return (
    <View style={{ backgroundColor: 'white', height }}>
      <ServiceWrapper>
        <Text style={{ marginLeft: 6 }}>다크모드</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </ServiceWrapper>
      <ServiceWrapper>
        <Text style={{ marginLeft: 6 }}>로그아웃</Text>
      </ServiceWrapper>
    </View>
  );
};

export default Setting;
