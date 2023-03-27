import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';
import loginUserState from '../../atoms/user/atom';
import { getPerfumeMylist } from '../../apis/perfume';

const Wish = () => {
  const userState = useRecoilValue(loginUserState);

  const { data } = useQuery(['wish'], () => getPerfumeMylist('wish'));

  console.log(data?.data[0].brand.eng);

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
      {data?.data.map((el: any) => (
        <View key={el.id}>
          <Text>{el.brand.kor}</Text>
          <Text>{el.kor}</Text>
        </View>
      ))}
    </View>
  );
};

export default Wish;

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
