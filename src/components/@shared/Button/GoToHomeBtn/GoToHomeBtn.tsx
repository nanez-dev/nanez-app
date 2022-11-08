import React from 'react';
import { Pressable } from 'react-native';
import { GoToHomeButton, ButtonContent } from './GoToHomeBtn.styles';

interface GoToHomeBtnProps {
  onPress: () => void;
}

const GoToHomeBtn = ({ onPress }: GoToHomeBtnProps) => {
  return (
    <Pressable onPress={onPress} style={{ width: '100%', alignItems: 'center' }}>
      <GoToHomeButton>
        <ButtonContent>확인</ButtonContent>
      </GoToHomeButton>
    </Pressable>
  );
};

export default GoToHomeBtn;
