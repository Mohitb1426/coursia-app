import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import styles from './styles';

function CustomTouchable({ onPress, image, buttonText }) {
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={onPress ? () => onPress() : null}
    >
      <View style={styles.container}>
        <View style={styles.ImageContainer}>
          <Image source={image} style={styles.ImageStyle} />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>{buttonText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
CustomTouchable.propTypes = {
  image: propTypes.any,
  buttonText: propTypes.any,
  onPress: propTypes.any,

};
export default CustomTouchable;
