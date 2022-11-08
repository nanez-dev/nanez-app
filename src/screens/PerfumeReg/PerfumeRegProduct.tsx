import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import NextBtn from '../../components/@shared/Button/NextBtn/NextBtn';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { isTextWrite } from '../../atoms/atoms';

const PerfumeRegProduct = ({ route: { params } }: any) => {
  const { height: screenHeight } = Dimensions.get('screen');
  const [inputCheck, setInputCheck] = useRecoilState(isTextWrite);
  const [textValue, setTextValue] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    if (textValue.length > 1) {
      setInputCheck(true);
    } else {
      setInputCheck(false);
    }
  }, [setInputCheck, textValue.length]);

  const goToNextStep = () => {
    if (textValue.length > 1) {
      //@ts-ignore
      navigation.navigate('Perfume', {
        screen: 'addPerfumeSuccess',
        params: {
          ...params,
          product: textValue,
        },
      });
    } else {
      return null;
    }
  };

  const onChange = (text: string) => {
    setTextValue(text);
  };

  return (
    <View style={{ backgroundColor: 'white', height: screenHeight, width: '100%' }}>
      <ProgressBar step={2} totalStep={2} />
      <View style={{ paddingHorizontal: 16, paddingVertical: 44, flex: 0.8 }}>
        <Text style={{ fontSize: 32, fontWeight: '700', marginBottom: 8 }}>
          새로운 향수의{'\n'}제품을 알려주세요!
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#999999', marginBottom: 48 }}>
          빠른 시일내에 반영하도록 하겠습니다.
        </Text>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: '700', marginBottom: 8 }}>
          제품명
        </Text>
        <TextInput
          onChangeText={onChange}
          value={textValue}
          placeholder="향수의 제품 명을 입력해주세요"
          style={{ paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#eee' }}
        />
      </View>
      <NextBtn
        bgColor={inputCheck ? '#e7862d' : '#DBDBDB'}
        title="요청하기"
        onPress={goToNextStep}
      />
    </View>
  );
};

export default PerfumeRegProduct;
