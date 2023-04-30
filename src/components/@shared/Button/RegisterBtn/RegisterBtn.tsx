import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './RegisterBtn.styles';

interface IRegisterBtn {
  onPress: () => void;
}

const RegisterBtn = ({ onPress }: IRegisterBtn) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 12 }}>나네를 아직 시작하지 않으셨나요?</Text>
      <TouchableOpacity onPress={onPress} style={styles.registerWrap}>
        <Text style={styles.registerContent}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterBtn;
