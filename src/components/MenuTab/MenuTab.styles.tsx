import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  tabName: {
    marginTop: 10,
  },
});

import styled from 'styled-components/native';

const IconImg = styled.Image`
  width: 24px;
  height: 24px;
`;

const TabName = styled.Text`
  margin-top: 10px;
`;

export { IconImg, TabName };
