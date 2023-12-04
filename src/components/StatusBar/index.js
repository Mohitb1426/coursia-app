import React, { useContext } from 'react';
import { StatusBar, View } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { ThemeContext } from '../../common/ThemeProvider';

function StatusBarComponent() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <View>
      <StatusBar animated backgroundColor={darkMode ? ColorTheme.STATUS_BAR_BLACK_BACKGROUND : ColorTheme.WHITE} barStyle={darkMode ? 'light-content' : 'dark-content'} />

    </View>
  );
}

export default StatusBarComponent;
