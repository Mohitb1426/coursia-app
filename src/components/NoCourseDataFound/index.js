import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import SvgIcon from '../../common/SvgIcon';
import ErrorHandler from '../../common/ErrorHandler';
import styles from './style';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';
import { LocalizationContext } from '../../common/LocalizationProvider';

function NoCourseDataFound() {
  const Styles = useThemedStyles(styles);
  const { darkMode } = useContext(ThemeContext);
  const { translations } = useContext(LocalizationContext);

  return (
    <ErrorHandler componentName="NoCourseDataFound">
      <View style={Styles.mainContainer}>
        <View style={Styles.container}>
          {darkMode ? <SvgIcon.NoCourseFoundLight />
            : <SvgIcon.NoCourseFoundLight />}
        </View>
        <Text style={Styles.textStyle}>{translations.CC_NO_FOUND}</Text>
      </View>

    </ErrorHandler>
  );
}

export default NoCourseDataFound;
