import React, { useEffect, useContext } from 'react';
import { View, Text, Linking } from 'react-native';
import propTypes from 'prop-types';
import styles from './styles';
import { LocalizationContext } from '../../common/LocalizationProvider';
import { Header } from '../../components';
import Images from '../../common/Images';
import CustomTouchable from './Component/CustomTouchable';

export function MenuScreen({ navigation }) {
  const { translations } = useContext(LocalizationContext);

  useEffect(() => {
    // ProfileStore.getCustomerState();
    // ProfileStore.getCustomerProfile();
  }, []);
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        hideBackButton
        centerText={translations.MENU}
        goBack={navigateBack}
      />
      <View style={styles.Container}>
        <CustomTouchable
          image={Images.MALE_USER}
          buttonText={translations.UPDATE_PROFILE}
        />

        <CustomTouchable
          image={Images.SUPPORT_ICON}
          buttonText={translations.MENU_SUPPORT}
        />
        <CustomTouchable
          image={Images.RATE_US_ICON}
          buttonText={translations.RATE_US}
          onPress={() => Linking.openURL(translations.VERANDA_PLAY_STORE)}
        />

      </View>
      <View style={styles.VersionTextContainer}>
        <Text style={styles.VersionTextStyle}>{translations.CURRENT_VERSION}</Text>
      </View>
    </View>
  );
}
MenuScreen.propTypes = {
  navigation: propTypes.any,
};
