import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  ProductImage,
  ProductInfo,
  AccordInfo,
  AccordImage,
  NoteInfo,
  NoteImage,
} from './PerfumeDetail.styles';
import { useQuery } from '@tanstack/react-query';
import GoToHomeBtn from '../../components/@shared/Button/GoToHomeBtn/GoToHomeBtn';
import { ParamListBase } from '@react-navigation/native';
import numberWithCommas from '../../utils/numberWithCommas';
import API from '../../apis/apis';

type DetailScreenProps = NativeStackScreenProps<ParamListBase, 'PerfumeDetail'>;
const PerfumeDetail = ({ navigation: { goBack }, route: { params } }: DetailScreenProps) => {
  const { id }: any = params;

  const { data, refetch } = useQuery(['perfumeDetail'], () => API.getDetailPerfume<number>(id), {
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  const goToHome = () => {
    goBack();
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <SafeAreaView style={{ height: 1210 }}>
        <View style={{ alignItems: 'center' }}>
          <ProductImage source={{ uri: data.perfume.image }} />
        </View>
        <ProductInfo>
          <View>
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
          <Pressable style={{ flexDirection: 'row' }}>
            <Ionicons color={'black'} name="checkmark-circle-outline" size={22} />
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
            {data.perfume.perfume_accords.map((i: any) => (
              <AccordImage key={i.id} source={{ uri: i.image }} />
            ))}
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
                {data.perfume.title}
              </Text>
              <Text style={{ width: '90%', marginBottom: 16, fontSize: 14, fontWeight: '400' }}>
                {data.perfume.subtitle}
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
              {data.perfume.perfume_notes.map((i: any) => (
                <View key={i.id}>
                  <NoteImage source={{ uri: i.note.image }} />
                  <Text
                    style={{ marginBottom: 5, fontSize: 12, fontWeight: '400', color: '#999999' }}
                  >
                    {i.type}
                  </Text>
                  <Text>{i.note.eng}</Text>
                </View>
              ))}
            </View>
          </View>
        </NoteInfo>
        <GoToHomeBtn onPress={goToHome} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default PerfumeDetail;
