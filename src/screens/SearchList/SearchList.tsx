import React from 'react';

import ProductAddButton from '../../components/@shared/Button/ProductAddButton/ProductAddButton';
import styled from 'styled-components/native';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SearchInput from '../../components/@shared/SearchInput/SearchInput';

type SearchListScreenProps = NativeStackScreenProps<ParamListBase, 'SearchPage'>;
const SearchList = ({ navigation: { navigate } }: SearchListScreenProps) => {
  return (
    <Container>
      <SearchInput />
      <ProductAddButton onPress={() => navigate('AddBrand')} />
    </Container>
  );
};

export default SearchList;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
