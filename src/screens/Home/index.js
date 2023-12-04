import {
  AppState, Linking, SafeAreaView, ScrollView, RefreshControl, View,
} from 'react-native';
import React, {
  useEffect, useRef, useState, useCallback, useContext,
} from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import MenuHeader from '../../components/MenuHeader';
import { getUserProfile } from '../UpdateProfileScreen/actionUpdateProfile';
import { saveOSToken, getNotifications } from '../Notifications/actionNotification';
import {
  StoryComponent,
  CarouselComponent,
  ModulesCard,
  LiveClassLists,
  BannerComponent,
} from './components';
import { Routes } from '../../routes/Routes';
import StorageUtils from '../../common/StorageUtils';
import AsyncKeys from '../../common/AsyncKeys';
import { debugLog } from '../../common/Logger';
import {
  getStoryCarouselData, getMiddleMenuData, getHomeScreenComponentOrder, getHomeScreenBanners,
} from './actionHome';
import { setIsDataUpdated } from '../BuyCourseScreen/actionBuyCourseScreen';
import { getCoursesCategoriesList } from '../ChooseCoursesScreen/actionChooseCourses';
import ErrorHandler from '../../common/ErrorHandler';
import useThemedStyles from '../../hooks/useThemedStyles';
// import UnderMaintenanceScreen from '../UnderMaintenanceScreen';
import { FEATURES } from './constant';
import { LocalizationContext } from '../../common/LocalizationProvider';

const TAG = 'HOME_SCREEN';
export function ScreenHome({ navigation }) {
  const dispatch = useDispatch();
  const Styles = useThemedStyles(styles);
  const state = useSelector((store) => store.reducerNotificationHandler);
  const HomeScreenState = useSelector((store) => store.reducerHome);
  const {
    carouselData, storyData, isStoryLoading, homeScreenComponentOrder,
    middleBannersData,
    webinarBannersData,
    referBannersData,
  } = HomeScreenState;
  const { notificationEvent } = state;
  const profileState = useSelector((pState) => pState.reducerUpdateProfile);
  const { customerData } = profileState;
  const buyCourseState = useSelector((bState) => bState.reducerBuyCourse);
  const { isDataUpdated } = buyCourseState;
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const { appLanguage } = useContext(LocalizationContext);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        dispatch(getNotifications());
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      debugLog('AppState', appState.current);
      debugLog('AppappStateVisible', appStateVisible);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    dispatch(getHomeScreenComponentOrder());
    dispatch(getNotifications());
    dispatch(getUserProfile());
    dispatch(saveOSToken());
    dispatch(getCoursesCategoriesList());
    dispatch(getMiddleMenuData());
    dispatch(getHomeScreenBanners());
  }, [appLanguage]);

  useFocusEffect(
    useCallback(() => {
      dispatch(getStoryCarouselData('all'));
    }, [appLanguage]),
  );

  const onRefresh = useCallback(() => {
    dispatch(getStoryCarouselData('all'));
  }, []);

  useEffect(() => {
    if (isDataUpdated) {
      dispatch(setIsDataUpdated(false));
    }
    dispatch(getUserProfile());
  }, [isDataUpdated]);

  useEffect(() => {
    const deepLink = StorageUtils.getString(AsyncKeys.DEEP_LINK, '');

    if (deepLink !== null && deepLink !== '') {
      handleDeepLink(deepLink);
    }
  }, []);

  useEffect(() => {
    if (customerData?.id) {
      // OneSignal.setExternalUserId(customerData?.id);
      OneSignal.sendTag('userId', customerData?.id);
    }
    if (customerData?.email) {
      // OneSignal.setEmail(customerData?.email);
      OneSignal.sendTag('email', customerData?.email);
    }

    if (customerData?.mobile) {
      // OneSignal.setSMSNumber(`${customerData?.code}${customerData?.mobile}`);
      OneSignal.sendTag('mobile', `${customerData?.code}  ${customerData?.mobile}`);
    }
  }, [customerData]);

  useEffect(() => {
    const link = notificationEvent?.deepLink;
    if (link !== null && link !== '') {
      handleDeepLink(link);
    }
  }, [notificationEvent]);

  const handleDeepLink = (link) => {
    if (link && link !== '') {
      Linking.openURL(link);
      StorageUtils.setUserPref(AsyncKeys.DEEP_LINK, '');
    }
  };

  const renderComponents = (item) => {
    const { componant, is_active } = item;

    const isActiveComponent = (feature) => {
      return componant === feature && is_active === 1;
    };

    const getComponent = (feature, Component) => {
      return (
        <ErrorHandler componentName={`${TAG}_${feature}_Component`}>
          {Component}
        </ErrorHandler>
      );
    };

    switch (true) {
      case isActiveComponent(FEATURES.STORY):
        return getComponent(FEATURES.STORY, storyData.length !== 0
          ? <StoryComponent data={storyData} /> : null);
      case isActiveComponent(FEATURES.CAROUSEL):
        return getComponent(FEATURES.CAROUSEL, carouselData.length !== 0
          ? <CarouselComponent data={carouselData} /> : null);
      case isActiveComponent(FEATURES.MIDDLE_BANNER):
        return getComponent(
          FEATURES.MIDDLE_BANNER,
          <BannerComponent navigation={navigation} data={middleBannersData || []} />,
        );
      case isActiveComponent(FEATURES.MIDDLE_MENU_CARD):
        return getComponent(FEATURES.MIDDLE_MENU_CARD, <ModulesCard navigation={navigation} />);
      case isActiveComponent(FEATURES.LIVE_CLASS_CARD):
        return (
          <LiveClassLists
            OnPressViewButton={() => navigation.navigate(Routes.SCREEN_COURSE)}
          />
        );
      case isActiveComponent(FEATURES.WEBINAR_CARD):
        return getComponent(
          FEATURES.WEBINAR_CARD,
          <View style={Styles.paddingBottom20}>
            <BannerComponent navigation={navigation} data={webinarBannersData || []} />
          </View>,
        );
      case isActiveComponent(FEATURES.REFER_CARD):
        return getComponent(
          FEATURES.REFER_CARD,
          <View style={Styles.paddingBottom20}>
            <BannerComponent navigation={navigation} data={referBannersData || []} />
          </View>,
        );
      default:
        return null;
    }
  };

  return (
    <ErrorHandler componentName={TAG}>
      <SafeAreaView style={Styles.mainContainer}>
        <MenuHeader />
        {/* { homeScreenComponentError ? <UnderMaintenanceScreen /> : ( */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          refreshControl={
            <RefreshControl refreshing={isStoryLoading} onRefresh={onRefresh} />
            }
        >
          <>
            {homeScreenComponentOrder.map((item) => (
              renderComponents(item)
            ))}
          </>
        </ScrollView>
        {/* )} */}
      </SafeAreaView>
    </ErrorHandler>
  );
}

ScreenHome.propTypes = {
  navigation: propTypes.any,
};
