import {
  View, Text, ActivityIndicator,
} from 'react-native';
import React, {
  useState, useRef, useEffect, useContext, useMemo,
} from 'react';
import propTypes from 'prop-types';
import NetInfo from '@react-native-community/netinfo';
import ActionSheet from 'react-native-actions-sheet';
import { useNavigation } from '@react-navigation/native';
import NetworkStatusContext from './NetworkStatusContext';
import { debugLog } from '../../Logger';
import styles from './styles';
import { ColorTheme } from '../../AppStyles';
import CustomButton from '../../../components/CustomButton';
import Fonts from '../../Fonts';
import { LocalizationContext } from '../../LocalizationProvider';
import SvgIcon from '../../SvgIcon';
import useThemedStyles from '../../../hooks/useThemedStyles';
import { Routes } from '../../../routes/Routes';

function NetworkStatusProvider({ children }) {
  const navigation = useNavigation();
  const Styles = useThemedStyles(styles);
  const [isNetworkConnected, setConnected] = useState(true);
  const [retrying, setRetrying] = useState(false);
  const { translations } = useContext(LocalizationContext);
  const actionSheetRef = useRef(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const { isConnected, isInternetReachable } = state;
      debugLog(`network connected : ${isConnected}`, `Internet Reachable : ${isInternetReachable}`);
      if (isConnected !== isInternetReachable && isInternetReachable !== null) {
        setConnected(isInternetReachable);
      } else {
        setConnected(isConnected);
      }
    });
    if (retrying) setRetrying(false);
    return () => {
      debugLog('unsubscribed from event listener.');
      unsubscribe();
    };
  }, [retrying]);

  useEffect(() => {
    if (!isNetworkConnected) {
      setTimeout(() => {
        actionSheetRef.current?.show();
      }, 500);
    } else {
      actionSheetRef.current?.hide();
    }
  }, [isNetworkConnected]);

  const handleRetryPress = () => {
    if (!retrying) setRetrying(true);
  };
  const openMyLibrary = () => {
    navigation.navigate(Routes.SCREEN_LIBRARY_SCREEN);
    actionSheetRef.current?.hide();
  };
  const mProps = useMemo(
    () => ({
      isNetworkConnected,
    }),
    [isNetworkConnected],
  );

  return (
    <NetworkStatusContext.Provider value={mProps}>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={Styles.containerStyle}
        closeOnTouchBackdrop={false}
        closeOnPressBack={false}
        overlayColor="rgba(19, 19, 19, .6)"
      >
        <View style={Styles.modalContainer}>
          <View style={Styles.logoImage}>
            <SvgIcon.VerandaRaceLogo1 />
          </View>
          <View style={Styles.secondImage}>
            <SvgIcon.NoNetwork />
          </View>
          <Text style={Styles.textOops}>{translations.OOPS}</Text>
          <Text style={Styles.text}>{translations.OFFLINE}</Text>
          <Text style={Styles.text}>{translations.CHECK_TEXT}</Text>
          <View style={Styles.offlineTextWrapper}>
            <Text style={Styles.offlineText}>
              {translations.OFFLINE_MY_LIBRARY}
              <Text
                onPress={openMyLibrary}
                style={Styles.offlineMyLibraryText}
              >
                {translations.MY_LIBRARY}
              </Text>
            </Text>
          </View>
          {retrying ? (
            <ActivityIndicator size="large" color="red" style={Styles.activityIndicator} />
          ) : (
            <CustomButton
              customStyle={Styles.customButtonCustomStyle}
              onButtonPress={handleRetryPress}
              buttonText={translations.TRY_AGAIN}
              isDisabled={false}
              textColor={ColorTheme.WHITE}
              buttonColor={ColorTheme.GREEN_BG}
              fontFamily={Fonts.INTER_BOLD}
            />
          )}
        </View>
      </ActionSheet>
      {children}
    </NetworkStatusContext.Provider>
  );
}

NetworkStatusProvider.propTypes = {
  children: propTypes.any,
};

export default NetworkStatusProvider;
