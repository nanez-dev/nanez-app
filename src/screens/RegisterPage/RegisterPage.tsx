import React, { useState } from 'react';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import NextBtn from '../../components/@shared/Button/NextBtn/NextBtn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { WithLocalSvg } from 'react-native-svg';

type RegisterScreenProps = NativeStackScreenProps<ParamListBase, 'RegisterPage'>;
const RegisterPage = ({ navigation: { navigate } }: RegisterScreenProps) => {
  const [allCheck, setAllCheck] = useState(false);
  const [requireUseCheck, setRequireUseCheck] = useState(false);
  const [requireInfoCheck, setRequireInfoCheck] = useState(false);
  const [optionCheck, setOptionCheck] = useState(false);

  const goToNext = () => {
    if ((requireUseCheck && requireInfoCheck) || allCheck) {
      navigate('OnboardingEmail', {
        is_accepted: optionCheck,
      });
    } else {
      Alert.alert('약관에 동의해주세요');
    }
  };

  const handleAllCheckClick = () => {
    setAllCheck((prev) => !prev);
    setRequireUseCheck((prev) => !prev);
    setRequireInfoCheck((prev) => !prev);
    setOptionCheck((prev) => !prev);
  };

  const agreeCheck = allCheck || (requireUseCheck && requireInfoCheck) ? '#65BFC4' : '#CCCCCC';

  const agreeAllAsset = allCheck
    ? require('../../assets/images/login_img/check_yes.svg')
    : require('../../assets/images/login_img/check_no.svg');

  const agreeUseAsset =
    allCheck || requireUseCheck
      ? require('../../assets/images/login_img/check_yes.svg')
      : require('../../assets/images/login_img/check_no.svg');

  const agreeInfoAsset =
    allCheck || requireInfoCheck
      ? require('../../assets/images/login_img/check_yes.svg')
      : require('../../assets/images/login_img/check_no.svg');

  const optionCheckAsset = optionCheck
    ? require('../../assets/images/login_img/check_yes.svg')
    : require('../../assets/images/login_img/check_no.svg');

  const handleRequireCheck = (type: string) => {
    if (type === 'use') {
      setRequireUseCheck((prev) => !prev);
    }
    if (type === 'info') {
      setRequireInfoCheck((prev) => !prev);
    }
  };

  const handleOptionCheck = () => {
    setOptionCheck((prev) => !prev);
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
            <TouchableOpacity onPress={handleAllCheckClick}>
              <WithLocalSvg asset={agreeAllAsset} width={24} height={24} />
            </TouchableOpacity>
            <Text style={{ fontWeight: '700', fontSize: 16, marginLeft: 16 }}>
              약관 전체 동의하기
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} />
          </AgreeListContainer>
          <AgreeListContainer type="require">
            <TouchableOpacity onPress={handleRequireCheck.bind(this, 'use')}>
              <WithLocalSvg asset={agreeUseAsset} width={24} height={24} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <Text style={{ marginLeft: 16 }}>
                <Text style={{ color: '#FF0000' }}>(필수)</Text> 나네 서비스 이용 약관 동의
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigate('Service')}>
                  <Text style={{ marginRight: 22, fontSize: 12, color: '#B3B3B7' }}>보기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </AgreeListContainer>
          <AgreeListContainer type="require">
            <TouchableOpacity onPress={handleRequireCheck.bind(this, 'info')}>
              <WithLocalSvg asset={agreeInfoAsset} width={24} height={24} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <Text style={{ marginLeft: 16 }}>
                <Text style={{ color: '#FF0000' }}>(필수)</Text> 개인정보 수집/이용 약관 동의
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigate('Information')}>
                  <Text style={{ marginRight: 22, fontSize: 12, color: '#B3B3B7' }}>보기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </AgreeListContainer>
          <AgreeListContainer type="option">
            <TouchableOpacity onPress={handleOptionCheck}>
              <WithLocalSvg asset={optionCheckAsset} width={24} height={24} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <Text style={{ marginLeft: 16 }}>(선택) 홍보성 SMS/메일 수신 동의</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigate('Promotion')}>
                  <Text style={{ marginRight: 22, fontSize: 12, color: '#B3B3B7' }}>보기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </AgreeListContainer>
        </Wrapper>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <NextBtn title="동의합니다" bgColor={agreeCheck} onPress={goToNext} />
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
  margin-top: 62px;
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
  padding: 0px 20px;
  margin-bottom: 8px;
`;

const styles = StyleSheet.create({
  subTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.5,
    marginTop: 8,
  },
});
