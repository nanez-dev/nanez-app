import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './ProductAddButton.styles';

interface ProductAddButtonProps {
  onPress: () => void;
}

const ProductAddButton = ({ onPress }: ProductAddButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addProductButton} onPress={onPress}>
        <Text style={styles.addProductCotent}>제품 등록 요청</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductAddButton;
