import { View, Text } from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function CheckBoxItem(props) {
  const {
    isChecked, onPressCheckBox, title, checkBoxIcon, count,
  } = props;
  const Styles = useThemedStyles(styles);

  return (
    <View style={Styles.container}>
      {checkBoxIcon}
      <View style={Styles.detailContainer}>
        <Text style={Styles.titleTextStyle}>
          {title}
        </Text>
      </View>
      <View style={Styles.checkBoxContainer}>
        <Text style={Styles.titleTextStyle}>{`${count} qns`}</Text>
        <CheckBox
          disabled={false}
          tintColors={{ true: '#2DA77D' }}
          style={Styles.checkBoxStyle}
          value={isChecked}
          onValueChange={onPressCheckBox}
        />
      </View>
    </View>
  );
}

CheckBoxItem.propTypes = {
  isChecked: PropTypes.bool,
  onPressCheckBox: PropTypes.func,
  title: PropTypes.string,
  checkBoxIcon: PropTypes.any,
  count: PropTypes.number,
};

export default CheckBoxItem;
