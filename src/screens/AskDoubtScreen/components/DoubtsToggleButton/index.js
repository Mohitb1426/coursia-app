import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import styles from './style';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function DoubtsToggleButton({ isActive, toggleState }) {
  const { translations } = useContext(LocalizationContext);
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity
        style={isActive ? Styles.buttonStyleOne : Styles.buttonStyleTwo}
        onPress={!isActive ? toggleState : null}
      >
        <Text
          style={[
            Styles.textStyle,
            isActive ? Styles.activeTextColor : Styles.inactiveTextColor,
          ]}
        >
          {translations.ALL_DOUBTS}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={!isActive ? Styles.buttonStyleOne : Styles.buttonStyleTwo}
        onPress={isActive ? toggleState : null}
      >
        <Text
          style={[
            Styles.textStyle,
            !isActive ? Styles.activeTextColor : Styles.inactiveTextColor,
          ]}
        >
          {translations.MY_DOUBTS}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

DoubtsToggleButton.propTypes = {
  isActive: propTypes.bool,
  toggleState: propTypes.func,
};
