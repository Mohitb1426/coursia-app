import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import SvgIcon from '../../../../common/SvgIcon';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function ToggleButton({
  isActive, toggleState, firstTitle, secondTitle, is_icon,
}) {
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity
        style={Styles.buttonStyle(isActive, is_icon)}
        disabled={isActive}
        onPress={toggleState}
      >
        {is_icon
          ? (
            <>
              <SvgIcon.LightSun />
              {isActive && (
              <Text style={Styles.textStyle(isActive)}>
                {firstTitle}
              </Text>
              )}
            </>
          )
          : (
            <Text style={Styles.textStyle(isActive)}>
              {firstTitle}
            </Text>
          )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!isActive}
        style={Styles.buttonStyle(!isActive, is_icon)}
        onPress={toggleState}
      >
        {is_icon
          ? (
            <>
              {isActive ? <SvgIcon.DarkMoon /> : <SvgIcon.LightMoon /> }
              {!isActive && (
              <Text style={Styles.textStyle(!isActive)}>
                {secondTitle}
              </Text>
              )}
            </>
          )
          : (
            <Text style={Styles.textStyle(!isActive)}>
              {secondTitle}
            </Text>
          )}
      </TouchableOpacity>
    </View>
  );
}

ToggleButton.propTypes = {
  isActive: PropTypes.bool,
  toggleState: PropTypes.func,
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  is_icon: PropTypes.bool,
};

export default ToggleButton;
