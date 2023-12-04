import crashlytics from '@react-native-firebase/crashlytics';
import { debugLog } from './Logger';
import Config from './Config';

export const TAG_COMPONENT = 'ComponentErrorHandler';

const TAG = 'LoggerCrash: ';

export function captureErrorLogs(error) {
  if (!Config.logErrors) return;
  debugLog(TAG, 'logging error in sentry');
  try {
    const exception = error || error?.error || error?.message || error?.originalError;
    if (!error) return;
    crashlytics().recordError(exception);
  } catch (e) {
    debugLog(TAG, e);
    crashlytics().setAttribute(TAG, 'captureErrorLogs()').then(() => {
      crashlytics().recordError(e);
    });
  }
}

export function captureApiFails(error) {
  if (!Config.logErrors) return;
  debugLog(TAG, 'logging error in firebase');
  try {
    const exception = error || error?.error || error?.message || error?.originalError;
    crashlytics().recordError(exception);
  } catch (e) {
    crashlytics().setAttribute(TAG, 'captureApiFails()').then(() => {
      crashlytics().recordError(e);
    });
  }
}

export function captureErrorWithTag(tag, error) {
  if (!Config.logErrors) return;
  debugLog(TAG, 'logging error with tag in sentry');
  try {
    crashlytics().setAttribute(TAG, tag).then(() => {
      crashlytics().recordError(error);
    });
  } catch (e) {
    debugLog(TAG, e);
    crashlytics().setAttribute(TAG, 'captureCustomMessage()').then(() => {
      crashlytics().recordError(e);
    });
  }
}

export function captureComponentErrors(error, fileName) {
  captureErrorWithTag(TAG_COMPONENT, error, fileName);
}
