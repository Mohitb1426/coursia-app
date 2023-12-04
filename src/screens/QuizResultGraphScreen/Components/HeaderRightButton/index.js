import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { BackButton } from '../../../../components';
import ButtonWithImage from '../../../../components/ButtonWithImage';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function HeaderRightButton({
  onBackPress,
  headerTitle,
  buttonImage,
  buttonTitle,
  onButtonPress,
}) {
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.mainHeader}>
      <BackButton onBackPress={onBackPress} />
      <View style={Styles.textContainer}>
        <Text style={Styles.headerText}>{headerTitle}</Text>
      </View>
      <ButtonWithImage
        onButtonPress={onButtonPress}
        buttonImage={buttonImage}
        buttonTitle={buttonTitle}
      />
    </View>
  );
}

HeaderRightButton.propTypes = {
  onBackPress: PropTypes.func,
  headerTitle: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonImage: PropTypes.any,
  onButtonPress: PropTypes.func,
};

export default HeaderRightButton;
