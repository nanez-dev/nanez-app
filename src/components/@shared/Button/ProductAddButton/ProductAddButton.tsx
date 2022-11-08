import React from 'react';
import { ProductButton, ButtonContent, Wrap } from './ProductAddButton.styles';

interface ProductAddButtonProps {
  onPress: () => void;
}

const ProductAddButton = ({ onPress }: ProductAddButtonProps) => {
  return (
    <Wrap>
      <ProductButton onPress={onPress}>
        <ButtonContent>제품 등록 요청</ButtonContent>
      </ProductButton>
    </Wrap>
  );
};

export default ProductAddButton;
