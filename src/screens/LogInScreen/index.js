import React, { useEffect, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  BackHandler,
  Keyboard,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import ErrorHandler from '../../common/ErrorHandler';
import styles from './style';
import Loader from '../../components/Loader';
import Fonts from '../../common/Fonts';
import TermAndConditionsModal from './components/TermAndConditionsModal';
import Images from '../../common/Images';
import { ColorTheme } from '../../common/AppStyles';
import CustomButton from '../../components/CustomButton';
import { LocalizationContext } from '../../common/LocalizationProvider';
import {
  openingWebView,
  sendingOtp,
  setMobileNumber,
  checkMobileError,
  setTermCondition,
  activateLogin,
  toggleLoader,
  changeNumber,
  setScrollEnabled,
} from './actionLogin';
import constants from './constants';
import regex from '../../common/Regex';
import { Routes } from '../../routes/Routes';
import SvgIcon from '../../common/SvgIcon';
import { LoginTextInput } from './components';
import { screenHeightDefault } from '../../common/Dimensions';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';
import StorageUtils from '../../common/StorageUtils';
import AsyncKeys from '../../common/AsyncKeys';

export function LogInScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const { appTheme, darkMode } = useContext(ThemeContext);
  const TAG = 'LoginScreen';
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.reducerLogin);
  const mobileRef = React.createRef();
  const {
    mobile, isOtpSent, openWebView, isLoading, mobileError, termCondition, isActive,
    scrollState,
  } = loginState;
  const numberBwtFirst = constants.NumberBwtFirst;
  const numberBwtSecond = constants.NumberBwtSecond;
  const { translations } = useContext(LocalizationContext);

  useEffect(() => {
    isLoginActive();
    if (mobile.length === 10) {
      if (
        Number(mobile) >= numberBwtFirst
        && Number(mobile) <= numberBwtSecond
      ) {
        dispatch(checkMobileError(''));
      } else {
        dispatch(checkMobileError(translations.Invalid_Mobile));
      }
    } else {
      dispatch(checkMobileError(''));
    }
  }, [mobile]);

  const setPhoneNumber = async (number) => {
    await StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_PHONE_NUMBER, number);
  };

  useEffect(() => {
    return () => {
      dispatch(setMobileNumber(''));
    };
  }, []);

  const exitApp = () => {
    BackHandler.exitApp();
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', exitApp);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', exitApp);
    };
  }, []);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => dispatch(setScrollEnabled(true)));
    Keyboard.addListener('keyboardDidHide', () => dispatch(setScrollEnabled(false)));
    return () => {
      Keyboard.removeAllListeners('keyboardDidHide', () => dispatch(setScrollEnabled(false)));
      Keyboard.removeAllListeners('keyboardDidShow', () => dispatch(setScrollEnabled(false)));
    };
  });

  const isLoginActive = () => {
    if (
      mobile.length === 10
      && Number(mobile) >= numberBwtFirst
      && Number(mobile) <= numberBwtSecond
      && termCondition === true
    ) {
      dispatch(activateLogin(true));
    } else {
      dispatch(activateLogin(false));
    }
  };

  const isMobileValid = () => {
    if (mobile.length === 0) {
      dispatch(checkMobileError(translations.Mobile_no_empty_error));
      return false;
    }
    if (!regex.NUMBERS.test(mobile)) {
      dispatch(checkMobileError(translations.Invalid_Mobile));
      return false;
    }
    dispatch(checkMobileError(''));
    return true;
  };

  useEffect(() => {
    if (isOtpSent) {
      navigation.navigate(Routes.SCREEN_OTP);
    }
    return () => {
      dispatch(changeNumber(false));
    };
  }, [isOtpSent]);

  const isCheckBox = () => {
    dispatch(setTermCondition(!termCondition));
  };

  useEffect(() => {
    if (termCondition) {
      if (
        mobile.length === 10
        && Number(mobile) >= numberBwtFirst
        && Number(mobile) <= numberBwtSecond
      ) {
        dispatch(activateLogin(true));
      }
    } else {
      dispatch(activateLogin(false));
    }
  }, [termCondition]);

  const openPrivacyPolicy = () => {
    dispatch(openingWebView({ isVisible: true, url: constants.PRIVACY_POLICY }));
    dispatch(toggleLoader(true));
  };

  const openTermsCondition = () => {
    dispatch(openingWebView({ isVisible: true, url: constants.TERMS_OF_SERVICE }));
    dispatch(toggleLoader(true));
  };

  return (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.mainContainer}>
        <StatusBar animated backgroundColor={appTheme.STATUS_BAR_COLOR_ONE} barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <ImageBackground
          source={darkMode ? Images.DARK_LOGIN_BACKGROUND : Images.LOGIN_BACKGROUND}
          resizeMode="cover"
          style={Styles.container}
        >
          <KeyboardAwareScrollView
            contentInsetAdjustmentBehavior="automatic"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            style={Styles.scrollView}
            scrollEnabled={scrollState}
          >
            <View style={{ height: screenHeightDefault }}>
              <View style={Styles.studentLogoContainer}>
                <SvgIcon.StudentLogo />
              </View>
              {!openWebView.isVisible && (
                <View style={Styles.loginBoxContainer}>
                  <Text style={Styles.welcomeTextStyle}>{translations.WELCOME}</Text>
                  <ErrorHandler componentName={`${TAG} : LoginTextInput`}>
                    <LoginTextInput
                      ref={mobileRef}
                      maxLength={10}
                      value={mobile}
                      hasError={mobileError}
                      placeholderText={translations.VER_MOBILE_PLACEHOLDER}
                      placeholderTextColor={appTheme.TEXT_COLOR_HEADING_05}
                      onChangeText={(text) => {
                        dispatch(setMobileNumber(text));
                        setPhoneNumber(text);
                        isLoginActive();
                      }}
                    />
                  </ErrorHandler>

                  <ErrorHandler componentName={`${TAG} : CustomButton`}>
                    <CustomButton
                      customStyle={Styles.Button1Style}
                      customButtonFontFamily={Fonts.INTER_BOLD}
                      buttonText={translations.VER_CONTINUE}
                      onButtonPress={() => {
                        const validCheck = isMobileValid();
                        if (validCheck) {
                          dispatch(sendingOtp());
                        }
                      }}
                      isDisabled={!isActive}
                      buttonColor={isActive ? ColorTheme.JUNGLE_GREEN : ColorTheme.WHITE}
                      textColor={isActive ? ColorTheme.WHITE : ColorTheme.JUNGLE_GREEN}
                    />
                  </ErrorHandler>

                  <View style={Styles.subContainer}>
                    <CheckBox
                      value={termCondition}
                      onChange={isCheckBox}
                      tintColors={{
                        true: ColorTheme.JUNGLE_GREEN,
                      }}
                    />
                    <Text style={Styles.firstTextStyle}>{translations.SIGNUP_POLICY_TEXT}</Text>
                  </View>
                  <View style={Styles.termsPolicyContainer}>
                    <TouchableOpacity onPress={openTermsCondition}>
                      <Text style={Styles.termsText}>{translations.SIGNUP_TERM}</Text>
                    </TouchableOpacity>
                    <Text style={Styles.andTextStyle}>{translations.VER_AND}</Text>
                    <TouchableOpacity onPress={openPrivacyPolicy}>
                      <Text style={Styles.termsText}>{translations.SIGNUP_PRIVACY}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>

        {openWebView.isVisible && (
          <ErrorHandler componentName={`${TAG} : TermsAndConditionsModal`}>
            <TermAndConditionsModal
              isVisible={openWebView.isVisible}
              url={openWebView.url}
              onWebLoad={() => dispatch(toggleLoader(false))}
              onCloseImage={() => {
                dispatch(openingWebView({ isVisible: false, url: '' }));
              }}
            />
          </ErrorHandler>
        )}
        <Loader show={isLoading} />
      </View>
    </ErrorHandler>
  );
}

LogInScreen.propTypes = {
  navigation: propTypes.any,
};
