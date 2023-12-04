import { View, TouchableOpacity } from 'react-native';
import React, { memo, useContext } from 'react';
// import propTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import SvgIcon from '../../common/SvgIcon';
import styles from './styles';
import { Routes } from '../../routes/Routes';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';

function MenuHeader() {
  const { darkMode } = useContext(ThemeContext);
  const Styles = useThemedStyles(styles);
  const notificationState = useSelector((state) => state.reducerNotification);
  const { unReadNotificationCount } = notificationState;
  const navigation = useNavigation();
  const onPressHamburger = () => {
    navigation.openDrawer();
  };
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.leftContainer}>
        <TouchableOpacity onPress={onPressHamburger} style={Styles.menuContainer}>
          {darkMode ? <SvgIcon.LightHamburgerIcon /> : <SvgIcon.HamburgerIcon />}
        </TouchableOpacity>
        <View style={Styles.appIconContainer}>
          {darkMode ? <SvgIcon.LightVerandaIcons /> : <SvgIcon.VerandaIcons />}
        </View>
      </View>
      <View style={Styles.rightContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Routes.SCREEN_HOME_SEARCH);
          }}
          style={Styles.rightIconContainer}
        >
          {darkMode ? <SvgIcon.LightSearchIcon /> : <SvgIcon.SearchIcon />}
        </TouchableOpacity>
        {/* <TouchableOpacity style={Styles.rightIconContainer}>
          <SvgIcon.WalletIcon />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={Styles.rightIconContainer}
          onPress={() => {
            navigation.navigate(Routes.SCREEN_NOTIFICATION);
          }}
        >
          {darkMode ? <SvgIcon.LightNotificationIcon /> : <SvgIcon.NotificationIcon />}
          {unReadNotificationCount > 0 ? (
            <View style={Styles.notificationCountContainer} />
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* MenuHeader.propTypes = {
  navigation: propTypes.any,
  unReadNotificationCount: propTypes.number,
}; */

export default memo(MenuHeader);
