import { TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../common/SvgIcon';
import styles from './styles';
import { ColorTheme } from '../../common/AppStyles';
import { ThemeContext } from '../../common/ThemeProvider';

export function BackButton({ onBackPress }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      onPress={onBackPress}
      style={styles.mainContainer}
    >
      <SvgIcon.BackIcon color={darkMode ? ColorTheme.light01 : ColorTheme.black} />
    </TouchableOpacity>
  );
}

BackButton.propTypes = {
  onBackPress: PropTypes.func,
};

// export default React.memo(BackButton);
