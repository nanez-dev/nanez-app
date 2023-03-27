import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';
import loginUserState from '../../atoms/user/atom';
import { getPerfumeMylist } from '../../apis/perfume';

const Having = () => {
  const userState = useRecoilValue(loginUserState);

  useQuery(['having'], () => getPerfumeMylist('having'));

  if (userState.email === '') {
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Text style={styles.alertText}>로그인 해주세요!</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Having page</Text>
    </View>
  );
};

export default Having;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  wrap: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertText: {
    fontSize: 27,
  },
});
