import React from 'react';
import { SafeAreaView } from 'react-native';
import propTypes from 'prop-types';
import WebView from 'react-native-webview';
import styles from './style';

function ImageWebView({ route }) {
  const { htmlText } = route.params;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <WebView source={{ html: htmlText }} style={styles.webStyle} />
    </SafeAreaView>
  );
}

ImageWebView.propTypes = {
  htmlText: propTypes.string,
  route: propTypes.any,
};

export default ImageWebView;
