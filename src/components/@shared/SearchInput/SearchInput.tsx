import React, { useState } from 'react';
import { SearchBox, SearchTextInput, Container } from './SearchInput.styles';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import API from '../../../apis/apis';
import { FlatList, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import FlexBox from '../FlexBox/FlexBox';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const [submitValue, setSubmitValue] = useState('');
  const [data, setData] = useState<any>();
  const [isSearch, setIsSearch] = useState(false);

  const handleSearchValue = (text: string) => {
    setValue(text);
  };

  const handleSearchSubmitValue = () => {
    setSubmitValue(value);
  };

  const { refetch } = useQuery(['searchPerfume'], () => API.getPerfume(submitValue), {
    onSuccess: (item: any) => {
      setData(item);
      setIsSearch(true);
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  return (
    <Container>
      <FlexBox alignItems="center">
        <SearchBox>
          <Ionicons name="md-search-outline" size={24} color="#666666" onPress={() => refetch()} />
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
        {!isSearch ? (
          <>
            <FastImage
              source={require('../../../assets/images/search_banner_1.png')}
              style={{ width: 350, height: 120 }}
            />
            <View style={{ flexDirection: 'row', marginTop: 12 }}>
              <FastImage
                source={require('../../../assets/images/search_banner_2.png')}
                style={{ width: 168, height: 120, marginRight: 14 }}
              />
              <FastImage
                source={require('../../../assets/images/search_banner_3.png')}
                style={{ width: 168, height: 120 }}
              />
            </View>
          </>
        ) : null}
      </FlexBox>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data?.perfumes}
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
