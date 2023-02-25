import React, { RefObject } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './IdAndPwInput.styles';

interface IIdAndPwInput {
  email: string;
  onChangeEmailValue: (text: string) => void;
  onSubmitEmailEditing: () => void;
  passwordRef: RefObject<TextInput>;
  password: string;
  onChangePasswordValue: (text: string) => void;
  onSubmitPasswordEditing: () => void;
}

const IdAndPwInput = ({
  email,
  onChangeEmailValue,
  onSubmitEmailEditing,
  passwordRef,
  password,
  onChangePasswordValue,
  onSubmitPasswordEditing,
}: IIdAndPwInput) => {
  return (
    <View>
      <TextInput
        style={styles.idInput}
        autoCapitalize="none"
        autoComplete={'off'}
        autoCorrect={false}
        placeholder="아이디를 입력해주세요"
        value={email}
        onChangeText={onChangeEmailValue}
        onSubmitEditing={onSubmitEmailEditing}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.pwInput}
        ref={passwordRef}
        autoCapitalize="none"
        autoComplete={'off'}
        autoCorrect={false}
        placeholder="패스워드를 입력해주세요"
        value={password}
        onChangeText={onChangePasswordValue}
        secureTextEntry={true}
        onSubmitEditing={onSubmitPasswordEditing}
      />
    </View>
  );
};

export default IdAndPwInput;
