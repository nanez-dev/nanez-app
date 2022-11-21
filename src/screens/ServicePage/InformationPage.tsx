import React, { useState } from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import { WebView } from 'react-native-webview';

const InformationPage = () => {
  const [visible, setVisible] = useState(true);

  const handleSpinner = () => {
    setVisible(false);
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://nanez.notion.site/Na-nez-ba8a5a47341a455ba26cbb3807be2585' }}
        onLoad={handleSpinner}
      />
      {visible && (
        <ActivityIndicator
          size="large"
          style={{ position: 'absolute', top: windowHeight / 3, left: windowWidth / 2 }}
        />
      )}
    </View>
  );
};

export default InformationPage;
