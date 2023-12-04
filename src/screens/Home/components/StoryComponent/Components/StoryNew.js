/* eslint-disable no-nested-ternary */
import {
  Dimensions, Image, StyleSheet, View,
} from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Video from 'react-native-video';
import { SvgCssUri } from 'react-native-svg';
import { ColorThemeLight } from '../../../../../common/AppStyles';

const ScreenWidth = Dimensions.get('window').width;

function StoryNew({
  story,
  onVideoLoaded,
  onImageLoaded,
  pause,
  isNewStory,
}) {
  const { post_file, is_video, file_ext } = story || {};
  const [isPortation, setIsPortation] = useState(false);
  const [heightScaled, setHeightScaled] = useState(231);

  return (
    <View style={styles.container}>
      {is_video === false
        ? file_ext.toUpperCase() === 'SVG'
          ? (
            <SvgCssUri
              height="100%"
              width="100%"
              uri={post_file}
              onLoad={onImageLoaded}
            />
          )
          : (
            <Image
              source={{ uri: post_file }}
              onLoadEnd={onImageLoaded}
              style={styles.content}
              resizeMode="contain"
            />
          )
        : (
          <Video
            source={{ uri: post_file }}
            paused={pause || isNewStory}
            onLoad={(item) => {
              const { width, height } = item.naturalSize;
              const heightScale = height * (ScreenWidth / width);
              setIsPortation(height > width);
              setHeightScaled(heightScale);
              onVideoLoaded(item);
            }}
            bufferConfig={{
              minBufferMs: 500,
              maxBufferMs: 1500,
              bufferForPlaybackMs: 500,
              bufferForPlaybackAfterRebufferMs: 1000,
            }}
            style={
            isPortation
              ? [styles.contentVideoPortation, { height: heightScaled }]
              : [styles.contentVideo, { height: heightScaled }]
          }
            resizeMode="stretch"
          />
        )}
    </View>
  );
}

StoryNew.propTypes = {
  story: PropTypes.array,
  onVideoLoaded: PropTypes.func,
  onImageLoaded: PropTypes.func,
  pause: PropTypes.bool,
  // isLoaded: PropTypes.bool,
  isNewStory: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: ColorThemeLight.TEXT_COLOR_HEADING,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  content: { flex: 1, height: '100%', width: '100%' },
  contentVideo: {
    // aspectRatio: 1,
    backgroundColor: ColorThemeLight.TEXT_COLOR_HEADING,
    // flex: 1,
    height: 231,
    width: ScreenWidth + 20,
  },
  contentVideoPortation: {
    // aspectRatio: 1,
    backgroundColor: ColorThemeLight.TEXT_COLOR_HEADING,
    // flex: 1,
    height: 231,
    width: ScreenWidth + 20,
  },
});

export default StoryNew;
