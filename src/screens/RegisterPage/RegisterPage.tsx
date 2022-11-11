import React, { useState } from 'react';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import CheckBox from '@react-native-community/checkbox';
import NextBtn from '../../components/@shared/Button/NextBtn/NextBtn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

type RegisterScreenProps = NativeStackScreenProps<ParamListBase, 'RegisterPage'>;
const RegisterPage = ({ navigation: { navigate } }: RegisterScreenProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  // -1: 전체, 1: 필수, 2: 선택
  const agreeList = [
    {
      type: -1,
      content: '약관 전체 동의하기',
    },
    {
      type: 1,
      content: '(필수) 나네 서비스 이용 약관 동의',
    },
    {
      type: 1,
      content: '(필수) 개인정보 수집/이용 약관 동의',
    },
    {
      type: 2,
      content: '(선택) 홍보성 SMS/메일 수신 동의',
    },
  ];

  const goToNext = () => {
    navigate('OnboardingEmail');
  };

  return (
    <>
      <ProgressBar step={1} totalStep={7} />
      <Container>
        <Wrapper>
          <FastImage
            source={require('../../assets/images/auth_img/register_logo.png')}
            style={{ width: 72, height: 72 }}
          />
          <Text style={{ fontSize: 24, fontWeight: '700', marginTop: 20 }}>
            안녕하세요, <Text style={{ color: '#65BFC4' }}>나네</Text>입니다.
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 11,
              fontWeight: '400',
              marginTop: 8,
            }}
          >
            나네 서비스 이용을 위한 {'\n'}필수 이용 약관 동의가 필요합니다.
          </Text>
        </Wrapper>

        <Wrapper>
          {agreeList.map((i, index) => {
            return (
              <AgreeListContainer key={index} type={i.type}>
                <Text>{i.content}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {i.type !== -1 && (
                    <Text style={{ marginRight: 22, fontSize: 12, color: '#B3B3B7' }}>보기</Text>
                  )}
                  <CheckBox
                    lineWidth={0.5}
                    boxType={'square'}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />
                </View>
              </AgreeListContainer>
            );
          })}
        </Wrapper>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <NextBtn title="동의합니다" bgColor="#65BFC4" onPress={goToNext} />
        </View>
      </Container>
    </>
  );
};

export default RegisterPage;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AgreeListContainer = styled.View<{ type: number }>`
  width: 350px;
  border-radius: 40px;
  height: 40px;
  background-color: ${(props) => (props.type === -1 ? '#fafafd' : 'white')};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;
