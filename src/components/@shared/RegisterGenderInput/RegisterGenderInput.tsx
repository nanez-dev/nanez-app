import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Container, Label, Input } from './RegisterGenderInput.styles';

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
    </Container>
  );
};

export default RegisterGenderInput;
