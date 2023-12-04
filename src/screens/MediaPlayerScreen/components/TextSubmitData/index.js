import { View, Text } from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './style';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function TextSubmitData({ item, onPress }) {
  const Styles = useThemedStyles(styles);
  const mediaPlayerState = useSelector((state) => state.reducerMediaPlayer);
  const {
    activeVideoData,
  } = mediaPlayerState;
  const { moduleId } = activeVideoData;
  const getTime = (data) => {
    const minutes = Math.floor(data / 60);
    const seconds = data - minutes * 60;
    const secondString = String(seconds?.toFixed(0)).slice(0, 2);
    return `${String(minutes)?.padStart(2, '0')}:${String(secondString?.padStart(2, '0'))}`;
  };

  return (

    <View>
      {
      // eslint-disable-next-line eqeqeq
      item?.parent?.module_id == moduleId
        && (
          <View style={Styles.mainContainer}>
            <View style={Styles.timestampData}>
              <Text style={Styles.time}>{getTime(item?.parent?.time)}</Text>
            </View>
            <View>
              <Text
                onPress={() => onPress(
                  item?.parent?.description,
                  Number(item?.parent?.id),
                  Number(item?.parent?.time),
                )}
                numberOfLines={1}
                style={Styles.notesData}
              >
                {item?.parent?.description}
              </Text>
            </View>
          </View>
        )
}
    </View>

  );
}

TextSubmitData.propTypes = {
  item: propTypes.any,
  onPress: propTypes.any,
};
