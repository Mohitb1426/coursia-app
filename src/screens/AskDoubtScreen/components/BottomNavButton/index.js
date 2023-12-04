import {
  View, Image, TouchableOpacity,
} from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import Images from '../../../../common/Images';
import styles from './style';

function BottomNav({ isVisible, onPress }) {
  return !isVisible && (
    <View style={styles.mainContainerStyle}>
      <TouchableOpacity
        style={styles.floatingMenuButtonStyle}
        onPress={onPress}
      >
        <Image
          source={Images.BOTTOM_NAV_ICON}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

BottomNav.propTypes = {
  isVisible: propTypes.bool,
  onPress: propTypes.func,
};

export default BottomNav;
