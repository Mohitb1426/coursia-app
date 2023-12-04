/* eslint-disable react/jsx-no-useless-fragment */
import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import styles from './styles';
import Images from '../../common/Images';

function ButtonWithImage({
  onButtonPress,
  buttonImage,
  buttonTitle,
  isButtonDisabled,
  isAnswerIntro,
}) {
  return (
    <>
      {isAnswerIntro ? (
        <Image
          source={Images.WHITE_BOOKMARK_IMAGE}
          style={styles.bookMarkImage}
          resizeMode="contain"
        />
      )
        : (
          <TouchableOpacity
            disabled={isButtonDisabled}
            onPress={onButtonPress}
            activeOpacity={0.7}
            style={styles.buttonContainer}
          >
            <Image source={buttonImage} style={styles.buttonImageStyle} />
            <Text style={styles.buttonTitleTextStyle}>{buttonTitle}</Text>
          </TouchableOpacity>
        )}
    </>
  );
}

ButtonWithImage.propTypes = {
  onButtonPress: propTypes.func,
  buttonTitle: propTypes.string,
  buttonImage: propTypes.node,
  isButtonDisabled: propTypes.bool,
  isAnswerIntro: propTypes.bool,
};
ButtonWithImage.defaultProps = {
  onButtonPress: () => {},
  buttonTitle: '',
  isButtonDisabled: false,

};

export default ButtonWithImage;
