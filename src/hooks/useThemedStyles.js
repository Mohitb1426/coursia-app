import { useContext } from 'react';
import { ThemeContext } from '../common/ThemeProvider';

const useThemedStyles = (styles) => {
  const { appTheme } = useContext(ThemeContext);
  return styles(appTheme);
};

export default useThemedStyles;
