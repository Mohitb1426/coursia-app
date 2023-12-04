import { Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function TimeCounter() {
  const Styles = useThemedStyles(styles);
  const mediaPlayerState = useSelector((state) => state.reducerMediaPlayer);
  const { activeVideoTime } = mediaPlayerState;
  const { currentMin, showDuration, currentSecond } = activeVideoTime;

  return (
    <Text style={Styles.time}>
      {`${currentMin}:${currentSecond}`}
      {' '}
      /
      {' '}
      {showDuration}
    </Text>
  );
}
