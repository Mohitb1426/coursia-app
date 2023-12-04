import { View, Text } from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import styles from './style';

export function TitleSubtitle({ title, subtitle }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>

      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text> }
    </View>
  );
}

TitleSubtitle.propTypes = {
  title: propTypes.any,
  subtitle: propTypes.any,
};
