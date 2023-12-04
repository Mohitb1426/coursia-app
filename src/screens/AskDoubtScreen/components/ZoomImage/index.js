import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import WebView from 'react-native-webview';
import { CustomModal } from '../../../../components';
import styles from './styles';
import { ColorTheme } from '../../../../common/AppStyles';
import { ShowImageContainer } from '../ShowImageContainer';
import StorageUtils from '../../../../common/StorageUtils';
import AsyncKeys from '../../../../common/AsyncKeys';

export function ZoomImage({ uri }) {
  const [open, setOpen] = useState(false);
  const [renderedOnce, setRenderedOnce] = useState(false);

  const updateSource = () => {
    setRenderedOnce(true);
  };

  const setZoomStatus = () => {
    setOpen(!open);
    StorageUtils.setUserPref(AsyncKeys.IS_ZOOM_IN, setOpen.toString());
  };

  if (!open) {
    return (
      <TouchableOpacity onPress={setZoomStatus}>
        <ShowImageContainer image={uri} />
      </TouchableOpacity>
    );
  }
  return (
    <CustomModal
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      visible={open}
      modalHeight="100%"
      backgroundColor={ColorTheme.transparent}
      closeDropDown={setZoomStatus}
    >
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <WebView
            source={renderedOnce ? { uri: uri?.uri } : undefined}
            style={styles.webStyle}
            allowFileAccess
            allowUniversalAccessFromFileURLs
            originWhitelist={['*']}
            onLoad={updateSource}
          />
        </View>
      </View>
    </CustomModal>
  );
}

ZoomImage.propTypes = {
  uri: propTypes.any,
};
