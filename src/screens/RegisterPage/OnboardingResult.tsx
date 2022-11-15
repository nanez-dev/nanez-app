import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components/native';
import API from '../../apis/apis';
import { getLoginUser } from '../../atoms/user/selector';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
const logoImage = require('../../assets/images/logo.jpeg');

interface IUser {
  username: string;
  name: string;
  email: string;
  password: string;
  gender: string;
  age_group: number;
}

// type OnboardingResultScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingResult'>;
const OnboardingResult = ({ route }: any) => {
  const { email, nickname, password, selectedAge, selectedGender }: any = route.params;
  const setLoginUser = useSetRecoilState(getLoginUser);

  const { mutate: onSubmitSignup } = useMutation(
    () => API.postUserSignup<IUser>({ ...route.params }),
    {
      onSuccess: () => {
        setLoginUser({
          username: nickname,
          name: nickname,
          email: email,
          password: password,
          gender: selectedGender,
          age_group: selectedAge,
        });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return (
    <>
      <ProgressBar step={8} totalStep={8} />
      <Container>
        <RegisterHeader
          title={'나네 회원 가입을\n환영합니다!'}
          subtitle="나네에서 나만의 향을 찾길 바라요 :)"
        />
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <FastImage source={logoImage} style={{ width: 240, height: 240, borderRadius: 120 }} />
        </View>
        <View style={{ flex: 0.2 }}>
          <TouchableOpacity
            onPress={() => onSubmitSignup()}
            style={{
              paddingVertical: 14,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#65BFC4',
            }}
          >
            <Text style={{ color: 'white', fontWeight: '700' }}>메인으로</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </>
  );
};

export default OnboardingResult;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
