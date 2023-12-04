import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function Button({ navigateTo }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);

  return (
    <View style={Styles.buttonContainer}>
      <TouchableOpacity onPress={navigateTo} style={Styles.buttonStyle}>
        <Text style={Styles.buttonText}>{translations.VER_LET_GO}</Text>
      </TouchableOpacity>
    </View>
  );
}

Button.propTypes = {
  navigateTo: PropTypes.func,
};
