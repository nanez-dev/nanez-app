import React from 'react';
import { Pressable } from 'react-native';
import { ButtonContent, NextButton } from './NextBtn.styles';

interface NextBtnProps {
  title: string;
  bgColor: string;
  onPress: () => void;
}

const NextBtn = ({ title, onPress, bgColor }: NextBtnProps) => {
  return (
    <Pressable onPress={onPress} style={{ width: '100%', alignItems: 'center' }}>
      <NextButton color={bgColor}>
        <ButtonContent>{title}</ButtonContent>
      </NextButton>
    </Pressable>
  );
};

export default NextBtn;
