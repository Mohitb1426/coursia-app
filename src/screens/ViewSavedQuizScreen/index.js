import { View } from 'react-native';
import React, { useState } from 'react';
import propTypes from 'prop-types';
import WebView from 'react-native-webview';
import styles from './styles';

export function ViewSavedQuizScreen({ route }) {
  const { imageData } = route.params;
  const [renderedOnce, setRenderedOnce] = useState(false);

  const updateSource = () => {
    setRenderedOnce(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <WebView
          source={renderedOnce ? { uri: `file://${imageData}` } : undefined}
          style={styles.webStyle}
          allowFileAccess
          allowUniversalAccessFromFileURLs
          originWhitelist={['*']}
          onLoad={updateSource}
        />
      </View>
    </View>
  );
}

ViewSavedQuizScreen.propTypes = {
  route: propTypes.any,
};
