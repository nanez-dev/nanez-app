import React from 'react';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

const RegisterPage = () => {
  return (
    <>
      <ProgressBar step={1} totalStep={6} />
      <Container>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <FastImage
            source={require('../../assets/images/auth_img/register_logo.png')}
            style={{ width: 72, height: 72 }}
          />
          <Text>안녕하세요, 나네입니다.</Text>
          <Text style={{ textAlign: 'center' }}>
            나네 서비스 이용을 위한 {'\n'}필수 이용 약관 동의가 필요합니다.
          </Text>
        </View>
      </Container>
    </>
  );
};

export default RegisterPage;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
