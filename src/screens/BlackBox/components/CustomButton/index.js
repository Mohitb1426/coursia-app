import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function CustomButton(props) {
  const {
    title, onPressButton, isDisable = false, isSuccessButton = true, borderButton = false,
  } = props;
  const Styles = useThemedStyles(styles);
  return (
    <TouchableOpacity
      disabled={isDisable}
      onPress={onPressButton}
      style={Styles.buttonContainer(isSuccessButton, borderButton)}
    >
      <Text style={Styles.buttonTextStyle(borderButton)}>{title}</Text>
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  title: PropTypes.string,
  onPressButton: PropTypes.func,
  isSuccessButton: PropTypes.bool,
  isDisable: PropTypes.bool,
  borderButton: PropTypes.bool,
};

export default CustomButton;
