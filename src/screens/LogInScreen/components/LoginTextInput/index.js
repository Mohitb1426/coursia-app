import {
  View, TextInput, Text,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function LoginTextInput({
  ref,
  value,
  hasError = '',
  maxLength = 10,
  placeholderText = '',
  placeholderTextColor,
  onChangeText = () => { },
}) {
  const Styles = useThemedStyles(styles);
  const errorStyle = hasError === '' ? {} : Styles.errorStyle;
  return (
    <View>
      <View>
        <TextInput
          ref={ref}
          maxLength={maxLength}
          style={[Styles.textInputStyle, errorStyle]}
          keyboardType="number-pad"
          value={value}
          placeholder={placeholderText}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
          autoFocus
        />
      </View>

      {hasError !== '' ? (
        <Text style={Styles.errorText}>{hasError}</Text>
      ) : null}

    </View>
  );
}

LoginTextInput.propTypes = {
  ref: PropTypes.any,
  value: PropTypes.any,
  maxLength: PropTypes.any,
  placeholderText: PropTypes.string,
  hasError: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  onChangeText: PropTypes.func,
};
