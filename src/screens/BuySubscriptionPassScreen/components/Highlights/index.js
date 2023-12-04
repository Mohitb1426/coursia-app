import { View, Text, Image } from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import Images from '../../../../common/Images';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function Highlights({ title }) {
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.mainContainer}>
      <Image source={Images.EGREEN} />
      <Text style={Styles.titleText}>{title}</Text>
    </View>
  );
}

Highlights.propTypes = {
  title: propTypes.any,
};

export default Highlights;
