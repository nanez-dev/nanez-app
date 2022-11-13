import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import RegisterNicknameInput from '../../components/@shared/RegisterNicknameInput/RegisterNicknameInput';

type OnboardingNicknameScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingNickname'>;
const OnboardingNickname = ({ navigation: { navigate }, route }: OnboardingNicknameScreenProps) => {
  const [nickname, setNickname] = useState('');
  // 자음, 모음, 숫자 불가능
  const nicknameRegExp = /([^가-힣\x20])/i;
  const nicknameRegExpCheck = nicknameRegExp.test(nickname);

  const handleNicknameValue = (text: string) => {
    setNickname(text);
  };

  const goToNext = () => {
    if (nickname && !nicknameRegExpCheck) {
      navigate('OnboardingAccord', {
        nickname,
        ...route.params,
      });
    } else {
      Alert.alert('닉네임을 작성해주세요.');
    }
  };

  return (
    <>
      <ProgressBar step={6} totalStep={8} />
      <Container>
        <RegisterHeader title={'나네에서 부를\n이름을 정해주세요!'} subtitle="별명도 좋아요" />
        <RegisterNicknameInput
          label="이름"
          placeholder="불리고 싶은 이름을 작성해주세요!"
          nickname={nickname}
          handleNicknameValue={handleNicknameValue}
          goToNext={goToNext}
        />
      </Container>
    </>
  );
};

export default OnboardingNickname;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
