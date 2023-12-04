import React, { useContext } from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import propTypes from 'prop-types';
import styles from './style';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { CustomModal } from '../../../../components/CustomModal';
import Images from '../../../../common/Images';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function ImagePermissionModal({
  isVisible, onClose, onPressCapture, onPressUpload,
}) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return isVisible && (
    <CustomModal
      visible={isVisible}
      modalHeight={200}
      animationIn="slide"
      onModalHide={onClose}
      onBackdropPress={onClose}
    >
      <View style={Styles.mainContainer}>
        <Image source={Images.PULL_DOWN_BAR} style={Styles.pullDownBar} />
        <View style={Styles.container}>
          <Text style={Styles.chooseTextOneStyle}>{translations.CHOOSE_OPTION_TEXT_1}</Text>
          <Text style={Styles.chooseTextTwoStyle}>{translations.CHOOSE_OPTION_TEXT_2}</Text>
          <View style={Styles.subContainer}>
            <TouchableOpacity onPress={onPressUpload}>
              <View style={Styles.imageContainer}>
                <Image source={Images.UPLOAD_PICTURE} style={Styles.imageStyleOne} resizeMode="contain" />
              </View>
              <Text style={Styles.textStyle}>{translations.GALLERY}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressCapture}>
              <View style={Styles.imageContainer}>
                <Image source={Images.TAKE_PICTURE} style={Styles.imageStyleTwo} />
              </View>
              <Text style={Styles.textStyle}>{translations.CAMERA}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CustomModal>
  );
}

ImagePermissionModal.propTypes = {
  isVisible: propTypes.bool,
  onClose: propTypes.func,
  onPressCapture: propTypes.func,
  onPressUpload: propTypes.func,
};
