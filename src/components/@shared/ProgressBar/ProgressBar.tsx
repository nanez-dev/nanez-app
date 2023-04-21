import React from 'react';
import { Dimensions, View } from 'react-native';

interface IProgressBar {
  step: number;
  totalStep: number;
}

const ProgressBar = ({ step, totalStep }: IProgressBar) => {
  const screenWidth = Dimensions.get('screen').width;
  const width = totalStep ? Math.round(screenWidth / totalStep) * step : 0;

  if (!totalStep) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: '#CCE0FF',
        height: 4,
        width: screenWidth,
      }}
    >
      <View
        style={{
          backgroundColor: '#0067ff',
          alignItems: 'center',
          justifyContent: 'center',
          height: 4,
          width,
        }}
      />
    </View>
  );
};

export default ProgressBar;
