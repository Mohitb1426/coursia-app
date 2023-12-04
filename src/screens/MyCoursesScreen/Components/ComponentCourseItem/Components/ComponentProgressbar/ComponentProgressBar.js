import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import styles from './StyleComponentProgressBar';

function ComponentProgressBar({ percentage }) {
  const progress = percentage / 100;
  const styleRadius = percentage === 100 ? 20 : 0;
  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.progressView,
          {
            flex: progress,
            borderTopRightRadius: styleRadius,
            borderBottomRightRadius: styleRadius,
          },
        ]}
      />
    </View>
  );
}

ComponentProgressBar.propTypes = {
  percentage: propTypes.number,
};

export default ComponentProgressBar;
