import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import RecommendBrand from '../../components/Brand/Brand';
import COLORS from '../../constants/colors';
import { useQuery } from '@tanstack/react-query';
import API from '../../apis/apis';
import FastImage from 'react-native-fast-image';
interface IBrand {
  image: string;
  kor: string;
  eng: string;
  id: number;
}

const BrandPage = () => {
  const { data } = useQuery(['brand'], API.getAllBrands);
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={{ borderBottomColor: COLORS.BORDER_COLOR, borderBottomWidth: 1 }}>
        <RecommendBrand title="지금 사랑받고 있는 브랜드" />
      </View>
      <FlatList
        data={data.brands}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }: { item: IBrand }) => (
          // TODO: memo를 이용하여서 렌더링 최적화 하기
          <View style={styles.gridContainer}>
            <View style={styles.flexWrapper}>
              <View style={styles.imageWrapper}>
                <FastImage
                  style={styles.image}
                  resizeMode={'contain'}
                  source={{ uri: item.image }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>{item.kor}</Text>
                <Text>{item.eng}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default BrandPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  gridContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_COLOR,
  },
  flexWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.BORDER_COLOR,
    borderRadius: 8,
    marginRight: 20,
  },
  image: {
    width: 50,
    height: 48,
  },
});
