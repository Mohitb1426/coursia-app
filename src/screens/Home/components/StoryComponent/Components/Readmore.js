import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { ColorThemeLight } from '../../../../../common/AppStyles';
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function ReadMore({ onReadMore, title }) {
  return (
    <TouchableOpacity onPress={onReadMore} style={styles.readMoreWrapper}>
      <View style={styles.readMore}>
        {/* <Icon name="chevron-up" size={20} color="white" /> */}
      </View>
      <Text style={styles.readText}>{title || 'Read more'}</Text>
    </TouchableOpacity>
  );
}

ReadMore.propTypes = {
  onReadMore: PropTypes.any,
  title: PropTypes.string,
};

export default ReadMore;

const styles = StyleSheet.create({
  readMore: {
    alignItems: 'center',
    borderColor: ColorThemeLight.PRIMARY_BACKGROUND,
    borderRadius: 20,
    borderWidth: 2,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  readMoreWrapper: {
    alignItems: 'center',
    bottom: 25,
    justifyContent: 'space-between',
    position: 'absolute',
    width: '98%',
  },
  readText: {
    color: ColorThemeLight.PRIMARY_BACKGROUND,
    fontSize: 14,
    fontWeight: '500',
  },
});
