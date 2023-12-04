import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import propTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import SvgIcon from '../../common/SvgIcon';
import { ThemeContext } from '../../common/ThemeProvider';
import { ColorTheme } from '../../common/AppStyles';
import useThemedStyles from '../../hooks/useThemedStyles';

function CustomHeader(props) {
  const { darkMode } = useContext(ThemeContext);
  const Styles = useThemedStyles(styles);
  const {
    goBack = () => { }, title = '', actionText = '', onClickActionText,
  } = props;
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.backIconStyle}
        onPress={goBack}
      >
        <SvgIcon.BackIcon color={darkMode ? ColorTheme.light01 : ColorTheme.black} />
      </TouchableOpacity>
      <Text style={Styles.titleStyle}>{title}</Text>
      <View style={Styles.spacer} />
      <TouchableOpacity style={Styles.backIconStyle} onPress={onClickActionText}>
        <Text style={Styles.actionTextStyle}>{actionText}</Text>
      </TouchableOpacity>
    </View>
  );
}

CustomHeader.propTypes = {
  goBack: propTypes.func,
  title: propTypes.string,
  actionText: propTypes.string,
  onClickActionText: propTypes.func,
};
export default CustomHeader;
