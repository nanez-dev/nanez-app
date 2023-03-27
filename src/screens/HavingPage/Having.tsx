import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useRecoilValue } from 'recoil';
import loginUserState from '../../atoms/user/atom';
import { getPerfumeMylist } from '../../apis/perfume';
import FastImage from 'react-native-fast-image';

const Having = () => {
  const userState = useRecoilValue(loginUserState);
  useEffect(() => {
    refetch();
    if (userState.email !== '') {
      setIsData(true);
    }
  }, []);
  const [isData, setIsData] = useState(false);

  const { data, refetch } = useQuery(['having'], () => getPerfumeMylist('having'));

  if (isData === false) {
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Text style={styles.alertText}>로그인 해주세요!</Text>
        </View>
      </View>
    );
  }

  if (isData === true) {
    return (
      <ScrollView style={styles.container}>
        {data?.data.map((el: any) => (
          <View style={styles.listWrap} key={el.id}>
            <FastImage style={styles.perfumeImage} source={{ uri: el.image }} />
            <Text style={styles.brand}>{el.brand.kor}</Text>
            <Text>{el.kor}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
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
  listWrap: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  perfumeImage: {
    width: 50,
    height: 50,
  },
  brand: {
    marginRight: 10,
    fontSize: 14,
  },
});
