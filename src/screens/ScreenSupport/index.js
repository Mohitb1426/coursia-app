import {
  View, Text, Image, Linking,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import OneSignal from 'react-native-onesignal';
import styles from './styles';
import { ComponentHeader } from '../../components';
import Images from '../../common/Images';
import { LANGUAGE_ENGLISH, LocalizationContext } from '../../common/LocalizationProvider';
import { debugLog } from '../../common/Logger';
import StorageUtils from '../../common/StorageUtils';
import AsyncKeys from '../../common/AsyncKeys';

export function ScreenSupport({ navigation, route }) {
  const navigateBack = () => {
    navigation.goBack();
  };
  const { setAppLanguage, translations } = useContext(LocalizationContext);

  // tnspc://Support/1111/222
  debugLog('id', route?.params?.id);
  debugLog('id2', route?.params?.id2);

  const selectedAppLanguage = StorageUtils.getString(
    AsyncKeys.ASYNC_KEY_SELECTED_APP_LANGUAGE,
    LANGUAGE_ENGLISH,
  );

  useEffect(() => {
    changeLanguage();
  }, []);

  const changeLanguage = () => {
    // moment.tz.setDefault('Asia/Kolkata');
    // moment.updateLocale('en', { relativeTime: getRelativeTime(translations) });
    OneSignal.sendTag('language', selectedAppLanguage);
    setAppLanguage(selectedAppLanguage);
  };

  return (
    <View style={styles.mainContainer}>
      <ComponentHeader goBack={navigateBack} headerText={translations.SUPPORT_SCREEN} />

      <View style={styles.centerItem}>
        <View style={styles.textContainer}>
          <View style={styles.textSubContainer}>
            <Image source={Images.VER_EMAIL} resizeMode="contain" />
          </View>
          <View style={styles.contactText}>
            <Text style={styles.mainTextContainer}>{translations.Email_At}</Text>
            <Text
              onPress={() => Linking.openURL('mailto:support@verandarace.com')}
              style={styles.mainSubTextContainer}
            >
              {translations.SUPPORT_FIRST}
            </Text>
            <Text
              onPress={() => Linking.openURL('mailto:akash.gaurav@verandalearning.com')}
              style={styles.mainSubTextContainer}
            >
              {translations.SUPPORT_SECOND}
            </Text>
          </View>
        </View>
        <View style={styles.callDetailsContainer}>
          <View style={styles.callTextStyle}>
            <View style={styles.contactText}>
              <Text style={styles.mainSubTextContainer}>{translations.CALL_US}</Text>
            </View>
          </View>
          <View style={styles.textImageContainer}>
            <View style={styles.imageContainer}>
              <Image source={Images.VER_PHONE} resizeMode="contain" />
            </View>
            <View style={styles.contactText}>
              <Text style={styles.mainTextContainer}>{translations.TAMIL}</Text>
              <Text
                onPress={() => Linking.openURL('tel:7550003885')}
                style={styles.mainSubTextContainer}
              >
                {translations.TAMIL_NO}
              </Text>
            </View>
          </View>
          <View style={styles.textImageContainer}>
            <View style={styles.imageContainer}>
              <Image source={Images.VER_PHONE} resizeMode="contain" />
            </View>
            <View style={styles.contactText}>
              <Text style={styles.mainTextContainer}>{translations.MALAYALAM}</Text>
              <Text
                onPress={() => Linking.openURL('tel:9384844483')}
                style={styles.mainSubTextContainer}
              >
                {translations.MALAYALAM_NO}
              </Text>
            </View>
          </View>
          <View style={styles.textImageContainer}>
            <View style={styles.imageContainer}>
              <Image source={Images.VER_PHONE} resizeMode="contain" />
            </View>
            <View style={styles.contactText}>
              <Text style={styles.mainTextContainer}>{translations.KANNADA}</Text>
              <Text
                onPress={() => Linking.openURL('tel:7550003885')}
                style={styles.mainSubTextContainer}
              >
                {translations.KANNADA_NO}
              </Text>
            </View>
          </View>
          <View style={styles.textImageContainer}>
            <View style={styles.imageContainer}>
              <Image source={Images.VER_PHONE} resizeMode="contain" />
            </View>
            <View style={styles.contactText}>
              <Text style={styles.mainTextContainer}>{translations.TELUGU}</Text>
              <Text
                onPress={() => Linking.openURL('tel:7550003885')}
                style={styles.mainSubTextContainer}
              >
                {translations.TELUGU_NO}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

ScreenSupport.propTypes = {
  navigation: propTypes.any,
  route: propTypes.any,
};
