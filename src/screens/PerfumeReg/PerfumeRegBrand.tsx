import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import NextBtn from '../../components/@shared/Button/NextBtn/NextBtn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

type RegBrandScreenProps = NativeStackScreenProps<ParamListBase, 'AddBrand'>;
const PerfumeRegBrand = ({ navigation: { navigate } }: RegBrandScreenProps) => {
  const { height: screenHeight } = Dimensions.get('screen');
  const [inputCheck, setInputCheck] = useState(false);
  const [textValue, setTextValue] = useState<string>('');

  useEffect(() => {
    if (textValue.length > 1) {
      setInputCheck(true);
    } else {
      setInputCheck(false);
    }
  }, [setInputCheck, textValue.length]);

  const goToNextStep = () => {
    if (textValue.length > 1) {
      navigate('AddProduct', {
        brand: textValue,
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
          placeholderTextColor={'#999999'}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: '#FAFAFD',
            borderRadius: 50,
          }}
        />
      </View>
      <NextBtn
        bgColor={inputCheck ? '#65BFC4' : '#DBDBDB'}
        title="다음으로"
        onPress={goToNextStep}
      />
    </View>
  );
};

export default PerfumeRegBrand;
