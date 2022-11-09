import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container, Label, Input } from './RegisterInput.styles';

interface IRegisterInput {
  label: string;
  placeholder: string;
  value: string;
  handleEmailValue: (text: string) => void;
  onSubmitEmail: () => void;
}

const RegisterInput = ({
  label,
  placeholder,
  value,
  handleEmailValue,
  onSubmitEmail,
}: IRegisterInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        autoCapitalize="none"
        autoComplete={'off'}
        autoCorrect={false}
        value={value}
        onChangeText={handleEmailValue}
        placeholder={placeholder}
        placeholderTextColor={'#999999'}
        keyboardType="email-address"
      />
      <Input
        autoCapitalize="none"
        autoComplete={'off'}
        autoCorrect={false}
        value={value}
        onChangeText={handleEmailValue}
        placeholder={placeholder}
        placeholderTextColor={'#999999'}
        keyboardType="email-address"
      />
      <TouchableOpacity
        onPress={onSubmitEmail}
        style={{
          backgroundColor: '#65BFC4',
          width: '100%',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginTop: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>인증번호 전송</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default RegisterInput;
