/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import { Controller } from 'react-hook-form';
import propTypes from 'prop-types';
import { styles } from './styles';
import { vh } from '../../common/Dimensions';
import ErrorHandler from '../../common/ErrorHandler';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ColorTheme } from '../../common/AppStyles';

function FormTextInput({
  control,
  name = '',
  rules = {},
  placeholder,
  topText = '',
  multiline = false,
  onItemClick = {},
  icon,
  editable = true,
  preText = '',
  isNumeric = false,
  maxLength = 25,
}) {
  const Styles = useThemedStyles(styles);
  return (
    <ErrorHandler componentName="FormTextInput">
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
          const textHeadingStyle = value ? Styles.textColorHeading
            : Styles.backgroundQuaternaryEmphasis;
          const backgroundColorStyle = error ? Styles.errorRed : Styles.b;

          return (
            <>
              <View
                style={[
                  Styles.outerContainer,
                  backgroundColorStyle,
                  { height: multiline ? vh(150) : vh(70) },
                ]}
              >
                <Text style={Styles.topTextStyle}>{topText}</Text>
                <View style={{ flexDirection: 'row' }}>
                  {icon ? (
                    <TouchableOpacity
                      style={Styles.inputTextContainer}
                      onPress={() => {
                        onItemClick();
                      }}
                    >
                      <Text
                        style={[
                          Styles.inputText,
                          {
                            textHeadingStyle,
                          },
                        ]}
                      >
                        {' '}
                        {value || placeholder}
                        {' '}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={Styles.horizontalContainer}>
                      {preText ? <Text style={Styles.preTextStyle}>{preText}</Text> : null}
                      <TextInput
                        value={value}
                        disabledInputStyle={{ opacity: 1 }}
                        editable={editable}
                        maxLength={maxLength}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        placeholderTextColor={ColorTheme.placeholderColor}
                        multiline
                        style={Styles.input}
                        keyboardType={isNumeric ? 'numeric' : 'default'}
                      />
                    </View>
                  )}
                  {icon ? (
                    <TouchableOpacity
                      style={Styles.clickItemStyle}
                      onPress={() => {
                        onItemClick();
                      }}
                    >
                      {icon}
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
              {error && <Text style={Styles.errorText}>{error.message || 'Error'}</Text>}
            </>
          );
        }}
      />
    </ErrorHandler>
  );
}

FormTextInput.propTypes = {
  // navigation: propTypes.any,
  control: propTypes.any,
  name: propTypes.any,
  rules: propTypes.any,
  placeholder: propTypes.any,
  topText: propTypes.any,
  multiline: propTypes.any,
  onItemClick: propTypes.any,
  icon: propTypes.any,
  editable: propTypes.any,
  preText: propTypes.any,
  isNumeric: propTypes.any,
  maxLength: propTypes.any,
};

export default FormTextInput;
