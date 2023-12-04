import React from 'react';
import {
  View, TextInput, TouchableOpacity, Text,
} from 'react-native';
import propTypes from 'prop-types';
import { Style } from './style';
import { vw } from '../../common/Dimensions';

function CustomTextInput(props) {
  const {
    label = '',
    hasError = '',
    container = {},
    returnKeyType = 'next',
    autoCapitalize = 'none',
    keyboardType = 'default',
    isOTP = false,
    inputTitle = '',
    onSubmitEditing = () => {},
    prefix = '',
    value = '',
    autoFocus = false,
    multiline = false,
    isInputVisible = false,
    onChangeText = () => {},

  } = props;

  const handleOnSubmitEditing = () => {
    if (onSubmitEditing) onSubmitEditing();
  };

  const handleChangeText = (val) => {
    onChangeText(val);
  };

  const errorStyle = hasError === '' ? {} : Style.errorStyle;
  return (
    <View>
      {isInputVisible && (
        <Text
          style={
            value
              ? [Style.inputTextHeading, { color: '#666666' }]
              : Style.inputTextHeading
          }
        >
          {inputTitle}
        </Text>
      )}

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {}}
        style={[Style.container, container, errorStyle]}
      >
        <View style={Style.textInputContainer}>
          <Text style={Style.prefixStyle}>{prefix}</Text>
          <TextInput
            multiline={multiline ?? false}
            placeholder={label}
            textContentType={isOTP ? 'oneTimeCode' : 'none'}
            // ref={ref}
            autoFocus={autoFocus}
            autoCapitalize={autoCapitalize}
            returnKeyType={returnKeyType || 'next'}
            value={value}
            onChangeText={handleChangeText}
            style={[
              Style.textInput,
              {
                width: vw(280),
                paddingRight: vw(25),
              },
            ]}
            keyboardType={keyboardType}
            onSubmitEditing={handleOnSubmitEditing}
            editable
            textAlign="left"
            placeholderTextColor="rgba(169,170,178,0.9)"
          />
        </View>
      </TouchableOpacity>

      {hasError !== '' ? (
        <Text style={Style.errorText}>{hasError}</Text>
      ) : null}
    </View>
  );
}

export default CustomTextInput;

CustomTextInput.propTypes = {
  label: propTypes.string,
  hasError: propTypes.string,
  container: propTypes.object,
  keyboardType: propTypes.any,
  returnKeyType: propTypes.any,
  autoCapitalize: propTypes.any,
  onSubmitEditing: propTypes.func,
  isOTP: propTypes.bool,
  inputTitle: propTypes.string,
  prefix: propTypes.string,
  value: propTypes.string,
  autoFocus: propTypes.bool,
  multiline: propTypes.bool,
  isInputVisible: propTypes.bool,
  onChangeText: propTypes.func,
};
