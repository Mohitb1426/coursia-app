import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import propTypes from 'prop-types';
import OtpScreen from '../../screens/OtpScreen';
import ScreenNetworkLogger from '../../common/context/customInterceptor/ScreenNetworkLogger';
import { Routes } from '../Routes';
import { LogInScreen, IntroScreen } from '../../screens';
import UnderMaintenanceScreen from '../../screens/UnderMaintenanceScreen';

const StackNav = createStackNavigator();

function RouteGuest({ show }) {
  if (!show) return null;

  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNav.Screen
        name={Routes.SCREEN_INTRO}
        component={IntroScreen}
      />
      <StackNav.Screen
        name={Routes.SCREEN_LOGIN}
        component={LogInScreen}
      />
      <StackNav.Screen
        name={Routes.SCREEN_OTP}
        component={OtpScreen}
      />
      <StackNav.Screen
        name={Routes.SCREEN_NETWORK_LOGGER}
        component={ScreenNetworkLogger}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_UNDER_MAINTENANCE}
        component={UnderMaintenanceScreen}
      />
    </StackNav.Navigator>
  );
}
RouteGuest.propTypes = {
  show: propTypes.bool,
};
export default RouteGuest;
