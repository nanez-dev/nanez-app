import React from 'react';
import ProductAddButton from '../../components/@shared/Button/ProductAddButton/ProductAddButton';
import { View, StyleSheet } from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SearchInput from '../../components/@shared/SearchInput/SearchInput';

type SearchListScreenProps = NativeStackScreenProps<ParamListBase, 'SearchPage'>;
const SearchList = ({ navigation: { navigate } }: SearchListScreenProps) => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <ProductAddButton onPress={() => navigate('AddBrand')} />
    </View>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
