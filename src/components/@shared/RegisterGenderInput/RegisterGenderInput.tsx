import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Container, Label, Input, NextButton, ButtonText } from './RegisterGenderInput.styles';

interface IRegisterGenderInput {
  label: string;
}

const RegisterGenderInput = ({ label }: IRegisterGenderInput) => {
  const [selectedGender, setSelectedGender] = useState();
  return (
    <Container>
      <Label>{label}</Label>
      <Input>
        <Picker
          itemStyle={{ height: 150 }}
          selectedValue={selectedGender}
          onValueChange={(itemValue) => setSelectedGender(itemValue)}
        >
          <Picker.Item label="여자" value="woman" />
          <Picker.Item label="남자" value="man" />
        </Picker>
      </Input>
      <NextButton>
        <ButtonText>다음으로</ButtonText>
      </NextButton>
    </Container>
  );
};

export default RegisterGenderInput;
