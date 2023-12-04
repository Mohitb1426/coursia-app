import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import propTypes from 'prop-types';
import { BlurView } from '@react-native-community/blur';
import Images from '../../common/Images';
import styles from './style';
import CustomButton from '../CustomButton';
import { ColorTheme } from '../../common/AppStyles';
import FontTheme from '../../common/Fonts';

export function CustomLockScreen({
  isVisible,
  firstText,
  secondText,
  buttonText,
  onButtonPress,
  onClose,
  customStyle = {},
}) {
  // setTimeout(() => {
  //   console.log('hello');
  //   onClose();
  // }, 4000);
  return (
    <Modal
      isVisible={isVisible}
      animationType="slide"
      style={styles.modalStyle}
      onModalHide={() => onClose()}
      transparent
    >

      <View style={styles.mainContainer}>
        <View style={styles.headerView}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.backButton}
            onPress={() => onClose()}
          >
            <Image
              source={Images.BACK_BUTTON}
              style={styles.header_backButton}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={3}
            blurRadius={5}
          />
          <View style={styles.imageSubContainer}>
            <Image source={Images.COMMON_LOCK_IMAGE} style={styles.lockImageStyle} />
          </View>
        </View>
        <View style={[styles.subContainer, customStyle]}>
          <Image source={Images.PULL_DOWN_BAR} style={styles.pullDownBar} />
          <Text style={styles.textStyle}>{firstText}</Text>
          <Text style={styles.secondTextStyle}>{secondText}</Text>
          <CustomButton
            onButtonPress={onButtonPress}
            buttonText={buttonText}
            customStyle={styles.customStyle}
            buttonColor={ColorTheme.GREEN_BG}
            textColor={ColorTheme.WHITE}
            fontFamily={FontTheme.INTER_BOLD}
          />
        </View>
      </View>
    </Modal>
  );
}

CustomLockScreen.propTypes = {
  isVisible: propTypes.bool,
  firstText: propTypes.string,
  secondText: propTypes.string,
  buttonText: propTypes.string,
  onButtonPress: propTypes.func,
  onClose: propTypes.func,
  customStyle: propTypes.object,
};
