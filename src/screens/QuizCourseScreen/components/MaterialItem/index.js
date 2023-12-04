import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function MaterialItem({
  title, courseTitle, totalItems, navigateTo, image,
}) {
  const Styles = useThemedStyles(styles);
  return (
    <TouchableOpacity style={Styles.mainContainer} onPress={navigateTo}>
      <View style={Styles.imageContainer}>
        <Image source={image} style={Styles.imageStyle} />
      </View>
      <View style={Styles.textContainer}>
        <Text style={Styles.titleText}>{title}</Text>
        <Text style={Styles.subTitleText}>{courseTitle}</Text>
        {totalItems && <Text style={Styles.totalFilesText}>{totalItems}</Text>}
      </View>
    </TouchableOpacity>
  );
}

MaterialItem.propTypes = {
  title: PropTypes.string,
  courseTitle: PropTypes.string,
  totalItems: PropTypes.any,
  navigateTo: PropTypes.func,
  image: PropTypes.any,
};
