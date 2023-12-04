import React from 'react';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
/* import dynamicLinks from '@react-native-firebase/dynamic-links';
 */
import { LocalizationProvider } from './common/LocalizationProvider';
import RouteManager from './routes/RouteManager';
import store from './services/redux/store';
import NotificationProvider from './common/context/notification/NotificationProvider';
import { initSentry } from './utilities/Sentry';
import { ThemeProvider } from './common/ThemeProvider';
import StatusBarComponent from './components/StatusBar';

initSentry();
LogBox.ignoreAllLogs();

export default function App() {
  /* const handleDynamicLink = (link) => {
    Linking.openURL(link.url);
  };

  // Foreground events
  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);

  // Background events
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then((link) => {
        Linking.openURL(link.url);
      });
  }, []);
 */

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider>
        <LocalizationProvider>
          <Provider store={store}>
            <NotificationProvider>
              <StatusBarComponent />
              <RouteManager />
            </NotificationProvider>
          </Provider>
        </LocalizationProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
