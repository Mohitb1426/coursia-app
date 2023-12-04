import React, { useEffect, useState, useContext } from 'react';
import {
  View, Text, Image, TouchableOpacity, ScrollView, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import PushNotification from 'react-native-push-notification';
import AsyncKeys from '../../common/AsyncKeys';
import {
  LANGUAGE_ENGLISH,
  LANGUAGE_TAMIL,
  LocalizationContext,
} from '../../common/LocalizationProvider';
import StorageUtils from '../../common/StorageUtils';
import {
  setActiveToggleButton, setIsComingFromDrawer, getDrawerData, getActivePassDetails,
} from './actionDrawer';
import { setAuthStatus, setIsLangChanged } from '../../screens/IntroScreen/actionIntro';
import { ToggleButton, DrawerHeader, DrawerFooter } from './components';
import StyleComponentDrawer from './StyleComponentDrawer';
import { Routes } from '../Routes';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';
import SvgIcon from '../../common/SvgIcon';

function CustomDrawerContent() {
  const dispatch = useDispatch();
  const drawerStatus = useDrawerStatus();
  const styles = useThemedStyles(StyleComponentDrawer);
  const drawerState = useSelector((state) => state.reducerDrawer);
  const { isActiveToggleButton, drawerData, activePassData } = drawerState;
  const introState = useSelector((state) => state.reducerIntro);
  const { isLanguageChanged } = introState;
  const navigation = useNavigation();
  const [menuItemsTop, setMenuItemsTop] = useState([]);
  const [menuItemsBottom, setMenuItemsBottom] = useState([]);
  const { appTheme, darkMode, setDarkMode } = useContext(ThemeContext);
  const { appLanguage, setAppLanguage } = useContext(LocalizationContext);
  const lang = StorageUtils.getString(
    AsyncKeys.ASYNC_KEY_SELECTED_APP_LANGUAGE,
    LANGUAGE_ENGLISH,
  );
  useEffect(() => {
    dispatch(getDrawerData());
    dispatch(getActivePassDetails());
  }, [appLanguage]);

  useEffect(() => {
    const new_data_top = drawerData.filter((i) => i.priority === 1);
    const new_data_bottom = drawerData.filter((i) => i.priority === 2);
    setMenuItemsTop(new_data_top);
    setMenuItemsBottom(new_data_bottom);
  }, [drawerData]);

  useEffect(() => {
    StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_HAMBURGER_MENU_DATA, JSON.stringify(drawerData));
    const langCode = lang === LANGUAGE_ENGLISH ? '1' : '2';
    const result = drawerData.filter((item) => item.language_id === langCode);
    const new_data_top = result.filter((i) => i.priority === 1);
    const new_data_bottom = result.filter((i) => i.priority === 2);
    setMenuItemsTop(new_data_top);
    setMenuItemsBottom(new_data_bottom);
    // setMenuItems(result);
  }, [drawerData]);

  useEffect(() => {
    if (isLanguageChanged) {
      setAppLanguage(lang);
      // RNRestart.Restart();
    }
  }, [isActiveToggleButton]);

  const onLanguageToggle = () => {
    PushNotification.cancelAllLocalNotifications();
    dispatch(setIsLangChanged(true));
    dispatch(setActiveToggleButton(!isActiveToggleButton));
    if (!isActiveToggleButton) {
      StorageUtils.setUserPref(
        AsyncKeys.ASYNC_KEY_SELECTED_APP_LANGUAGE,
        LANGUAGE_ENGLISH,
      );
    } else {
      StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_SELECTED_APP_LANGUAGE, LANGUAGE_TAMIL);
    }
  };

  const onPressButton = (id) => {
    navigation.dispatch(DrawerActions.closeDrawer());
    if (id === 'exploreCourse') {
      // todo explore course
      navigation.navigate(Routes.SCREEN_COURSE);
    } else if (id === 'subscriptionPass') {
      // todo subscription pass
      navigation.navigate(Routes.SCREEN_SUBSCRIPTION);
    } else if (id === 'dashboard') {
      navigation.navigate(Routes.SCREEN_STUDENT_DASHBOARD);
    } else if (id === 'myLibrary') {
      navigation.navigate(Routes.SCREEN_LIBRARY_SCREEN);
      // my library
    } else if (id === 'nightMode') {
      // todo night mode
    } else if (id === 'support') {
      navigation.navigate(Routes.SCREEN_COMING_SOON);
      // navigation.navigate(Routes.SCREEN_SUPPORT);
    } else if (id === 'logOut') {
      onLanguageToggle();
      StorageUtils.flush();
      setDarkPref();
      dispatch(setAuthStatus(false));
      navigation.navigate('RouteGuest', { screen: Routes.SCREEN_INTRO });
    } else {
      // any default action
    }
  };

  const setDarkPref = () => {
    StorageUtils.setUserPref(
      AsyncKeys.IS_DARK_MODE,
      darkMode,
    );
  };

  const isDrawerOpen = () => {
    if (drawerStatus === 'open') {
      return true;
    }
    return false;
  };

  const onThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const renderItems = (item) => {
    const {
      id,
      title, icon,
      slug,
      // dark_icon,
      priority,
      isnew,
    } = item;
    return (slug === 'language' || slug === 'nightMode') ? (
      <View key={item.id} style={styles.listButtonContainer}>
        <View style={styles.listTitleContainer}>
          <View style={styles.leftContainer}>
            <View style={styles.lbLeftContainer}>
              <Image style={styles.lbIconStyle} source={{ uri: item.icon }} />
            </View>
            <View style={styles.lbRightLangContainer}>
              <Text numberOfLines={2} style={styles.lbTextStyle(priority)}>
                {item.title}
              </Text>
              {isnew === 1 && <SvgIcon.NewIcon />}
            </View>
          </View>
        </View>
        <View style={styles.toggleContainer}>
          <ToggleButton
            isActive={slug === 'language' ? isActiveToggleButton : !darkMode}
            firstTitle={slug === 'language' ? 'Eng' : 'Light'}
            secondTitle={slug === 'language' ? 'தமிழ்' : 'Dark'}
            is_icon={slug === 'nightMode'}
            toggleState={slug === 'language' ? onLanguageToggle : onThemeToggle}
          />
        </View>
      </View>
    ) : (
      <TouchableOpacity
        key={id}
        onPress={() => onPressButton(slug)}
      >
        <View style={styles.listButtonContainer}>
          <View style={styles.leftContainer}>
            <View style={styles.lbLeftContainer}>
              <Image
                style={styles.lbIconStyle}
                source={{ uri: icon }}
              />
            </View>
            <View style={styles.lbRightContainer}>
              <Text style={styles.lbTextStyle(priority)}>{title}</Text>
              {isnew === 1 && <SvgIcon.NewIcon />}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const profileState = useSelector((state) => state.reducerUpdateProfile);
  const { customerData } = profileState;

  const updateProfile = () => {
    dispatch(setIsComingFromDrawer(true));
    navigation.navigate(Routes.SCREEN_UPDATE_PROFILE);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isDrawerOpen() ? (
        <StatusBar animated backgroundColor={appTheme.PRIMARY_BACKGROUND_03} barStyle={darkMode ? 'light-content' : 'dark-content'} />
      ) : null}
      <DrawerHeader data={customerData} updateProfile={updateProfile} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {menuItemsTop.map((i) => renderItems(i)) }
        <View style={styles.dividerStyle} />
        {menuItemsBottom.map((i) => renderItems(i)) }
      </ScrollView>
      <DrawerFooter passData={activePassData} />
    </SafeAreaView>
  );
}

export default CustomDrawerContent;
