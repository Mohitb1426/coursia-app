import React, { useEffect, useRef } from 'react';
import {
  Image, Text, Animated, TouchableWithoutFeedback, View,
} from 'react-native';
import propTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function ImageContainer({
  image, onPress, title, customStyle,
}) {
  const Styles = useThemedStyles(styles);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={customStyle ? Styles.containerStyle
        : [
          {
            opacity: fadeAnim,
          },
        ]}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={Styles.containerImage}>

          <Image
            source={image}
            style={customStyle ? Styles.customImageStyle : Styles.imageContainer}
          />
          {title && (
            <Text style={Styles.textStyle}>
              {' '}
              {title}
            </Text>
          )}
        </View>

      </TouchableWithoutFeedback>

    </Animated.View>
  );
}

ImageContainer.propTypes = {
  image: propTypes.any,
  onPress: propTypes.any,
  title: propTypes.any,
  customStyle: propTypes.any,
};
