/* eslint-disable react-native/no-inline-styles */
import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
  ToastAndroid,
  StatusBar,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import RNOtpVerify from 'react-native-otp-verify';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { ColorThemeLight } from '../../common/AppStyles';
import Images from '../../common/Images';

import {
  resendingOtp, setOtp, verifyingOtp, autoVerifyingOtpAction, activateOtp,
} from './actionOtp';
import styles from './style';
import { LocalizationContext } from '../../common/LocalizationProvider';
import Loader from '../../components/Loader';
import { changeNumber, openingWebView, toggleLoader } from '../LogInScreen/actionLogin';
import SvgIcon from '../../common/SvgIcon';
import { debugLog } from '../../common/Logger';
import ErrorHandler from '../../common/ErrorHandler';
import constants from '../LogInScreen/constants';

import TermAndConditionsModal from '../LogInScreen/components/TermAndConditionsModal';
import Constants from '../../common/Constants';
import { vh } from '../../common/Dimensions';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';

function OtpScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const { darkMode, appTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.reducerLogin);
  const { openWebView } = loginState;
  const otpState = useSelector((state) => state.reducerOtp);
  const { mobile } = loginState;
  const timer = useRef(null);
  const {
    otp, /* isActive, */ isLoading, otpError, seconds,
  } = otpState;
  const { translations } = useContext(LocalizationContext);
  const [time, setTime] = useState(Constants.timeout);

  function handleBackButtonClick() {
    dispatch(changeNumber(false));
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    setTime(Constants.timeout);
  }, [seconds]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  useEffect(() => {
    isOtpActive();
  }, [otp]);

  useEffect(() => {
    if (otpError !== '') {
      ToastAndroid.show(otpError, ToastAndroid.LONG);
    }
  }, [otpError]);

  useEffect(() => {
    RNOtpVerify.getOtp()
      .then(() => RNOtpVerify.addListener(otpHandler))
      .catch();
    return () => {
      RNOtpVerify.removeListener();
      setTime(0);
    };
  }, []);

  useEffect(() => {
    if (time > -1) {
      timer.current = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  const isOtpActive = () => {
    // eslint-disable-next-line no-unused-expressions
    otp.length >= 4 ? dispatch(activateOtp(true)) : dispatch(activateOtp(false));
  };

  const otpButtonTapped = () => {
    dispatch(verifyingOtp());
  };

  const openPrivacyPolicy = () => {
    dispatch(openingWebView({ isVisible: true, url: constants.PRIVACY_POLICY }));
    dispatch(toggleLoader(true));
  };

  const openTermsCondition = () => {
    dispatch(openingWebView({ isVisible: true, url: constants.TERMS_OF_SERVICE }));
    dispatch(toggleLoader(true));
  };

  const otpHandler = (message) => {
    if (message) {
      try {
        const autoFetchOtp = /(\d{4})/g.exec(message)[1];
        dispatch(setOtp(autoFetchOtp.trim()));
        autoVerifyOtp(autoFetchOtp.trim());
      } catch (err) {
        debugLog(err);
      }
    }
  };

  const autoVerifyOtp = async (autoOtp) => {
    dispatch(autoVerifyingOtpAction(autoOtp));
  };

  return (
    <ErrorHandler componentName="OtpScreen">
      <View style={Styles.container}>
        <StatusBar animated backgroundColor={appTheme.STATUS_BAR_COLOR_ONE} barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <ImageBackground
          source={darkMode ? Images.DARK_LOGIN_BACKGROUND : Images.LOGIN_BACKGROUND}
          resizeMode="cover"
          style={Styles.imageBackground}
        >
          <View style={Styles.imageStyle}>
            <SvgIcon.OTPImage />
          </View>
          <KeyboardAwareScrollView
            enableOnAndroid
            contentInsetAdjustmentBehavior="automatic"
            keyboardShouldPersistTaps="handled"
            style={Styles.scrollView}
          >
            <View style={Styles.innerContainer}>
              <View style={Styles.innerCard}>
                <Text style={Styles.headerText}>{translations.VER_ENTER_OTP}</Text>
                <Text style={Styles.subHeadingText}>
                  {translations.VER_ENTER_OTP_TEXT}
                  {' '}
                </Text>
                <View style={Styles.editContainer}>
                  <Text style={Styles.subHeadingTextWithImage}>
                    {`+91 ${mobile.substring(0, 2)}XXXXXXXX  `}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      handleBackButtonClick();
                    }}
                  >
                    <Text style={Styles.editText}>{translations.OTP_EDIT}</Text>
                  </TouchableOpacity>
                </View>
                {time > 0 ? (
                  <Text style={Styles.secondsText}>{`0:${time}`}</Text>
                ) : (
                  <View style={{ height: vh(60) }} />
                )}
                <ErrorHandler componentName="OtpScreen-OTPInputView">
                  <OTPInputView
                    style={Styles.otpView}
                    pinCount={4}
                    // code={otp}
                    onCodeChanged={(code) => {
                      if (code.length === 4) {
                        dispatch(setOtp(code));
                        dispatch(setOtp(code));
                      }
                    }}
                    codeInputFieldStyle={Styles.otpItem}
                    codeInputHighlightStyle={Styles.otpItemHigh}
                    onCodeFilled={(code) => {
                      if (code.length === 4) {
                        dispatch(setOtp(code));
                        otpButtonTapped();
                      }
                    }}
                  />
                </ErrorHandler>
                <View style={Styles.otpInputSection}>
                  <Text style={Styles.subHeadingText}>{translations.VER_DID_NOT_TEXT}</Text>
                  <TouchableOpacity disabled={time > 0} onPress={() => dispatch(resendingOtp())}>
                    <Text
                      style={[
                        Styles.resendOTP,
                        {
                          color:
                            time > 0
                              ? ColorThemeLight.BACKGROUND_QUATERNARY_EMPHASIS
                              : ColorThemeLight.PRIMARY_COLOR,
                        },
                      ]}
                    >
                      {`${translations.VER_RESENT} OTP`}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.termsContainer}>
                  <Text style={Styles.subHeadingTextWithImage}>{translations.OTP_AGREE}</Text>
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
                <Loader show={isLoading} />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
        {openWebView.isVisible && (
          <ErrorHandler componentName="OTPScreen : TermsAndConditionsModal">
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
      </View>
    </ErrorHandler>
  );
}

OtpScreen.propTypes = {
  navigation: propTypes.any,
};

export default OtpScreen;
