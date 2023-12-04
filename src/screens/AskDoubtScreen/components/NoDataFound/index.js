import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import Images from '../../../../common/Images';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { ThemeContext } from '../../../../common/ThemeProvider';
import SvgIcon from '../../../../common/SvgIcon';

function NoDataFound() {
  const { translations } = useContext(LocalizationContext);
  const { darkMode } = useContext(ThemeContext);
  const Styles = useThemedStyles(styles);
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={Styles.mainContainer}
    >
      <View style={Styles.imageContainer}>
        {darkMode ? <SvgIcon.NoDataFound /> : (
          <Image source={Images.NO_DATA_FOUND} resizeMode="contain" />
        )}
      </View>
      <Text style={Styles.textStyle}>{translations.NO_DATA}</Text>
    </KeyboardAwareScrollView>
  );
}

export default NoDataFound;
