import { View, Text, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import propTypes from 'prop-types';
import styles from './styles';
import Images from '../../../../common/Images';
import { ColorTheme } from '../../../../common/AppStyles';

export function Card({ title }) {
  return (
    <LinearGradient
      start={{ x: 1, y: 1 }}
      locations={[0.5, 1]}
      end={{ x: 0.5, y: 0.6 }}
      colors={[ColorTheme.RACE_PINK, ColorTheme.DARK_RED]}
      style={styles.cardStyles}
    >
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>{title}</Text>
          <Image source={Images.TIMER_IMAGE} style={styles.timerImage} />
        </View>
      </View>
    </LinearGradient>
  );
}

Card.propTypes = {
  title: propTypes.string,
};
