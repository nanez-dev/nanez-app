import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import COLORS from '../../constants/colors';

const Container = styled.ScrollView`
  background-color: white;
`;

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 16px;
` as unknown as typeof FastImage;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  margin-bottom: 16px;
`;

const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const UserInfo = styled.View`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const UserName = styled(HeaderTitle)``;

const UserEmail = styled.Text`
  color: #666666;
  font-weight: 400;
  font-size: 14px;
`;

const ListCollection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 30px;
  margin-top: 40px;
  padding-bottom: 24px;
  border-bottom-width: 7px;
  border-bottom-color: ${COLORS.BORDER_COLOR};
`;

const ServiceCollection = styled.View`
  margin-top: 20px;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;

const ServiceTitle = styled(HeaderTitle)`
  padding: 24px 16px;
`;

export {
  ProfileImage,
  Container,
  Header,
  HeaderTitle,
  UserInfo,
  UserName,
  UserEmail,
  ListCollection,
  ServiceCollection,
  ServiceTitle,
};
