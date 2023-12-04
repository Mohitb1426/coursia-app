import axios from 'axios';
import Config from './Config';
import { debugLog } from './Logger';
import StorageUtils from './StorageUtils';
import { LANGUAGE_ENGLISH } from './LocalizationProvider';
import AsyncKeys from './AsyncKeys';
import { captureApiFails } from '../utilities/Sentry';

const TAG = 'NetworkOps: ';
const unAuthRoutes = [
  Config.auth.generateOTP,
  Config.auth.verifyOTP,
];

const isEnglishDataOnly = [
  Config.auth.getFeatureList,
];

const API_TIMEOUT = 18000;

axios.interceptors.request.use(async (config) => {
  let newConfig = config;
  try {
    const isTokenRequired = !unAuthRoutes.includes(config.url);
    const isFeatureApi = isEnglishDataOnly.includes(config.url);
    // debugLog(TAG, 'isTokenRequired 19', isTokenRequired);
    const lang = isFeatureApi ? LANGUAGE_ENGLISH : StorageUtils.getString(
      AsyncKeys.ASYNC_KEY_SELECTED_APP_LANGUAGE,
      LANGUAGE_ENGLISH,
    );
    /* const langData = JSON.parse(
      StorageUtils.getString(AsyncKeys.ASYNC_KEY_APP_LANGUAGE_DATA, '[]'),
    );
    const result = langData.filter(({ code }) => code.toLowerCase() === lang);
    const langCode = result ? result.id : 1; */
    const langCode = lang === LANGUAGE_ENGLISH ? 1 : 2;
    if (isTokenRequired) {
      const token = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null);
      const userId = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
      newConfig = {
        ...newConfig,
        headers: {
          ...newConfig.headers,
          'auth-bearer': token,
          'auth-id': userId,
          'language-code': langCode,
        },
        timeout: API_TIMEOUT,
      };
    } else {
      newConfig = {
        ...newConfig,
        headers: {
          ...newConfig.headers,
          'language-code': langCode,
        },
        timeout: API_TIMEOUT,
      };
    }
  } catch (e) {
    captureApiFails(e);
    debugLog(TAG, ' 40 Error in interceptor request', e);
  }
  return newConfig;
}, (error) => {
  captureApiFails(error);
  debugLog(TAG, ' 44Error in interceptor request', error);
  return Promise.reject(error);
});

axios.interceptors.response.use(
  async (res) => {
    try {
      const { data } = res;
      const { status, message, errorCode } = data;
      if (!status) debugLog(TAG, `${errorCode} - ${message} - ${res.config.url}`);
      return data;
    } catch (e) {
      captureApiFails(e);
      debugLog(TAG, 'error', e);
    }
    return {
      success: false,
      message: 'NetworkOps: Something went wrong intercepting response',
    };
  },

  (error) => {
    captureApiFails(error);
    debugLog(TAG, error.message);
    return Promise.reject(error);
  },
);

export const makeGetRequest = (URL) => axios.get(URL);
export const makePostRequest = (URL, data = {}) => axios.post(URL, { ...data });
export const makePutRequest = (URL, data = {}) => axios.put(URL, { ...data });
export const makePatchRequest = (URL, data = {}) => axios.patch(URL, { ...data });
export const makeDeleteRequest = (URL) => axios.delete(URL);
