import React, { useContext, useEffect } from 'react';
import {
  View, Text, PermissionsAndroid, ImageBackground, StatusBar,
} from 'react-native';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import moment from 'moment-timezone';
import DeviceInfo from 'react-native-device-info';
import styles from './style';
import Images from '../../common/Images';
import { LANGUAGE_ENGLISH, LocalizationContext } from '../../common/LocalizationProvider';
import StorageUtils from '../../common/StorageUtils';
import AsyncKeys from '../../common/AsyncKeys';
import {
  setAuthStatus, getLanguages, setPermissionAsked, getFeatureList,
} from './actionIntro';
import { Routes } from '../../routes/Routes';
import { getStateData } from '../OtpScreen/actionOtp';
import { getRelativeTime } from '../../common/TimeUtils';
import { debugLog } from '../../common/Logger';
import { saveOSToken } from '../Notifications/actionNotification';
import ErrorHandler from '../../common/ErrorHandler';
import { Button } from './components';
import { screenHeightDefault } from '../../common/Dimensions';
import SvgIcon from '../../common/SvgIcon';
import { ColorTheme } from '../../common/AppStyles';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';

export function IntroScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const { darkMode } = useContext(ThemeContext);
  const TAG = 'IntroScreen';

  const introState = useSelector((state) => state.reducerIntro);
  const selectedAppLanguage = StorageUtils.getString(
    AsyncKeys.ASYNC_KEY_SELECTED_APP_LANGUAGE,
    LANGUAGE_ENGLISH,
  );
  const { languageData, isLanguageChanged, isPermissionAsked } = introState;
  const { setAppLanguage, translations } = useContext(LocalizationContext);
  const dispatch = useDispatch();
  useEffect(() => {
    saveOneSignalToken();
    changeLanguage();
    dispatch(getLanguages());
    DeviceInfo.getUniqueId().then((uniqueId) => {
      // todo add this to privacy policy.
      StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_DEVICE_ID, uniqueId);
      dispatch(saveOSToken());
      debugLog(`Device id: ${uniqueId}`);
    });
  }, []);

  async function saveOneSignalToken() {
    const deviceState = await OneSignal.getDeviceState();
    const data = deviceState?.userId;
    StorageUtils.setUserPref(AsyncKeys.ONESIGNAL_PLAYER_ID, data);
    const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null);
    const userId = StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);

    // clearing any user related data from onesignal in case of user logged out
    if (!token && !userId) {
      // OneSignal.logoutEmail();
      OneSignal.logoutSMSNumber();

      // OneSignal.setExternalUserId('');
      OneSignal.sendTag('userId', '');

      // OneSignal.setEmail('');
      OneSignal.sendTag('email', '');

      // OneSignal.setSMSNumber('');
      OneSignal.sendTag('mobile', '');
    }
  }

  const deepLink = StorageUtils.getString(AsyncKeys.DEEP_LINK, null);
  useEffect(() => {
    if (deepLink !== null && deepLink !== '') {
      navigateTo();
    }
    StorageUtils.getString(AsyncKeys.DEEP_LINK, null);
  }, [deepLink]);

  useEffect(() => {
    if (languageData) {
      StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_APP_LANGUAGE_DATA, JSON.stringify(languageData));
      changeLanguage();
    }
  }, [languageData]);

  const navigateTo = () => {
    const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null);
    const userId = StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
    if (token && userId) {
      if (isLanguageChanged) {
        return navigation.reset({
          index: 0,
          routes: [{ name: Routes.SCREEN_DRAWER }],
        });
      }
      dispatch(getStateData());
      dispatch(getFeatureList());
      return dispatch(setAuthStatus(true));
    }
    return navigation.navigate(Routes.SCREEN_LOGIN);
  };

  const askPermission = async () => {
    try {
      const permissions = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
          PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        ],
      );
      dispatch(setPermissionAsked(true));
      debugLog('Permissions are: ', permissions);
    } catch (err) {
      debugLog(err);
    }
  };

  useEffect(() => {
    if (!isPermissionAsked) {
      askPermission();
    } else {
      askPermission();
    }
  }, []);

  // App lang change
  const changeLanguage = () => {
    moment.tz.setDefault('Asia/Kolkata');
    moment.updateLocale('en', { relativeTime: getRelativeTime(translations) });
    OneSignal.sendTag('language', selectedAppLanguage);
    setAppLanguage(selectedAppLanguage);
  };

  return (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.container}>
        <StatusBar animated backgroundColor={darkMode ? ColorTheme.STATUS_BAR_BLACK_BACKGROUND : ColorTheme.GREEN_BG} barStyle="light-content" />
        <ImageBackground
          source={darkMode ? Images.DARK_INTRO_BACKGROUND : Images.INTRO_BACKGROUND}
          resizeMode="cover"
          style={Styles.container}
        >
          <View style={{ height: screenHeightDefault }}>
            <View style={Styles.styleContainerImage}>
              {darkMode ? (
                <View style={Styles.svgContainer}>
                  <SvgIcon.VerandaLogo />
                </View>
              )
                : (
                  <View style={Styles.svgContainer}>
                    <SvgIcon.VerandaLogo />
                  </View>
                )}
              <Text style={Styles.title}>
                {translations.VER_SUB_HEADING}
                {' '}
              </Text>
            </View>
            <View style={Styles.textContainer}>
              <Text style={Styles.textStyle}>{translations.VER_SPLASH_YEAR}</Text>
              <Text style={Styles.textStyle}>{translations.VER_SPLASH_SELECTIONS}</Text>
              <Text style={Styles.textStyle}>{translations.VER_SUCCESS_RATIO}</Text>
            </View>
            <ErrorHandler componentName={`${TAG}':Button'`}>
              <Button
                navigateTo={navigateTo}
              />
            </ErrorHandler>
          </View>
        </ImageBackground>
      </View>
    </ErrorHandler>
  );
}

IntroScreen.propTypes = {
  navigation: propTypes.any,
};
