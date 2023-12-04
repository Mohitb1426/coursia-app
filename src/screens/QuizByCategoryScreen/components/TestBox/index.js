import {
  View, Text, TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import styles from './style';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import SvgIcon from '../../../../common/SvgIcon';

export function TestBox({
  subjectWise, title, onSelect, isSelected, showIcon,
}) {
  const { translations } = useContext(LocalizationContext);
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={isSelected ? styles.mainContainerSelected : styles.mainContainer}
    >
      <View style={styles.imageContainer}>
        {showIcon
          ? <SvgIcon.BookLogo />
          : <SvgIcon.GraduationHatLogo />}
      </View>
      <View style={isSelected ? styles.horizontalRuleSelected : styles.horizontalRule} />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.title}>{title}</Text>
        {subjectWise && <Text style={styles.subtitle}>{translations.TNSCERT}</Text>}
      </View>
    </TouchableOpacity>
  );
}

TestBox.propTypes = {
  subjectWise: propTypes.any,
  title: propTypes.any,
  isSelected: propTypes.bool,
  showIcon: propTypes.bool,
  onSelect: propTypes.func,
};
