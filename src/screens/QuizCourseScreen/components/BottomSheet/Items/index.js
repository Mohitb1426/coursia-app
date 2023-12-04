import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles';
import SvgIcon from '../../../../../common/SvgIcon';
import useThemedStyles from '../../../../../hooks/useThemedStyles';

function Items({ isSelected, title, onSelect }) {
  const Styles = useThemedStyles(styles);
  const testStyle = isSelected ? Styles.flatListGreenText : Styles.flatListText;
  const mainContainerStyle = isSelected ? Styles.flatListGreenItems : Styles.flatListItems;
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={mainContainerStyle}
    >
      <Text style={testStyle} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      {isSelected && <SvgIcon.BottomSheetSelectedIcon style={Styles.imageStyle} />}
    </TouchableOpacity>
  );
}
Items.propTypes = {
  title: PropTypes.any,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};
export default Items;
