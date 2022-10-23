import React, { memo } from 'react';
import { FlatList } from 'react-native';
import { HListContainer, HListTitle } from './HList.styles';
import HProduct from '../HProduct/HProduct';
import { Seperator } from '../@shared/Seperator/Seperator.styles';

const HList = ({ title, data }: any) => {
  return (
    <HListContainer>
      <HListTitle>{title || ''}</HListTitle>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Seperator width="20px" />}
        contentContainerStyle={{ paddingHorizontal: 30 }}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          return <HProduct posterPath={item.image} />;
        }}
      />
    </HListContainer>
  );
};

export default memo(HList);
