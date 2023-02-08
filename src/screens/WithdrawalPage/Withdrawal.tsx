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
        <Text style={styles.subTitle}>탈퇴하기 전에 꼭 확인해 주세요.</Text>
        <View style={styles.withDrawalUserInfo}>
          <Text>• 위시리스트 보유리스트에 대한 정보가 전부 삭제돼요. </Text>
          <Text>• 재가입하더라도 이전 내역을 복구할 수 없어요. </Text>
          <Text>• 향수에 대한 정보를 받을 수 없어요. </Text>
          <Text>• 브랜드에 대한 정보를 받을 수 없어요. </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.withDrawalWrap} onPress={handleWithDrawal}>
        <Text style={styles.withDrawalTitle}>탈퇴하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Withdrawal;
