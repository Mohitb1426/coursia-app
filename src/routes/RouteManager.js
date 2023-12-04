import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import RouteGuest from './GuestScreens/GuestScreen';
import NetworkLoggerProvider from '../common/context/customInterceptor/NetworkLoggerProvider';
import RouteUser from './RouteUser';
import { setCurrentScreen, setPreviousScreen } from '../screens/IntroScreen/actionIntro';
import linking from './Linking';
import NetworkStatusProvider from '../common/context/networkStatus/NetworkStatusProvider';

function RouteManager() {
  const state = useSelector((store) => store.reducerIntro);
  const { isSignedIn } = state;
  const routeNameRef = useRef();
  const navigationRef = useNavigationContainerRef();
  const dispatch = useDispatch();
  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        routeNameRef.current = currentRouteName;
        dispatch(setPreviousScreen(previousRouteName));
        dispatch(setCurrentScreen(currentRouteName));
      }}
    >
      <NetworkStatusProvider>
        <NetworkLoggerProvider>
          <RouteGuest show={!isSignedIn} />
          <RouteUser show={isSignedIn} />
        </NetworkLoggerProvider>
      </NetworkStatusProvider>
    </NavigationContainer>
  );
}

export default RouteManager;
