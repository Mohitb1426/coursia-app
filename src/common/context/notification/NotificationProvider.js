/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useCallback, useEffect } from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import { Platform } from 'react-native';
// import Config from 'services/Config';
// import NavigatorService from 'services/Navigator';
import Config from 'react-native-config';
import {
  clearNotificationEvents,
  registerDevice,
  setNotificationEvent,
} from './NotificationHandler/actionsNotificationHandler';
import NotificationContext from './NotificationContext';
import StorageUtils from '../../StorageUtils';
import AsyncKeys from '../../AsyncKeys';
import { debugLog } from '../../Logger';
import {
  getNotifications,
  markAsReadNotification,
} from '../../../screens/Notifications/actionNotification';

function NotificationProvider({ children }) {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.reducerNotificationHandler);
  const { hasPendingEvent, notificationEvent } = state;

  const onNotificationOpened = useCallback((event) => {
    const { notification } = event;
    debugLog(`notification opened: ${JSON.stringify(notification)}`);
    StorageUtils.setUserPref(AsyncKeys.DEEP_LINK, notification?.additionalData?.deepLink);
    dispatch(setNotificationEvent(notification?.additionalData));
    if (notification?.additionalData?.notification_id) {
      dispatch(
        markAsReadNotification({
          isAll: false,
          readId: notification?.additionalData?.notification_id,
        }),
      );
    }
  }, []);

  const notificationReceivedEvent = (event) => {
    debugLog('OneSignal: notification will show in foreground:', event);
    // dispatch(setNotificationCount(unReadNotificationCount + 1));
    dispatch(getNotifications());
    const notification = event.getNotification();
    event.complete(notification);
  };

  const firePendingEvents = useCallback(() => {
    debugLog(`hasPendingEvent - ${hasPendingEvent}`);
    if (!hasPendingEvent) return;
    debugLog(`notification event: ${JSON.stringify(notificationEvent)}`);

    dispatch(clearNotificationEvents());
  }, [hasPendingEvent]);

  const onHandleRegisterDevice = async () => {
    dispatch(registerDevice());
  };

  useEffect(() => {
    debugLog('registering one signal');
    const oneSignalAppID = Config.ONE_SIGNAL_APP_ID;
    OneSignal.setAppId(oneSignalAppID);
    OneSignal.setLogLevel(6, 0);
    if (Platform.OS === 'ios') {
      OneSignal.promptForPushNotificationsWithUserResponse((permission) => {
        StorageUtils.setUserPref(AsyncKeys.NOTIFICATION_PERMISSION, permission);
      });
    }

    OneSignal.addSubscriptionObserver((event) => {
      if (typeof event?.to?.userId !== 'string') return;
      debugLog(`OneSignal Player ID- ${event.to.userId}`);
      StorageUtils.setUserPref(AsyncKeys.ONESIGNAL_APP_ID, event.to.userId);
      onHandleRegisterDevice();
    });
    onHandleRegisterDevice();

    OneSignal.setNotificationOpenedHandler(onNotificationOpened);
    OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent);
  }, []);

  const mProps = {
    firePendingEvents,
  };
  return <NotificationContext.Provider value={mProps}>{children}</NotificationContext.Provider>;
}

NotificationProvider.propTypes = {
  children: propTypes.any,
};

export default NotificationProvider;
