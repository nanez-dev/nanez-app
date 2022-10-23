import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IData } from '../../components/Recommend/Recommend';
import { isClick } from '../../atoms/atoms';
import { useRecoilState } from 'recoil';
import {
  ProductImage,
  ProductInfo,
  AccordInfo,
  AccordImage,
  NoteInfo,
  NoteImage,
} from './PerfumeDetail.styles';
import { useQuery } from '@tanstack/react-query';
import GoToHomeBtn from '../../components/GoToHomeBtn/GoToHomeBtn';
import { useNavigation } from '@react-navigation/native';
import numberWithCommas from '../../utils/numberWithCommas';
import API from '../../apis/apis';

const imagePath1 = require('../../assets/images/perfume01.png');
const imagePath2 = require('../../assets/images/perfume02.png');
const imagePath3 = require('../../assets/images/perfume02.png');

type RootStackParamList = {
  // screen이름 : Params
  PerfumeDetail: IData;
};

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'PerfumeDetail'>;

const PerfumeDetail = ({ route: { params } }: any) => {
  const navigation = useNavigation<any>();
  const goToHome = () => {
    navigation.navigate('Tabs', {
      screen: 'Home',
    });
  };
  const [isClickCheck, setIsClickCheck] = useRecoilState<boolean>(isClick);
  const handleClickCheck = () => {
    setIsClickCheck((prev) => !prev);
  };

  const { isLoading: accordLoading, data: accordData } = useQuery(['accord'], API.getAllAccords);
  const { isLoading: noteLoading, data: noteData } = useQuery(['note'], API.getAllNotes);
  const { isLoading: perfumeLoading, data: perfumeData } = useQuery(['note'], API.getPerfumeData);

  const loading = accordLoading || noteLoading;
  return loading ? (
    <View>
      <Text>Loading</Text>
    </View>
  ) : (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <SafeAreaView style={{ height: 1210 }}>
        <View style={{ alignItems: 'center' }}>
          <ProductImage source={imagePath1} />
        </View>
        <ProductInfo>
          <View>
            <Text style={{ fontSize: 11, fontWeight: '400', color: '#666666' }}>
              {params.brand}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 4 }}>{params.eng}</Text>
            <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8 }}>
              {params.kor}
              {params.volume}
            </Text>
            <Text style={{ fontSize: 24, fontWeight: '700', color: '#F05028' }}>
              {numberWithCommas(params.cost)}
            </Text>
          </View>
          <Pressable style={{ flexDirection: 'row' }}>
            <Ionicons
              onPress={handleClickCheck}
              color={isClickCheck ? 'tomato' : 'black'}
              name="checkmark-circle-outline"
              size={22}
            />
            <Ionicons name="heart-outline" size={22} />
          </Pressable>
        </ProductInfo>
        <AccordInfo>
          <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 16 }}>Accord</Text>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
            }}
          >
            <AccordImage source={{ uri: accordData.accords[0].image }} />
            <AccordImage source={{ uri: accordData.accords[1].image }} />
            <AccordImage source={{ uri: accordData.accords[2].image }} />
          </View>
        </AccordInfo>
        <NoteInfo>
          <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 16 }}>Note</Text>
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#F27766', marginBottom: 4 }}>
                가을의 정수
              </Text>
              <Text style={{ width: '90%', marginBottom: 16, fontSize: 14, fontWeight: '400' }}>
                화이트 프리지아 부케향에 이제 막 익은 배의 신선함을 입히고 호박, 파출리, 우디향으로
                은은함을 더했습니다.
              </Text>
              <View style={{ marginBottom: 16 }}>
                <Text style={{ fontSize: 14, fontWeight: '400', marginBottom: 10 }}>
                  Top Note: Lemon, Basil, Tulip
                </Text>
                <Text style={{ fontSize: 14, fontWeight: '400', marginBottom: 10 }}>
                  Middle Note: Freesia, Pear
                </Text>
                <Text style={{ fontSize: 14, fontWeight: '400', marginBottom: 10 }}>
                  Base Note: Amber, Musk
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <NoteImage source={{ uri: noteData.notes[0].image }} />
                <Text
                  style={{ marginBottom: 5, fontSize: 12, fontWeight: '400', color: '#999999' }}
                >
                  Top Note
                </Text>
                <Text>Lemon</Text>
              </View>
              <View>
                <NoteImage source={{ uri: noteData.notes[1].image }} />
                <Text
                  style={{ marginBottom: 5, fontSize: 12, fontWeight: '400', color: '#999999' }}
                >
                  Middle Note
                </Text>
                <Text>Freesia</Text>
              </View>
              <View>
                <NoteImage source={{ uri: noteData.notes[2].image }} />
                <Text
                  style={{ marginBottom: 5, fontSize: 12, fontWeight: '400', color: '#999999' }}
                >
                  Base Note
                </Text>
                <Text>Pear</Text>
              </View>
            </View>
          </View>
        </NoteInfo>
        <GoToHomeBtn onPress={goToHome} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default PerfumeDetail;
