import styled from 'styled-components/native';
import COLORS from '../../../constants/colors';

const PerfumeImage = styled.Image`
  height: 120px;
  position: absolute;
  width: 120px;
  z-index: 1;
`;
const Card = styled.View`
  padding: 110px 12px 0;
  margin: 0 8px;
  width: 160px;
  height: 190px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.BORDER_COLOR};
  background-color: #fafafd;
`;
const Container = styled.TouchableOpacity`
  padding-top: 16px;
  align-items: center;
`;
const Brand = styled.Text`
  font-size: 11px;
  color: #666666;
  margin-bottom: 6px;
`;
const Name = styled.Text`
  color: #333333;
  font-size: 14px;
`;

export { PerfumeImage, Card, Container, Brand, Name };
