import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import COLORS from '../../constants/colors';

const ServiceWrapper = styled.TouchableOpacity`
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.BORDER_COLOR};
` as unknown as typeof TouchableOpacity;

const Title = styled.Text`
  margin-left: 8px;
`;

export { ServiceWrapper, Title };
