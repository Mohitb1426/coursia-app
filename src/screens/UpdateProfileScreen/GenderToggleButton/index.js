import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import ErrorHandler from '../../../common/ErrorHandler';
import styles from './style';
import SvgIcon from '../../../common/SvgIcon';
import { LocalizationContext } from '../../../common/LocalizationProvider';

export function GenderToggleButton({ isActive, toggleState }) {
  const { translations } = useContext(LocalizationContext);
  return (
    <ErrorHandler componentName="GenderToggleButton">
      <View style={styles.mainContainer}>
        <TouchableOpacity disabled={isActive} onPress={toggleState}>
          <View style={styles.singleItem}>
            <SvgIcon.MaleIcon />
            <Text style={styles.genderTextStyle}>{translations.UP_TEXT_MALE}</Text>
            {isActive ? <SvgIcon.RadioSelected /> : <SvgIcon.RadioUnselected />}
          </View>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity disabled={!isActive} onPress={toggleState}>
          <View style={styles.singleItem}>
            <SvgIcon.FemaleIcon />
            <Text style={styles.genderTextStyle}>{translations.UP_TEXT_FEMALE}</Text>
            {!isActive ? <SvgIcon.RadioSelected /> : <SvgIcon.RadioUnselected />}
          </View>
        </TouchableOpacity>
      </View>
    </ErrorHandler>
  );
}

GenderToggleButton.propTypes = {
  isActive: propTypes.bool,
  toggleState: propTypes.func,
};
