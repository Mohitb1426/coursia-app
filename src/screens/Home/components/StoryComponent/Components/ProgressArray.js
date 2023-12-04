import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

function ProgressArray({
  next,
  pause,
  isLoaded,
  isNewStory,
  // duration,
  stories,
  // currentStory,
  currentIndex,
  // length,
  // progress,
}) {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (pause) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [pause]);

  return (
    <Animated.View style={[styles.progressBarArray, { opacity }]}>
      {stories.map((i, index) => (
        <ProgressBar
          index={index}
          key={i.id}
          duration={i.post_time || 3}
          isNewStory={isNewStory}
          currentIndex={currentIndex}
          next={next}
          length={stories.length}
          // eslint-disable-next-line no-nested-ternary
          active={index === currentIndex ? 1 : index < currentIndex ? 2 : 0}
          isLoaded={isLoaded}
          pause={pause}
        />
      ))}
    </Animated.View>
  );
}

ProgressArray.propTypes = {
  next: PropTypes.func,
  pause: PropTypes.bool,
  isLoaded: PropTypes.bool,
  isNewStory: PropTypes.bool,
  // duration: PropTypes.number,
  stories: PropTypes.array,
  // currentStory: PropTypes.object,
  currentIndex: PropTypes.number,
  length: PropTypes.array,
  // progress: PropTypes.object,
};

const styles = StyleSheet.create({
  progressBarArray: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 10,
    justifyContent: 'space-between',
    position: 'absolute',
    top: 30,
    width: '98%',
  },
});

export default ProgressArray;
