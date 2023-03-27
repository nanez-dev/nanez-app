import AsyncStorage from '@react-native-async-storage/async-storage';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Dimensions, DevSettings } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import { useSetRecoilState } from 'recoil';
import { getLoginUser } from '../../atoms/user/selector';
import { ServiceWrapper } from './Setting.styles';

type SettingScreenProps = NativeStackScreenProps<ParamListBase, 'Setting'>;
const Setting = ({ navigation: { navigate } }: SettingScreenProps) => {
  const { height } = Dimensions.get('window');
  // const [isEnabled, setIsEnabled] = useState(false);
  const setLoginUser = useSetRecoilState(getLoginUser);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleLogout = async () => {
    setLoginUser((prev: any) => {
      return {
        ...prev,
        isLoggedin: false,
      };
    });
    await AsyncStorage.clear()
      .then(() => {
        EncryptedStorage.clear();
      })
      .then(() => {
        DevSettings.reload();
      });
  };

  const goToWithdrawal = () => {
    navigate('Withdrawal');
  };

  return (
    <View style={{ backgroundColor: 'white', height }}>
      {/* <ServiceWrapper>
        <Text style={{ marginLeft: 6 }}>다크모드</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </ServiceWrapper> */}
      <ServiceWrapper onPress={handleLogout}>
        <Text style={{ marginLeft: 6 }}>로그아웃</Text>
      </ServiceWrapper>
      <ServiceWrapper onPress={goToWithdrawal}>
        <Text style={{ marginLeft: 6 }}>탈퇴하기</Text>
      </ServiceWrapper>
    </View>
  );
};

export default Setting;
