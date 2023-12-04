import Config from 'react-native-config';
import { Platform } from 'react-native';

const ENVIRONMENT = Config.APP_ENV;
const DEBUG = ENVIRONMENT === 'staging';
const DATABASE_NAME = 'tpp';
const SHOW_ADS = Config.SHOW_ADS === 'true';

const { APP_NAME, ANDROID_VERSION_NAME } = Config;
const IOS_APP_ID = ' ';
const ANDROID_APP_ID = 'com.yukthi.tnpsc.race'; // package name
const APP_ID = Platform.OS === 'ios' ? IOS_APP_ID : ANDROID_APP_ID;

const SHARE_MESSAGE = 'this is a share message';
const timeout = 45;

export default {
  timeout,
  DEBUG,
  SHOW_ADS,
  ENVIRONMENT,
  APP_ID,
  IOS_APP_ID,
  ANDROID_APP_ID,
  APP_NAME,
  SHARE_MESSAGE,
  DATABASE_NAME,
  ANDROID_VERSION_NAME,
};
