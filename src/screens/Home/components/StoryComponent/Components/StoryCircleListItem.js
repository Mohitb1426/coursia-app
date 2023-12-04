import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { SvgUri } from 'react-native-svg';
import DEFAULT_AVATAR from './assets/images/no_avatar.png';
import { ColorThemeLight } from '../../../../../common/AppStyles';

function StoryCircleListItem(props) {
  const {
    item,
    unPressedBorderColor,
    pressedBorderColor,
    avatarSize,
    showText,
    textStyle,
    handleStoryItemPress,
  } = props;

  const handleItemPress = (items) => {
    if (handleStoryItemPress) handleStoryItemPress(items);
  };

  const size = avatarSize ?? 60;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={!item?.seen ? unPressedBorderColor : pressedBorderColor}
        style={[
          styles.avatarWrapper,
          {
            height: size + 4,
            width: size + 4,
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleItemPress(item)}
          style={styles.imageWrapper(size)}
        >
          <View style={styles.imageInnerContainer}>
            {item.cover_image.includes('.svg') ? (
              <View
                style={styles.svgCoverContainer(size)}
              >
                <SvgUri height={size} width={size} uri={item.cover_image} />
              </View>
            ) : (
              <Image
                style={styles.imageCoverContainer(size)}
                source={{ uri: item.cover_image }}
                defaultSource={Platform.OS === 'ios' ? DEFAULT_AVATAR : null}
              />
            )}
          </View>
        </TouchableOpacity>
      </LinearGradient>
      {showText && (
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{
            width: size + 4,
            ...styles.text,
            ...textStyle,
          }}
        >
          {item.level}
        </Text>
      )}
    </View>
  );
}

export default StoryCircleListItem;

StoryCircleListItem.propTypes = {
  item: PropTypes.any,
  unPressedBorderColor: PropTypes.any,
  pressedBorderColor: PropTypes.any,
  avatarSize: PropTypes.any,
  showText: PropTypes.any,
  textStyle: PropTypes.any,
  handleStoryItemPress: PropTypes.any,
};

const styles = StyleSheet.create({
  avatarWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    // padding: 2,
  },
  container: {
    marginBottom: 5,
    marginLeft: 11,
    marginTop: 15,
  },
  imageCoverContainer: (size) => {
    return {
      height: size - 4,
      width: size - 4,
      borderRadius: 8,
    };
  },
  imageInnerContainer: (size) => {
    return {
      height: size,
      width: size,
      backgroundColor: ColorThemeLight.PRIMARY_BACKGROUND,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  imageWrapper: (size) => {
    return {
      backgroundColor: '#E6EFEB',
      borderRadius: 8,
      // margin: 2,
      height: size,
      width: size,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  svgCoverContainer: (size) => {
    return {
      height: size - 4,
      width: size - 4,
      borderRadius: 8,
      backgroundColor: ColorThemeLight.PRIMARY_BACKGROUND,
      overflow: 'hidden',
    };
  },
  text: {
    alignItems: 'center',
    fontSize: 11,
    marginTop: 5,
    textAlign: 'center',
  },

});
