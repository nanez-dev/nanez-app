import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import NextBtn from '../../components/NextBtn/NextBtn';
import { useNavigation } from '@react-navigation/native';

const PerfumeRegSuccess = ({ route: { params } }: any) => {
  const { height: screenHeight } = Dimensions.get('screen');
  const navigation = useNavigation();

  useEffect(() => {
    console.log(params);
  }, []);

  const goToHome = () => {
    //@ts-ignore
    navigation.navigate('Tabs', {
      screen: 'Home',
    });
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
      </View>
      <NextBtn bgColor="#e7862d" title="메인으로" onPress={goToHome} />
    </View>
  );
};

export default PerfumeRegSuccess;
