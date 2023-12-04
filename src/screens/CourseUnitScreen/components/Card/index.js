import { View, Text } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import propTypes from 'prop-types';
import styles from './styles';
import { ColorTheme } from '../../../../common/AppStyles';

export function Card({ title }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[ColorTheme.BLUE_58, ColorTheme.BLUE_60]}
      style={styles.cardStyles}
    >
      <View style={styles.mainContainer}>
        <View style={styles.Card_Container}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
Card.propTypes = {
  title: propTypes.string,
};
