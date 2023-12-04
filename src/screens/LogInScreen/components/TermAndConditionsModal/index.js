import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import propTypes from 'prop-types';
import styles from './styles';
import Images from '../../../../common/Images';
import { CustomModal } from '../../../../components';

function TermAndConditionsModal({
  isVisible, onWebLoad, url, onCloseImage,
}) {
  return (
    <CustomModal visible={isVisible}>
      <View style={styles.TermsSectionMainContainer}>
        <TouchableOpacity
          onPress={onCloseImage}
          style={styles.TermsSectionButton}
        >
          <Image
            style={styles.TermsSectionImage}
            source={Images.CLOSE}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <WebView
          onLoad={onWebLoad}
          style={styles.TermsSectionWebView}
          source={{ uri: url }}
        />
      </View>
    </CustomModal>
  );
}

export default TermAndConditionsModal;

TermAndConditionsModal.propTypes = {
  isVisible: propTypes.bool,
  onWebLoad: propTypes.any,
  url: propTypes.any,
  onCloseImage: propTypes.any,
};
