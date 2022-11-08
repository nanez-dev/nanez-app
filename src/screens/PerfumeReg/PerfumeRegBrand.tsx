import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import NextBtn from '../../components/@shared/Button/NextBtn/NextBtn';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { isTextWrite } from '../../atoms/atoms';

const PerfumeRegBrand = () => {
  const { height: screenHeight } = Dimensions.get('screen');
  const [inputCheck, setInputCheck] = useRecoilState(isTextWrite);
  const [textValue, setTextValue] = useState<string>('');
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
        screen: 'addPerfumeProduct',
        params: {
          brand: textValue,
        },
      });
    } else {
      return null;
    }
  };

  const handleTextValue = (text: string) => {
    setTextValue(text);
  };

  return (
    <View style={{ backgroundColor: 'white', height: screenHeight, width: '100%' }}>
      <ProgressBar step={1} totalStep={2} />
      <View style={{ paddingHorizontal: 16, paddingVertical: 44, flex: 0.8 }}>
        <Text style={{ fontSize: 32, fontWeight: '700', marginBottom: 8 }}>
          새로운 향수의{'\n'}브랜드를 알려주세요!
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#999999', marginBottom: 48 }}>
          빠른 시일내에 반영하도록 하겠습니다.
        </Text>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: '700', marginBottom: 8 }}>
          브랜드
        </Text>
        <TextInput
          onChangeText={handleTextValue}
          value={textValue}
          placeholder="향수의 브랜드 명을 입력해주세요"
          style={{ paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#eee' }}
        />
      </View>
      <NextBtn
        bgColor={inputCheck ? '#e7862d' : '#DBDBDB'}
        title="다음으로"
        onPress={goToNextStep}
      />
    </View>
  );
};

export default PerfumeRegBrand;
