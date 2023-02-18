import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Container, Label, Input, NextButton, ButtonText } from './RegisterAgeInput.styles';

interface IRegisterAgeInput {
  label: string;
  selectedAge: string;
  handleSelectedAge: (text: string) => void;
  goToNext: () => void;
}

const RegisterAgeInput = ({
  label,
  selectedAge = '7',
  handleSelectedAge,
  goToNext,
}: IRegisterAgeInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input>
        <Picker
          itemStyle={{ height: 130 }}
          selectedValue={selectedAge}
          onValueChange={handleSelectedAge}
        >
          <Picker.Item label="미입력" value="0" />
          <Picker.Item label="어린이" value="7" />
          <Picker.Item label="10대" value="10" />
          <Picker.Item label="20대" value="20" />
          <Picker.Item label="30대" value="30" />
          <Picker.Item label="40대" value="40" />
          <Picker.Item label="50대" value="50" />
          <Picker.Item label="60대" value="60" />
          <Picker.Item label="70대" value="70" />
          <Picker.Item label="80대" value="80" />
        </Picker>
      </Input>
      <NextButton onPress={goToNext}>
        <ButtonText>다음으로</ButtonText>
      </NextButton>
    </Container>
  );
};

export default RegisterAgeInput;
