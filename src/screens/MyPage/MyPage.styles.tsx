import styled from 'styled-components/native';
import { StyleSheet, Image } from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
});
export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 16px;
` as unknown as typeof Image;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  margin-bottom: 16px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export const UserInfo = styled.View`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export const UserEmail = styled.Text`
  color: #666666;
  font-weight: 400;
  font-size: 14px;
`;

export const ListCollection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 30px;
  margin-top: 40px;
  padding-bottom: 24px;
  border-bottom-width: 7px;
  border-bottom-color: ${COLORS.BORDER_COLOR};
`;

export const ServiceCollection = styled.View`
  margin-top: 20px;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;

export const ServiceTitle = styled.Text`
  padding: 24px 16px;
  font-size: 20px;
  font-weight: 700;
`;
