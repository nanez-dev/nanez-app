import React from 'react';
import { ImageSourcePropType } from 'react-native';
import FlexBox from '../@shared/FlexBox/FlexBox';
import { IconImg, TabName } from './MenuTab.styles';

interface IMenuTabProps {
  source: ImageSourcePropType;
  title: string;
}

const MenuTab = ({ source, title }: IMenuTabProps) => {
  return (
    <FlexBox alignItems="center">
      <IconImg source={source} />
      <TabName>{title}</TabName>
    </FlexBox>
  );
};

export default MenuTab;
