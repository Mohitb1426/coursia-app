import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import { ColorTheme, ColorThemeLight } from '../../common/AppStyles';
import { styles } from './style';
import ErrorHandler from '../../common/ErrorHandler';

function FormCustomButton({
  onPress, text, type = 'PRIMARY', disabled = false,
}) {
  return (
    <ErrorHandler componentName="FormCustomButton">
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          styles[`container_${type}`],
          !disabled
            ? { backgroundColor: ColorThemeLight.PRIMARY_COLOR }
            : { backgroundColor: ColorTheme.grey },
        ]}
      >
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            !disabled ? { color: ColorTheme.WHITE } : { color: ColorTheme.BLACK_1 },
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </ErrorHandler>
  );
}

FormCustomButton.propTypes = {
  onPress: propTypes.any,
  text: propTypes.any,
  type: propTypes.any,
  disabled: propTypes.any,
};

export default FormCustomButton;
