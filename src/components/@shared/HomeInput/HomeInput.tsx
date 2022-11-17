import React from 'react';
import { SearchBox, SearchText, Container } from './HomeInput.styles';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeInput = () => {
  const navigation = useNavigation();
  const goToSearch = () => {
    //@ts-ignore
    navigation.navigate('SearchList', {
      screen: 'SearchPage',
    });
  };
  return (
    <Container>
      <TouchableWithoutFeedback onPress={goToSearch}>
        <SearchBox>
          <Ionicons name="md-search-outline" size={24} color="#666666" />
          <SearchText>지금 나에게 맞는 향수를 찾아보세요</SearchText>
        </SearchBox>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default HomeInput;
