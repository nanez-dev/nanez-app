import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import NextBtn from '../../components/@shared/Button/NextBtn/NextBtn';
import { ParamListBase } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
const RegLogo = require('../../assets/images/logo.jpeg');

type RegSuccessScreenProps = NativeStackScreenProps<ParamListBase, 'AddSuccess'>;
const PerfumeRegSuccess = ({ navigation: { navigate }, route }: RegSuccessScreenProps) => {
  const { height: screenHeight } = Dimensions.get('screen');
  console.log(route);

  const goToHome = () => {
    navigate('HomePage');
  };

  return (
    <View style={{ backgroundColor: 'white', height: screenHeight, width: '100%' }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 44, flex: 0.8, alignItems: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: '700', marginBottom: 8, textAlign: 'center' }}>
          등록 요청이{'\n'}완료되었습니다.
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#999999', marginBottom: 48 }}>
          등록이 완료되면 알려드리도록 할게요.
        </Text>
        <FastImage source={RegLogo} style={{ width: 240, height: 240, borderRadius: 120 }} />
      </View>
      <NextBtn bgColor="#65BFC4" title="메인으로" onPress={goToHome} />
    </View>
  );
};

export default PerfumeRegSuccess;
