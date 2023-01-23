import React from 'react';
import { DevSettings, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Withdrawal.styles';
import EncryptedStorage from 'react-native-encrypted-storage';
import API from '../../apis/apis';

const Withdrawal = () => {
  const handleWithDrawal = () => {
    EncryptedStorage.getItem('authCookie')
      .then((res) => API.deleteUsersWithdrawal(String(res)))
      .finally(() => {
        DevSettings.reload();
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrap}>
        <Text style={styles.title}>회원탈퇴</Text>
        <Text style={styles.subTitle}>탈퇴를 희망하시면 탈퇴하기를 눌러주세요.</Text>
      </View>
      <TouchableOpacity style={styles.withDrawalWrap} onPress={handleWithDrawal}>
        <Text style={styles.withDrawalTitle}>탈퇴하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Withdrawal;
