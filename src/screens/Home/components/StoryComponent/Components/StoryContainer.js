import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { readStory } from '../../../actionHome';
import ProgressArray from './ProgressArray';
import ReadMore from './Readmore';
import StoryNew from './StoryNew';
import UserView from './UserView';
import { ColorThemeLight } from '../../../../../common/AppStyles';

const SCREEN_WIDTH = Dimensions.get('window').width;

function StoryContainer(props) {
  const dispatch = useDispatch();
  const {
    dataStories, onStoryNext, onStoryPrevious, onClose, isNewStory, textReadMore,
    postsId, startIndex,
  } = props;
  const { stories_post = [] } = dataStories || {};
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isModelOpen, setModel] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [duration, setDuration] = useState(3);
  const story = stories_post.length ? stories_post[currentIndex] : {};
  const { isReadMore } = story || {};

  // const onVideoLoaded = (length) => {
  //   props.onVideoLoaded(length.duration);
  // };
  // console.log('#############################_------>', startIndex);
  React.useEffect(() => {
    // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&_----------->', dataStories);
    setLoaded(true);
    setCurrentIndex(startIndex);
  }, [startIndex]);

  const changeStory = (evt) => {
    if (evt.locationX > SCREEN_WIDTH / 2) {
      nextStory();
    } else {
      prevStory();
    }
  };

  const nextStory = () => {
    if (stories_post.length - 1 > currentIndex) {
      postsId(stories_post[currentIndex]?.id);
      const post_data = {
        id: dataStories.id,
        posts: [stories_post[currentIndex]?.id],
      };
      dispatch(readStory(post_data));
      setCurrentIndex(currentIndex + 1);
      setLoaded(false);
      setDuration(3);
    } else {
      postsId(stories_post[currentIndex]?.id);
      const post_data = {
        id: dataStories.id,
        posts: [stories_post[currentIndex]?.id],
      };
      dispatch(readStory(post_data));
      setCurrentIndex(0);
      onStoryNext(false);
    }
  };

  const prevStory = () => {
    if (currentIndex > 0 && stories_post.length) {
      setCurrentIndex(currentIndex - 1);
      setLoaded(false);
      setDuration(3);
    } else {
      setCurrentIndex(0);
      onStoryPrevious(false);
    }
  };

  const onImageLoaded = () => {
    setLoaded(true);
  };

  const onVideoLoaded = (length) => {
    setLoaded(true);
    setDuration(length.duration);
  };

  const onPause = (result) => {
    setIsPause(result);
  };

  const onReadMoreOpen = () => {
    setIsPause(true);
    setModel(true);
  };
  // const onReadMoreClose = () => {
  //   setIsPause(false);
  //   setModel(false);
  // };

  const loading = () => {
    if (!isLoaded) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }
    return null;
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const onSwipeDown = () => {
    if (!isModelOpen) {
      onClose();
    } else {
      setModel(false);
    }
  };

  const onSwipeUp = () => {
    if (!isModelOpen && isReadMore) {
      setModel(true);
    }
  };

  return (
    <GestureRecognizer
      onSwipeDown={onSwipeDown}
      onSwipeUp={onSwipeUp}
      config={config}
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={1}
        delayLongPress={500}
        onPress={(e) => changeStory(e.nativeEvent)}
        onLongPress={() => onPause(true)}
        onPressOut={() => onPause(false)}
        style={styles.container}
      >
        <View style={styles.container}>
          <StoryNew
            onImageLoaded={onImageLoaded}
            pause={isPause}
            isNewStory={isNewStory}
            onVideoLoaded={onVideoLoaded}
            story={story}
          />

          {loading()}

          <UserView
            name={dataStories.level}
            profile={dataStories.cover_image}
            onClosePress={onClose}
          />

          {isReadMore && (
          <ReadMore title={textReadMore} onReadMore={onReadMoreOpen} />
          )}

          <ProgressArray
            next={nextStory}
            isLoaded={isLoaded}
            duration={duration}
            pause={isPause}
            isNewStory={isNewStory}
            stories={stories_post}
            currentIndex={currentIndex}
            currentStory={stories_post[currentIndex]}
            length={stories_post.map((_, i) => i)}
            progress={{ id: currentIndex }}
          />
        </View>
      </TouchableOpacity>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    // paddingTop: 30,
  },
  loading: {
    alignItems: 'center',
    backgroundColor: ColorThemeLight.TEXT_COLOR_HEADING,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
});

StoryContainer.propTypes = {
  dataStories: PropTypes.any,
  onStoryNext: PropTypes.any,
  onStoryPrevious: PropTypes.any,
  onClose: PropTypes.any,
  isNewStory: PropTypes.any,
  textReadMore: PropTypes.any,
  postsId: PropTypes.func,
  startIndex: PropTypes.number,
};

export default StoryContainer;
