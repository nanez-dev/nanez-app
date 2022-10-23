import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmailValue = (text: string) => {
    setEmail(text);
  };

  const onChangePasswordValue = (text: string) => {
    setPassword(text);
  };
  return (
    <Container>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FastImage
          source={require('../../assets/images/login_logo.png')}
          style={{ width: 175, height: 100 }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text>향수 통합 플랫폼</Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <TextInput
          autoCapitalize="none"
          autoComplete={'off'}
          autoCorrect={false}
          placeholder="아이디를 입력해주세요"
          value={email}
          onChangeText={onChangeEmailValue}
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: '#EFEFEF',
            borderRadius: 40,
            marginBottom: 8,
          }}
        />
        <TextInput
          autoCapitalize="none"
          autoComplete={'off'}
          autoCorrect={false}
          placeholder="패스워드를 입력해주세요"
          value={password}
          onChangeText={onChangePasswordValue}
          secureTextEntry={true}
          style={{ padding: 12, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 40 }}
        />
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 60 }}>
          <TouchableOpacity
            style={{
              width: '100%',
              padding: 12,
              borderWidth: 1,
              borderColor: '#EFEFEF',
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#65BFC4',
            }}
          >
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>로그인</Text>
          </TouchableOpacity>
          <Text>회원 정보를 잊으셨나요?</Text>
        </View>
      </View>
      {/* <View style={{ flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' }}></View> */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>나네를 아직 시작하지 않으셨나요?</Text>
      </View>
    </Container>
  );
};

export default LoginPage;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
