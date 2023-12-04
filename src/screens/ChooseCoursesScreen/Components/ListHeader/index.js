import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Images from '../../../../common/Images';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function ListHeader({ courseName, onPressView }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={Styles.courseContainer}>
      <View style={Styles.textContainerStyle}>
        <Text style={Styles.mainHeadingTextStyle}>{courseName}</Text>
      </View>
      <TouchableOpacity onPress={onPressView} style={Styles.viewTextContainer}>
        <Text style={Styles.viewAllTextStyle}>{translations.VIEW_ALL}</Text>
        <Image source={Images.RIGHT_ARROW} style={Styles.imageStyle} />
      </TouchableOpacity>
    </View>
  );
}

ListHeader.propTypes = {
  courseName: PropTypes.string,
  onPressView: PropTypes.func,
};

export default ListHeader;
