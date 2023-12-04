import React from 'react';
import {
  View, Image,
} from 'react-native';
import propTypes from 'prop-types';
import styles from './style';

export function ShowImageContainer({ image }) {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.imageContainer}
      />
    </View>
  );
}

ShowImageContainer.propTypes = {
  image: propTypes.any,
};
