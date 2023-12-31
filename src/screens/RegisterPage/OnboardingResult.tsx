import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import API from '../../apis/apis';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';

interface IUser {
  nickname: string;
  email: string;
  password: string;
  gender: string;
  age_group: number;
  refer_code: string;
  accord_id: number;
  is_accepted: boolean;
  profile_image: string;
}

type OnboardingResultScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingResult'>;
const OnboardingResult = ({ navigation: { navigate }, route }: OnboardingResultScreenProps) => {
  const {
    nickname,
    email,
    password,
    selectedGender: gender,
    selectedAge: age_group,
    code: refer_code,
    selectedAccordId: accord_id,
    selectedAccordImage: profile_image,
    is_accepted,
  }: any = route.params;

  const { mutate: onSubmitSignup } = useMutation(
    () =>
      API.postUserSignup<IUser>({
        nickname,
        email,
        password,
        gender,
        age_group,
        refer_code,
        accord_id,
        is_accepted,
        profile_image,
      }),
    {
      onSuccess: () => {
        navigate('LoginPage');
      },
      onError: (error) => {
        throw new Error(`OnboardingResult page signup ${error}`);
      },
    }
  );

  return (
    <Container>
      <RegisterHeader
        type="result"
        title={'나네 회원 가입을\n환영합니다!'}
        subtitle="나네에서 나만의 향을 찾길 바라요 :)"
      />
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <FastImage
          source={{ uri: profile_image }}
          style={{ width: 240, height: 240, borderRadius: 120 }}
        />
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
          <Text style={{ color: 'white', fontWeight: '700' }}>로그인하기</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default OnboardingResult;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;
