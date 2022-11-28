import React, { useState } from 'react';
import { View, Text, Dimensions, Switch } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { getLoginUser } from '../../atoms/user/selector';
import { ServiceWrapper } from './Setting.styles';

const Setting = () => {
  const { height } = Dimensions.get('window');
  const [isEnabled, setIsEnabled] = useState(false);
  const setLoginUser = useSetRecoilState(getLoginUser);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleLogout = () => {
    setLoginUser((prev: any) => {
      return {
        ...prev,
        isLoggedin: false,
      };
    });
  };

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
      <ServiceWrapper onPress={handleLogout}>
        <Text style={{ marginLeft: 6 }}>로그아웃</Text>
      </ServiceWrapper>
    </View>
  );
};

export default Setting;
