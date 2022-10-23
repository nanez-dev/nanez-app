import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import COLORS from '../../constants/colors';

export const ServiceWrapper = styled.TouchableOpacity`
  justify-content: space-between;
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.BORDER_COLOR};
` as unknown as typeof TouchableOpacity;
