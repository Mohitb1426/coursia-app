import { MMKV } from 'react-native-mmkv';
import PushNotification from 'react-native-push-notification';
import { debugLog } from './Logger';

export const storage = new MMKV();

const TAG = 'StorageUtils';

// value can be string | boolean | number
const setUserPref = (key, value) => {
  try {
    storage.set(key, value);
  } catch (e) {
    debugLog(TAG, e);
  }
};

const getBoolean = (key, defaultValue = false) => {
  try {
    const value = storage.getBoolean(key);
    if (!value) return defaultValue;
    return value;
  } catch (e) {
    debugLog(TAG, e);
  }
  return defaultValue;
};

const getString = (key, defaultValue = '') => {
  try {
    const value = storage.getString(key);
    if (!value) {
      return defaultValue;
    }
    return value;
  } catch (e) {
    debugLog(TAG, e);
  }
  return defaultValue;
};

const getNumber = (key, defaultValue = 0) => {
  try {
    const value = storage.getNumber(key);
    if (!value) return defaultValue;
    return value;
  } catch (e) {
    debugLog(TAG, e);
  }
  return defaultValue;
};

const flush = () => {
  try {
    storage.clearAll();
    PushNotification.cancelAllLocalNotifications();
  } catch (e) {
    debugLog(e.message);
  }
};

export default {
  setUserPref,
  getBoolean,
  getString,
  getNumber,
  flush,
};
