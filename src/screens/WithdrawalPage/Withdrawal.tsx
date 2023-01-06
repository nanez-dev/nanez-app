import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Withdrawal.styles';

const Withdrawal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrap}>
        <Text style={styles.title}>회원탈퇴</Text>
        <Text style={styles.subTitle}>탈퇴를 희망하시면 탈퇴하기를 눌러주세요.</Text>
      </View>
      <TouchableOpacity style={styles.withDrawalWrap}>
        <Text style={styles.withDrawalTitle}>탈퇴하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Withdrawal;
