import {
  View, Text, TouchableOpacity,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import SvgIcon from '../../../../common/SvgIcon';

function HeaderSection({ onPress, remainingTime }) {
  function secondsToTime(secs) {
    const hours = Math.floor(secs / (60 * 60));
    const divisor_for_minutes = secs % (60 * 60);
    const minutes = Math.floor(divisor_for_minutes / 60);

    const divisor_for_seconds = divisor_for_minutes % 60;
    const seconds = Math.ceil(divisor_for_seconds);

    return (
      <View style={styles.timeContainer}>
        <Text style={styles.timerText}>
          {`${String(hours)?.padStart(
            2,
            '0',
          )}:${String(minutes)?.padStart(2, '0')}:${String(seconds)?.padStart(
            2,
            '0',
          )}`}

        </Text>
      </View>
    );
  }
  return (
    <View style={styles.mainHeader}>
      <View style={styles.timerContainer}>
        {/* <Image source={Images.CLOCK} style={styles.clockImage} /> */}
        <SvgIcon.ClockYIcons />
        {secondsToTime(remainingTime)}
      </View>
      <TouchableOpacity onPress={onPress}>
        {/* <Image
          source={Images.QUIZ_QUESTION_MENUBAR}
          style={styles.hamburgerImage}
        /> */}
        <SvgIcon.QuizMenuIcon />
      </TouchableOpacity>
    </View>
  );
}

HeaderSection.propTypes = {
  onPress: PropTypes.func,
  remainingTime: PropTypes.any,
};

export default HeaderSection;
