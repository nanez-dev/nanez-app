import { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import API from '../../apis/apis';
import ProgressBar from '../../components/@shared/ProgressBar/ProgressBar';
import RegisterHeader from '../../components/@shared/RegisterHeader/RegisterHeader';
import { IAccord, IAccords } from '../AccordPage/AccordPage';

type OnboardingAccordScreenProps = NativeStackScreenProps<ParamListBase, 'OnboardingAccord'>;
const OnboardingAccord = ({ navigation: { navigate }, route }: OnboardingAccordScreenProps) => {
  const { data } = useQuery<IAccords>(['accord'], API.getAllAccords);
  const [isClick, setIsClick] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedAccord, setSelectedAccord] = useState('');

  useEffect(() => {
    if (isClick) {
      setIsClick(true);
    } else {
      setIsClick(false);
    }
  }, [isClick]);

  const goToNext = () => {
    navigate('OnboardingResult', {
      selectedId,
      selectedAccord,
      ...route.params,
    });
  };

  const handleAccordValue = (id: number, kor: string) => {
    setSelectedId(id);
    setSelectedAccord(kor);
    setIsClick(true);
  };

  return (
    <>
      <ProgressBar step={7} totalStep={8} />
      <Container>
        <RegisterHeader
          title={'마지막 질문!\n좋아하는 향 있어요?'}
          subtitle="가장 취향에 맞는 향을 한 가지만 선택해주세요."
        />
        <Grid
          showsHorizontalScrollIndicator={false}
          data={data?.accords}
          numColumns={5}
          keyExtractor={(item: IAccord) => item.id}
          columnWrapperStyle={{
            paddingVertical: 13,
          }}
          renderItem={({ item }: { item: IAccord }) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={handleAccordValue.bind(this, item.id, item.kor)}
              style={{ flex: 0.2, alignItems: 'center', opacity: item.id === selectedId ? 1 : 0.3 }}
            >
              <FastImage
                source={{ uri: item?.image }}
                style={{ width: 48, height: 48, marginBottom: 12 }}
              />
              <Text style={{ fontSize: 12 }}>{item.kor}</Text>
            </TouchableOpacity>
          )}
        />
        <NextButton isClick={isClick} onPress={isClick ? goToNext : null}>
          <ButtonText>골랐어요!</ButtonText>
        </NextButton>
      </Container>
    </>
  );
};

export default OnboardingAccord;

const Container = styled.View`
  padding: 0px 16px;
  padding-top: 44px;
  flex: 1;
  background-color: white;
`;

const Grid = styled.FlatList``;

const NextButton = styled.TouchableOpacity<{ isClick: boolean }>`
  background-color: ${(props) => (props.isClick ? '#65bfc4' : '#DBDBDB')};
  width: 100%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  margin-bottom: 50px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 700;
`;
