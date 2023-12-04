import React, { useContext } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import useThemeStyles from '../../hooks/useThemedStyles';
import styles from './style';
import CustomButton from '../../components/CustomButton';
import { ThemeContext } from '../../common/ThemeProvider';
import SvgIcons from '../../common/SvgIcon';
import { Routes } from '../../routes/Routes';

export function ComingSoonScreen({ navigation }) {
  const Styles = useThemeStyles(styles);
  const { appTheme } = useContext(ThemeContext);

  const navigateTo = () => {
    navigation.navigate(Routes.SCREEN_HOME);
  };

  return (
    <View style={Styles.comingSoonContainerStyle}>
      <View style={Styles.comingSoonSvgContainerStyle}>
        <SvgIcons.ComingSoonIcon />
      </View>
      <CustomButton
        customStyle={Styles.comingSoonButtonStyle}
        buttonText="Back to Home"
        buttonColor={appTheme.ASK_DOUBT_PRIMARY_BACKGROUND_07}
        textColor={appTheme.SECONDARY_BACKGROUND_02}
        onButtonPress={navigateTo}
      />
    </View>
  );
}

ComingSoonScreen.propTypes = {
  navigation: PropTypes.any,
};
