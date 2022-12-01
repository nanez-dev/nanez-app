import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import API from '../../../apis/apis';
import { FlatList, Text, View, TextInput } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './SearchInput.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      throw new Error(`Search fail error and error message: ${error}`);
    },
  });

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.flexWrapper}>
          <View style={styles.searchBox}>
            <Ionicons
              name="md-search-outline"
              size={24}
              color="#666666"
              onPress={() => refetch()}
            />
            <TextInput
              style={styles.searchTextInput}
              value={value}
              onSubmitEditing={handleSearchSubmitValue}
              onChangeText={handleSearchValue}
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={false}
              placeholder="지금 나에게 맞는 향수를 찾아보세요"
              placeholderTextColor="#999999"
            />
          </View>
          {!isSearch && (
            <>
              <FastImage
                source={require('../../../assets/images/search_banner_1.png')}
                style={styles.bigBanner}
              />
              <View style={styles.bannerWrapper}>
                <FastImage
                  source={require('../../../assets/images/search_banner_2.png')}
                  style={styles.smallBannerLeft}
                />
                <FastImage
                  source={require('../../../assets/images/search_banner_3.png')}
                  style={styles.smallBannerRight}
                />
              </View>
            </>
          )}
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.perfumes}
          renderItem={({ item }) => (
            <>
              <View style={styles.searchResultContainer}>
                <FastImage source={{ uri: item.web_image1 }} style={styles.searchThumbnail} />
                <View>
                  <Text style={styles.searchBrand}>{item.brand.kor}</Text>
                  <Text style={styles.searchPerfumeEng}>{item.eng}</Text>
                  <Text style={styles.searchPerfumeKor}>{item.kor}</Text>
                </View>
              </View>
              <View style={styles.searchUnderline} />
            </>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default SearchInput;
