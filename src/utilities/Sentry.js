import * as Sentry from '@sentry/react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import { debugLog } from '../common/Logger';
import Config from '../common/Config';

export const SENTRY_TAG_COMPONENT = 'ComponentErrorHandler';

const TAG = 'Sentry: ';

export function initSentry() {
  debugLog(TAG, 'initSentry()');
  if (!Config.logErrors) return;
  debugLog(TAG, 'sentry is enabled.');
  Sentry.init({
    dsn: 'https://3c61578bc65f44ad8783931bcc48e626@o4504479166562304.ingest.sentry.io/4504479259230208',
  });
}

export function captureErrorLogs(error) {
  if (!Config.logErrors) return;
  debugLog(TAG, 'logging error in sentry');
  try {
    const exception = error || error?.error || error?.message || error?.originalError;
    if (!error) return;
    Sentry.captureException(exception);
    crashlytics().recordError(exception);
  } catch (e) {
    debugLog(TAG, e);
    const scope = new Sentry.Scope();
    scope.setTag('Sentry', 'captureErrorLogs()');
    Sentry.captureException(e);
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

export function captureErrorWithTag(tag, error, msg = 'error') {
  if (!Config.logErrors) return;
  debugLog(TAG, 'logging error with tag in sentry');
  try {
    Sentry.captureException(error, (scope) => {
      scope.clear();
      scope.setTag(tag, msg);
      return scope;
    });
    crashlytics().setAttribute(TAG, tag).then(() => {
      crashlytics().recordError(error);
    });
  } catch (e) {
    debugLog(TAG, e);
    const scope = new Sentry.Scope();
    scope.setTag('Sentry', 'captureCustomMessage()');
    Sentry.captureException(e, scope);
    crashlytics().setAttribute(TAG, 'captureCustomMessage()').then(() => {
      crashlytics().recordError(e);
    });
  }
}

export function captureComponentErrors(error, fileName) {
  captureErrorWithTag(SENTRY_TAG_COMPONENT, error, fileName);
}
