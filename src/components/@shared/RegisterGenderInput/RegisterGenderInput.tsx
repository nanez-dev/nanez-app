import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Container, Label, Input, NextButton, ButtonText } from './RegisterGenderInput.styles';

interface IRegisterGenderInput {
  label: string;
  selectedGender: string;
  handleSelectedGender: (text: string) => void;
  goToNext: () => void;
}

const RegisterGenderInput = ({
  label,
  selectedGender = 'F',
  handleSelectedGender,
  goToNext,
}: IRegisterGenderInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input>
        <Picker
          itemStyle={{ height: 130 }}
          selectedValue={selectedGender}
          onValueChange={handleSelectedGender}
        >
          <Picker.Item label="미입력" value="NO" />
          <Picker.Item label="여자" value="F" />
          <Picker.Item label="남자" value="M" />
        </Picker>
      </Input>
      <NextButton onPress={goToNext}>
        <ButtonText>다음으로</ButtonText>
      </NextButton>
    </Container>
  );
};

export default RegisterGenderInput;
