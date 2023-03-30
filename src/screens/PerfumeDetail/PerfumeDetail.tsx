import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import GoToHomeBtn from '../../components/@shared/Button/GoToHomeBtn/GoToHomeBtn';
import { ParamListBase } from '@react-navigation/native';
import numberWithCommas from '../../utils/numberWithCommas';
import FastImage from 'react-native-fast-image';
import EncryptedStorage from 'react-native-encrypted-storage';
import { patchPerfumeMylist, getPerfumeDetailInfo } from '../../apis/perfume';
import { styles } from './PerfumeDetail.styles';

type DetailScreenProps = NativeStackScreenProps<ParamListBase, 'PerfumeDetail'>;
const PerfumeDetail = ({ navigation: { goBack }, route: { params } }: DetailScreenProps) => {
  const prepareImg = require('../../assets/images/detail_img/prepare.jpeg');
  const { id }: any = params;

  const {
    data: { data },
    refetch,
  } = useQuery<any>(['perfumeDetail'], () => getPerfumeDetailInfo(id), {
    onError: (error: any) => {
      throw new Error(`Detail Page error ${error}`);
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  const goToHome = () => {
    goBack();
  };

  const handleWishHavingButtonClick = async (btnType: string) => {
    const cookie = await EncryptedStorage.getItem('authCookie');
    if (!cookie) {
      Alert.alert('로그인을 해주세요.');
    } else {
      await patchPerfumeMylist(data.perfume.id, btnType);
      refetch();
    }
  };

  interface ItypeObject {
    [key: string]: string;
  }

  const typeObject: ItypeObject = {
    T: 'TOP',
    M: 'Middle',
    B: 'Base',
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <SafeAreaView style={{ height: 1210 }}>
        <View style={{ alignItems: 'center' }}>
          <FastImage source={{ uri: data.perfume.image }} style={styles.productImage} />
        </View>
        <View style={styles.productInfo}>
          <View style={styles.productInfoTitleWrap}>
            <Text style={{ fontSize: 11, fontWeight: '400', color: '#666666' }}>
              {data.perfume.brand.kor}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 4 }}>
              {data.perfume.eng}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8 }}>
              {data.perfume.kor}
            </Text>
            <Text style={{ fontSize: 24, fontWeight: '700', color: '#F05028' }}>
              {numberWithCommas(data.perfume.price)}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={handleWishHavingButtonClick.bind(this, 'having')}
              style={{ marginRight: 10 }}
            >
              <Ionicons
                color={data.perfume.is_having ? 'red' : 'black'}
                name="checkmark-circle-outline"
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleWishHavingButtonClick.bind(this, 'wish')}>
              <Ionicons
                color={data.perfume.is_wish ? 'red' : 'black'}
                name="heart-outline"
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.accordInfo}>
          <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 16 }}>Accord</Text>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
            }}
          >
            {data.perfume.perfume_accords.map((i: any) => (
              <FastImage key={i.id} source={{ uri: i.accord.image }} style={styles.accordImage} />
            ))}
          </View>
        </View>
        <View style={styles.noteInfo}>
          <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 16 }}>Note</Text>
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#F27766',
                  marginBottom: 4,
                }}
              >
                {data.perfume.title}
              </Text>
              <Text style={{ width: '90%', marginBottom: 16, fontSize: 14, fontWeight: '400' }}>
                {data.perfume.subtitle}
              </Text>
              <View style={{ marginBottom: 16 }}>
                {data.perfume.perfume_notes.map((el: any) => (
                  <Text key={el.id} style={{ fontSize: 14, fontWeight: '400', marginBottom: 10 }}>
                    {typeObject[el.type]} : {el.note.eng}
                  </Text>
                ))}
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {data.perfume.perfume_notes.map((i: any) => (
                <View key={i.id}>
                  {i.note.image === null ? (
                    <FastImage source={prepareImg} style={styles.noteImage} />
                  ) : (
                    <FastImage source={{ uri: i.note.image }} style={styles.noteImage} />
                  )}
                  <Text
                    style={{ marginBottom: 5, fontSize: 12, fontWeight: '400', color: '#999999' }}
                  >
                    {typeObject[i.type]}
                  </Text>
                  <Text style={styles.noteTitle}>{i.note.eng}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <GoToHomeBtn onPress={goToHome} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default PerfumeDetail;
