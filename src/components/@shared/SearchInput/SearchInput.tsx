import React, { useState } from 'react';
import { SearchBox, SearchTextInput, Container } from './SearchInput.styles';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import API from '../../../apis/apis';
import { FlatList, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import FlexBox from '../FlexBox/FlexBox';

// interface IData {
//   brandKor: string;
//   kor: string;
//   eng: string;
//   image: string;
// }

const SearchInput = () => {
  const [value, setValue] = useState('');
  const [submitValue, setSubmitValue] = useState('');
  const [data, setData] = useState({
    brandKor: '',
    kor: '',
    eng: '',
    image: '',
  });

  const handleSearchValue = (text: string) => {
    setValue(text);
  };

  const handleSearchSubmitValue = () => {
    setSubmitValue(value);
  };

  useQuery(['searchPerfume'], () => API.getPerfume({ submitValue }), {
    onSuccess: (item: any) => {
      console.log(item);
      // setData({
      //   brandKor: item.perfumes[0].brand.kor,
      //   kor: item.perfumes[0].kor,
      //   eng: item.perfumes[0].eng,
      //   image: item.perfumes[0].web_image1,
      // });
      console.log('success');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  // console.log(data.perfumes[0].brand.eng);
  // console.log(data.perfumes[0].brand.kor);
  // console.log(data.perfumes[0].brand.image);
  // console.log(data.perfumes[0].eng);
  // console.log(data.perfumes[0].kor);

  // console.log(data.perfumes[0].web_image1);
  // console.log(data.perfumes[0].web_image2);

  return (
    <Container>
      <FlexBox alignItems="center">
        <SearchBox>
          <Ionicons name="md-search-outline" size={24} color="#666666" />
          <SearchTextInput
            value={value}
            onSubmitEditing={handleSearchSubmitValue}
            onChangeText={handleSearchValue}
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={false}
            placeholder="지금 나에게 맞는 향수를 찾아보세요"
            placeholderTextColor="#999999"
          />
        </SearchBox>
      </FlexBox>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.perfumes}
        renderItem={({ item }) => (
          <>
            <View style={{ flexDirection: 'row', padding: 22 }}>
              <FastImage
                source={{ uri: item.web_image1 }}
                style={{ width: 52, height: 52, marginRight: 24 }}
              />
              <View>
                <Text
                  style={{ color: '#666666', fontSize: 11, fontWeight: '400', marginBottom: 4 }}
                >
                  {item.brand.kor}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.eng}</Text>
                <Text style={{ fontSize: 14, fontWeight: '400', color: '#333333' }}>
                  {item.kor}
                </Text>
              </View>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#efefef' }} />
          </>
        )}
      />
    </Container>
  );
};

export default SearchInput;
