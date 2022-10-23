import React from 'react';
import { SearchBox, SearchText, Wrap } from './SearchInput.styles';
import { Ionicons } from '@expo/vector-icons';

const SearchInput = () => {
  return (
    <Wrap>
      <SearchBox>
        <Ionicons name="md-search-outline" size={24} color="#666666" />
        <SearchText
          placeholder="지금 나에게 맞는 향수를 찾아보세요"
          placeholderTextColor={'#666666'}
        />
      </SearchBox>
    </Wrap>
  );
};

export default SearchInput;
