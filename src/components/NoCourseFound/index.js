import { View } from 'react-native';
import React, { useContext } from 'react';
import SvgIcon from '../../common/SvgIcon';
import ErrorHandler from '../../common/ErrorHandler';
import styles from './style';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';

function NoCourseFound() {
  const Styles = useThemedStyles(styles);
  const { darkMode } = useContext(ThemeContext);

  return (
    <ErrorHandler componentName="NoCourseFound">
      <View style={Styles.container}>
        {darkMode ? <SvgIcon.NoCourseDark />
          : <SvgIcon.NoCourse />}
      </View>
    </ErrorHandler>
  );
}

export default NoCourseFound;
