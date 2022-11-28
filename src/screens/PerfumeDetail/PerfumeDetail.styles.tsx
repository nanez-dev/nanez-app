import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import COLORS from '../../constants/colors';

const ProductImage = styled.Image`
  width: 350px;
  height: 350px;
` as unknown as typeof FastImage;

const ProductInfo = styled.View`
  background-color: white;
  padding: 24px 16px;
  border-bottom-color: #eee;
  border-bottom-width: 5px;
  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: space-between;
`;

const AccordInfo = styled.View`
  background-color: white;
  padding: 24px 16px;
`;

const AccordImage = styled.Image`
  width: 100px;
  height: 100px;
  border: 1px solid ${COLORS.BORDER_COLOR};
  border-radius: 8px;
` as unknown as typeof FastImage;

const NoteInfo = styled(AccordInfo)`
  margin-bottom: 10px;
`;

const NoteImage = styled(AccordImage)`
  margin-bottom: 10px;
`;

export { ProductImage, ProductInfo, AccordInfo, AccordImage, NoteInfo, NoteImage };
