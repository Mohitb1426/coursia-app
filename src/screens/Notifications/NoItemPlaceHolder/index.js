import { Text, View } from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import styles from './style';
import SvgIcon from '../../../common/SvgIcon';

function NoItemPlaceholder({ title }) {
  return (
    <View style={styles.placeHolderContainer}>
      <SvgIcon.PlaceholderImage />
      <Text style={styles.placeHolderText}>{title}</Text>
    </View>
  );
}

NoItemPlaceholder.propTypes = {
  title: propTypes.string,
};

export default NoItemPlaceholder;
