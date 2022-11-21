import React, { useState } from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import { WebView } from 'react-native-webview';

const ServicePage = () => {
  const [visible, setVisible] = useState(true);

  const handleSpinner = () => {
    setVisible(false);
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://nanez.notion.site/Na-nez-3d1026fa415d44f2afb456bc24bbf6dc' }}
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

export default ServicePage;
