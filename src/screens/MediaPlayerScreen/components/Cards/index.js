/* eslint-disable no-unsafe-optional-chaining */
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './styles';
import { constants } from '../../constantsMediaPlayer';
import Images from '../../../../common/Images';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function Cards({ item, unit, playNextVideo }) {
  const Styles = useThemedStyles(styles);
  // console.log("this is the card data ", JSON.stringify(item, undefined, 2));
  const mediaPlayerState = useSelector((state) => state.reducerMediaPlayer);
  const {
    activeVideoData,
  } = mediaPlayerState;
  const { moduleId } = activeVideoData;
  const getTime = () => {
    let time = item?.content_length;
    if (!time) return;
    if (time?.length === 2) {
      const lastDigit = '00';
      time = time.concat('.', lastDigit);
    } else {
      // eslint-disable-next-line prefer-const
      let [firstDigit, lastDigit] = time === undefined ? [0.0] : time.split('.');
      if (lastDigit) {
        if (lastDigit.length === 1) {
          lastDigit = `0${lastDigit}`;
          time = firstDigit.concat('.', lastDigit);
        }
      }
    }
    // eslint-disable-next-line consistent-return
    return time;
  };

  return (
    <View>
      {item.module_type_name === constants.VIDEO && (
        <View>
          {item.id !== moduleId && (
            <View>
              {moduleId < item?.id && (
                <View
                  style={Styles.videoContainer}
                >
                  <TouchableOpacity
                    onPress={() => playNextVideo(item.id, item.unit_id, item?.batch_id)}
                    style={Styles.itemContainer}
                  >
                    <View style={Styles.imageMainContainer}>
                      <View style={Styles.imageSubContainer}>
                        <Image
                          source={Images.PLAY_GREEN_BUTTON}
                          style={Styles.imageContainer}
                        />
                      </View>
                      <View style={Styles.titleContainer}>
                        <Text numberOfLines={1} style={Styles.videoName}>
                          {item.title}
                        </Text>
                        <View
                          style={Styles.timeContainer}
                        >
                          <Text numberOfLines={1} style={Styles.videoChapter}>
                            {unit}
                          </Text>
                          <Text style={Styles.videoChapter}>
                            {getTime()}
                            {' '}
                            min
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
}

Cards.propTypes = {
  item: propTypes.any,
  unit: propTypes.any,
  playNextVideo: propTypes.any,
};
