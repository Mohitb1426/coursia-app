/* eslint-disable no-nested-ternary */
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import styles from './style';
import SvgIcon from '../../common/SvgIcon';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';
import { ColorTheme } from '../../common/AppStyles';

export function ComponentHeader({
  goBack = () => {},
  headerText = '',
  customStyle = {},
}) {
  const Styles = useThemedStyles(styles);
  const theme = useContext(ThemeContext);
  const isDarkMode = theme.darkMode;
  return (
    <View style={[Styles.container, customStyle]}>
      <View style={Styles.headerView}>
        <TouchableOpacity activeOpacity={0.5} style={Styles.backButton} onPress={goBack}>
          <SvgIcon.BackIcon color={isDarkMode ? ColorTheme.light01 : ColorTheme.black} />
        </TouchableOpacity>
        {headerText === ''
          ? (!isDarkMode ? <SvgIcon.VerandaIcons style={Styles.logoStyle} />
            : <SvgIcon.LightVerandaIcons style={Styles.logoStyle} />)
          : (
            <Text numberOfLines={1} style={Styles.headerText}>{headerText}</Text>
          )}
      </View>
    </View>
  );
}

ComponentHeader.propTypes = {
  goBack: propTypes.func,
  headerText: propTypes.string,
  customStyle: propTypes.any,
};
