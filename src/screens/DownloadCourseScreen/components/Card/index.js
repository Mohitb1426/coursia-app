import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Images from '../../../../common/Images';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function Cards({ item, onPlayVideo, onRemove }) {
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.itemContainer}>
      <TouchableOpacity
        onPress={() => onPlayVideo(item.url, item)}
        style={Styles.mainTouchableStyle}
      >
        <View>
          <Image
            source={
                item.url.includes('not1mp4')
                  ? Images.DOWNLOAD_PLAY_ICON
                  : Images.DOWNLOAD_PDF_ICON
              }
            style={Styles.otherImageContainer}
            resizeMode="contain"
          />
        </View>

        <View style={Styles.titleContainer}>
          <Text numberOfLines={1} style={Styles.videoName}>
            {item.title?.substring(0, item.title.indexOf('+'))}
          </Text>
          <Text numberOfLines={1} style={Styles.videoChapter}>
            {item.unit}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemove}>
        <Image
          resizeMode="contain"
          source={Images.DOWNLOAD_CROSS_ICON}
          style={[Styles.imageContainer, Styles.marginRight20]}
        />
      </TouchableOpacity>
    </View>
  );
}

Cards.propTypes = {
  item: PropTypes.any,
  onPlayVideo: PropTypes.any,
  onRemove: PropTypes.func,
};

export default Cards;
