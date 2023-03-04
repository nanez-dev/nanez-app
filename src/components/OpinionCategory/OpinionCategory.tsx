import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface IOpinionCategory {
  name: string;
  onCategoryValueClick: (name: string) => void;
}

const OpinionCategory = React.memo(({ name, onCategoryValueClick }: IOpinionCategory) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onCategoryValueClick.bind(this, name)}
      style={{
        width: '100%',
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 15 }}>{name}</Text>
    </TouchableOpacity>
  );
});

export default OpinionCategory;
