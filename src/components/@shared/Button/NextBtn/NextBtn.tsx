import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonContent, NextButton } from './NextBtn.styles';

interface NextBtnProps {
  title: string;
  bgColor: string;
  onPress: () => void;
}

const NextBtn = ({ title, onPress, bgColor }: NextBtnProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: '100%', alignItems: 'center', flex: 0.4, paddingHorizontal: 16 }}
    >
      <NextButton color={bgColor}>
        <ButtonContent>{title}</ButtonContent>
      </NextButton>
    </TouchableOpacity>
  );
};

export default NextBtn;
