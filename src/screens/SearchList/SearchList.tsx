import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import SearchInput from '../../components/@shared/SearchInput/SearchInput';
import ProductAddButton from '../../components/@shared/Button/ProductAddButton/ProductAddButton';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const SearchList = () => {
  const navigation = useNavigation();
  const goToPerfumeRegister = () => {
    //@ts-ignore
    navigation.navigate('Perfume', {
      screen: 'addPerfumeBrand',
    });
  };
  return (
    <>
      <Container>
        <SafeAreaView>
          <SearchInput />
        </SafeAreaView>
      </Container>
      <ProductAddButton onPress={goToPerfumeRegister} />
    </>
  );
};

export default SearchList;

const Container = styled.View`
  flex: 1;
`;
