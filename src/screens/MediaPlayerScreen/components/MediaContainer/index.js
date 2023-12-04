import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  Dimensions,
  View,
  TouchableWithoutFeedback,
  Image,
  Animated,
  ActivityIndicator,
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Slider from '@react-native-community/slider';
import { useAppState } from '@react-native-community/hooks';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { debugLog } from '../../../../common/Logger';
import {
  setActiveVideoTime,
  setDurationTime,
  setIsFullScreen,
  setMoveVideo,
  setPauseVideo,
  setResumeVideoTime,
  setWatchedVideo,
} from '../../actionMediaPlayer';
import { ImageContainer } from '../ImageController';
import Images from '../../../../common/Images';
import { ColorTheme } from '../../../../common/AppStyles';
import { TimeCounter } from '../TimeCounter';

const { height, width } = Dimensions.get('screen');

function ImageContainerForBottom({
  image,
  onPress,
  isFullScreen,
  customStyle,
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);
  const animatedStyle = customStyle
    ? styles.heightFull
    : [
      {
        opacity: fadeAnim,
      },
    ];
  const buttonOnDullScreen = isFullScreen
    ? { width: width / 8 }
    : styles.buttonContainerFullScreen;

  const customImageStyle = customStyle
    ? styles.imageContainerButton
    : styles.imageContainer;

  return (
    <Animated.View
      style={animatedStyle}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={buttonOnDullScreen}
        >
          <Image
            source={image}
            style={customImageStyle}
          />
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}

const MediaContainer = forwardRef(({ url }, ref) => {
  const currentAppState = useAppState();
  const dispatch = useDispatch();
  const videoPlayer = useRef(null);
  // const [isFullScreen, setIsFullScreen] = useState(false);
  const [isControlVisible, setControlVisible] = useState(false);
  // const [paused, setPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const mediaPlayerState = useSelector((state) => state.reducerMediaPlayer);
  const {
    activeVideoTime, resumeData, paused, moveVideo, isFullScreen,
  } = mediaPlayerState;
  const {
    resumeTime,
  } = resumeData;
  const { progressTime, duration } = activeVideoTime;
  useImperativeHandle(ref, () => ({
    playAtBookMake(time) {
      videoPlayer.current.seek(parseFloat(time));
    },
    playVideo: () => {
      videoPlayer.current.setNativeProps({ paused: false });
      // setPaused(false);
      dispatch(setPauseVideo(false));
    },
    pauseVideo: () => {
      videoPlayer.current.setNativeProps({ paused: true });
      // setPaused(true);
      dispatch(setPauseVideo(true));
    },
  }));

  useEffect(() => {
    Orientation.lockToPortrait();
    dispatch(setIsFullScreen(false));
    dispatch(setWatchedVideo());
  }, [currentAppState]);

  const onFullScreen = () => {
    if (isFullScreen) {
      Orientation.lockToPortrait();
      setTimeout(() => {
        dispatch(setIsFullScreen(!isFullScreen));
      }, 500);
    } else {
      Orientation.lockToLandscape();
      setTimeout(() => {
        dispatch(setIsFullScreen(!isFullScreen));
      }, 500);
    }
  };
  const onPaused = () => {
    // setPaused(!paused);
    dispatch(setPauseVideo(!paused));
  };
  const onLoad = (data) => {
    const minutes = Math.floor(data.duration / 60);
    const seconds = data.duration - minutes * 60;
    const secondString = String(seconds?.toFixed(0)).slice(0, 2);
    const time = `${String(minutes)?.padStart(2, '0')}:${String(
      secondString,
    )?.padStart(2, '0')}`;
    const durationData = {
      duration: data.duration,
      showDuration: time,
    };
    dispatch(setDurationTime(durationData));
    setIsLoading(false);
  };
  const onLoadStart = () => {
    setIsLoading(true);
  };
  const onProgress = (data) => {
    // console.log('On progress');
    if (
      data.playableDuration !== 0
      && data.playableDuration < data.currentTime
    ) {
      setIsBuffering(true);
    } else {
      setIsBuffering(false);
    }
    if (!isLoading) {
      const minutes = Math.floor(data.currentTime / 60);
      const seconds = data.currentTime - minutes * 60;
      const secondString = String(seconds?.toFixed(0)).slice(0, 2);
      const videoData = {
        currentTime: data.currentTime,
        currentMin: String(minutes)?.padStart(2, '0'),
        currentSecond: String(secondString?.padStart(2, '0')),
      };
      dispatch(setActiveVideoTime(videoData));
    }
  };

  const updateProgressTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const secondString = String(seconds?.toFixed(0)).slice(0, 2);
    const videoData = {
      currentTime: time,
      currentMin: String(minutes)?.padStart(2, '0'),
      currentSecond: String(secondString?.padStart(2, '0')),
    };
    dispatch(setActiveVideoTime(videoData));
  };

  const changeSeek = (data) => {
    dispatch(setMoveVideo(true));
    setControlVisible(false);
    if (data === 'forward') {
      if (paused) {
        // console.log('forward hits');
        updateProgressTime(progressTime + 10);
      }
      return videoPlayer.current.seek(
        progressTime + 10,
      );
    }
    if (paused) {
      // console.log('backward hits');
      updateProgressTime(progressTime - 10);
    }
    return videoPlayer.current.seek(
      progressTime - 10,
    );
  };

  useEffect(() => {
    if (isControlVisible) {
      setTimeout(() => {
        setControlVisible(false);
      }, 6000);
    }
  }, [isControlVisible]);

  const mediaContainer = isFullScreen
    ? [styles.mainVideoContainer, { height }]
    : styles.mainVideoContainer;
  const videoOrientation = isFullScreen
    ? [
      styles.mainVideoContainer,
      styles.videoOrientationChange,
    ]
    : styles.mainVideoContainer;
  const insideMediaContainer = isFullScreen
    ? styles.fullScreenContainer
    : styles.bottomContainerStyle;

  const mediaSlider = isFullScreen
    ? styles.fullScreenSlider
    : styles.bottomContainerStyle;

  const mediaIndicator = isFullScreen
    ? [styles.controllerContainer, { height }]
    : styles.controllerContainer;

  const mediaContainerController = isFullScreen
    ? styles.controllerHeight
    : styles.controllerContainer;
  return (
    <View
      style={mediaContainer}
    >
      <View style={styles.mainContainerStyle}>
        <TouchableWithoutFeedback onPress={() => setControlVisible(true)}>
          <Video
            onLoad={onLoad}
            ref={videoPlayer}
            source={{ uri: url }}
            style={videoOrientation}
            resizeMode={isFullScreen ? 'contain' : 'cover'}
            paused={paused}
            onLoadStart={onLoadStart}
            onProgress={paused ? onProgress : onProgress}
            onReadyForDisplay={() => {
              if (resumeTime) {
                videoPlayer.current.seek(resumeTime);
                dispatch(setResumeVideoTime({
                  ...resumeData,
                  resumeTime: 0,
                }));
              }
              setIsBuffering(false);
            }}
            onError={(err) => {
              debugLog('error', err);
            }}
          />
        </TouchableWithoutFeedback>
      </View>
      {isControlVisible && (
      <View
        style={mediaContainerController}
      >
        <View style={styles.subController}>
          <View
            style={insideMediaContainer}
          >
            <View
              style={styles.insideController}
            >
              <ImageContainer
                onPress={() => changeSeek('back')}
                image={Images.MEDIA_BACK}
              />
              <ImageContainer
                onPress={onPaused}
                image={!paused ? Images.MEDIA_PAUSE : Images.MEDIA_PLAY}
              />
              <ImageContainer
                onPress={() => changeSeek('forward')}
                image={Images.MEDIA_FORWARD}
              />
            </View>
          </View>
          <View
            style={mediaSlider}
          >
            <View style={styles.bottomButtonContainer}>
              <ImageContainerForBottom
                onPress={onFullScreen}
                image={isFullScreen ? Images.EXIT_SCREEN : Images.MEDIA_FULL}
                isFullScreen={isFullScreen}
              />
            </View>
            <View style={styles.sliderStyle}>
              <Slider
                style={styles.sliderContainer}
                minimumValue={0}
                value={progressTime}
                maximumValue={duration}
                minimumTrackTintColor="#E8496E"
                maximumTrackTintColor="#E8496E"
                thumbTintColor="#ffff"
                onSlidingComplete={(value) => {
                  setControlVisible(false);
                  videoPlayer.current.seek(value);
                }}
                onValueChange={(value) => {
                  if (paused && !moveVideo) {
                    videoPlayer.current.seek(value);
                    updateProgressTime(value);
                  }
                }}
              />
              {isFullScreen ? <TimeCounter /> : null}
            </View>
          </View>
        </View>
      </View>
      )}

      {isBuffering && (
        <View
          style={mediaIndicator}
        >
          <View style={styles.subController}>
            <View style={styles.activeIndicatorStyle}>
              <ActivityIndicator visible color={ColorTheme.RACE_PINK} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
});

MediaContainer.propTypes = {
  url: propTypes.string,
};

ImageContainerForBottom.propTypes = {
  image: propTypes.any,
  onPress: propTypes.func,
  isFullScreen: propTypes.any,
  customStyle: propTypes.any,
};

export default MediaContainer;
