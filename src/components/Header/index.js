import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import styles from './styles';
import { backArrow } from '../../assets/images/ImagesData';
import { ColorTheme } from '../../common/AppStyles';

export function Header({
  hideBackButton = false,
  imageSource = null,
  goBack = () => {},
  customStyle = {},
  centerText = '',
  rightText = '',

}) {
  const renderLeftContainer = () => (
    <View style={styles.backArrow}>
      <TouchableHighlight
        onPress={goBack}
        underlayColor={ColorTheme.TRANSPARENT}
      >
        {!imageSource ? (
          <Image
            style={styles.backImage}
            source={backArrow}
          />
        )
          : (
            <Image
              style={styles.backImage}
              source={imageSource}
            />
          )}

      </TouchableHighlight>
    </View>
  );

  const renderCenterContainer = () => (
    <TouchableHighlight
      underlayColor="none"
      style={styles.subContainer}
    >
      <Text numberOfLines={1} style={[styles.centerText, customStyle]}>{centerText}</Text>
    </TouchableHighlight>
  );

  const renderRightContainer = () => (
    <View style={styles.rightView}>
      <TouchableHighlight
        underlayColor="none"
      >
        <Text numberOfLines={1} style={styles.rightText}>{rightText}</Text>
      </TouchableHighlight>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        {!hideBackButton ? renderLeftContainer() : <View style={styles.subContainer} />}
        {centerText ? renderCenterContainer() : <View style={styles.subContainer} />}
        {rightText ? renderRightContainer() : <View style={styles.subContainer} />}

      </View>
    </View>
  );
}
Header.propTypes = {
  goBack: propTypes.func,
  centerText: propTypes.string,
  hideBackButton: propTypes.bool,
  imageSource: propTypes.any,
  customStyle: propTypes.object,
  rightText: propTypes.string,

};
