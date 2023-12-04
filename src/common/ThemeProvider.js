import React, { createContext, useEffect, useMemo } from 'react';
import propTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import { ColorThemeLight, ColorThemeDark } from './AppStyles';
import { debugLog } from './Logger';
import StorageUtils from './StorageUtils';
import AsyncKeys from './AsyncKeys';

const TAG = 'ThemeProvider: ';

export const ThemeContext = createContext({});

export function ThemeConsumer({ children }) {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error(
            'ThemeConsumer must be used within a ThemeProvider',
          );
        }
        return children(context);
      }}
    </ThemeContext.Consumer>
  );
}

ThemeConsumer.propTypes = {
  children: propTypes.any,
};

export function ThemeProvider({ children }) {
  const isDarkTheme = StorageUtils.getBoolean(AsyncKeys.IS_DARK_MODE) || false;
  const [darkMode, setDarkMode] = React.useState(isDarkTheme);
  useEffect(() => {
    debugLog(TAG, `darkMode - ${darkMode}`);
    StorageUtils.setUserPref(
      AsyncKeys.IS_DARK_MODE,
      darkMode,
    );
  }, [darkMode]);

  const mProps = useMemo(() => ({
    darkMode,
    setDarkMode,
    appTheme: darkMode ? ColorThemeDark : ColorThemeLight,
  }), [darkMode]);

  return (
    <ThemeContext.Provider value={mProps}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: propTypes.any,
};
