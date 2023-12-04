import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import styles from './styles';
import Images from '../../../../common/Images';

export function BookmarkCard({ item, onChangeVideoSeek }) {
  const getTime = (data) => {
    const minutes = Math.floor(data / 60);
    const seconds = data - minutes * 60;
    const secondString = String(seconds?.toFixed(0)).slice(0, 2);
    return `${String(minutes)?.padStart(2, '0')}:${String(
      secondString?.padStart(2, '0'),
    )}`;
  };
  return (
    <TouchableOpacity
      onPress={() => onChangeVideoSeek(item.time)}
      style={styles.itemContainer}
    >
      <View style={styles.image1_Container}>
        <Image
          source={{ uri: `file://${item.url}` }}
          style={styles.image1Style}
        />
      </View>
      <View style={styles.image2_mainContainer}>
        <View>
          <Image source={Images.TIME} style={styles.imageContainer} />
        </View>
        <View>
          <Text style={styles.image2_textStyle}>
            {' '}
            {getTime(item.time)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

BookmarkCard.propTypes = {
  item: propTypes.any,
  onChangeVideoSeek: propTypes.any,
};
