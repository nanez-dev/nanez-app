import React, { useState } from 'react';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';
import NextBtn from '../../components/@shared/Button/NextBtn/NextBtn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { WithLocalSvg } from 'react-native-svg';

type RegisterScreenProps = NativeStackScreenProps<ParamListBase, 'RegisterPage'>;
const RegisterPage = ({ navigation: { navigate } }: RegisterScreenProps) => {
  const [allCheck, setAllCheck] = useState(false);
  const [requireCheck, setRequireCheck] = useState(false);
  const [optionCheck, setOptionCheck] = useState(false);

  const goToNext = () => {
    if (requireCheck || allCheck) {
      navigate('OnboardingEmail', {
        is_accepted: optionCheck,
      });
    } else {
      Alert.alert('약관에 동의해주세요');
    }
  };

  return (
    <>
      <ProgressBar step={1} totalStep={8} />
      <Container>
        <Wrapper>
          <WithLocalSvg
            asset={require('../../assets/images/auth_img/register_logo.svg')}
            width={72}
            height={72}
          />
          <Text style={{ fontSize: 24, fontWeight: '700', marginTop: 20 }}>
            안녕하세요, <Text style={{ color: '#65BFC4' }}>나네</Text>입니다.
          </Text>
          <Text style={styles.subTitle}>
            나네 서비스 이용을 위한 {'\n'}필수 이용 약관 동의가 필요합니다.
          </Text>
        </Wrapper>

        <Wrapper>
          <AgreeListContainer type="all">
            <Text>약관 전체 동의하기</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                lineWidth={0.5}
                boxType={'square'}
                disabled={false}
                value={allCheck}
                onValueChange={(newValue) => setAllCheck(newValue)}
              />
            </View>
          </AgreeListContainer>
          <AgreeListContainer type="require">
            <Text>(필수)나네 서비스 이용 약관 동의</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigate('Service')}>
                <Text style={{ marginRight: 22, fontSize: 12, color: '#B3B3B7' }}>보기</Text>
              </TouchableOpacity>
              <CheckBox
                lineWidth={0.5}
                boxType={'square'}
                disabled={false}
                value={allCheck || requireCheck}
                onValueChange={(newValue) => setRequireCheck(newValue)}
              />
            </View>
          </AgreeListContainer>
          <AgreeListContainer type="require">
            <Text>(필수)개인정보 수집/이용 약관 동의</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigate('Information')}>
                <Text style={{ marginRight: 22, fontSize: 12, color: '#B3B3B7' }}>보기</Text>
              </TouchableOpacity>
              <CheckBox
                lineWidth={0.5}
                boxType={'square'}
                disabled={false}
                value={allCheck || requireCheck}
                onValueChange={(newValue) => setRequireCheck(newValue)}
              />
            </View>
          </AgreeListContainer>
          <AgreeListContainer type="option">
            <Text>(선택)홍보성 SMS/메일 수신 동의</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigate('Promotion')}>
                <Text style={{ marginRight: 22, fontSize: 12, color: '#B3B3B7' }}>보기</Text>
              </TouchableOpacity>
              <CheckBox
                lineWidth={0.5}
                boxType={'square'}
                disabled={false}
                value={allCheck || optionCheck}
                onValueChange={(newValue) => setOptionCheck(newValue)}
              />
            </View>
          </AgreeListContainer>
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

const AgreeListContainer = styled.View<{ type: string }>`
  width: 350px;
  border-radius: 40px;
  height: 40px;
  background-color: ${(props) => (props.type === 'all' ? '#fafafd' : 'white')};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const styles = StyleSheet.create({
  subTitle: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '400',
    marginTop: 8,
  },
});
