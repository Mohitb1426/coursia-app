/* eslint-disable react/no-array-index-key */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import styles from './style';
import useThemedStyles from '../../hooks/useThemedStyles';

export function CustomTagList({ tags, customStyle = {} }) {
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.container}>
      {tags.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[Styles.tagsButtonStyle, customStyle]}
            disabled
          >
            <Text style={Styles.tagsButtonTextStyle}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

CustomTagList.propTypes = {
  tags: propTypes.any,
  customStyle: propTypes.object,
};
