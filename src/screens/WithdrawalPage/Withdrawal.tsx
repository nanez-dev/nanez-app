import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import { styles } from './Withdrawal.styles';

const Withdrawal = () => {
  return (
    <View style={styles.container}>
      <RegisterHeader title="회원탈퇴" subtitle="탈퇴를 희망하시면 탈퇴하기를 눌러주세요." />
      <TouchableOpacity>
        <Text>탈퇴하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Withdrawal;
