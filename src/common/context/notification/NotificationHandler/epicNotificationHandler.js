import { ofType } from 'redux-observable';
import {
  catchError, debounceTime, map, mergeMap, takeUntil,
} from 'rxjs/operators';
import { from, of } from 'rxjs';
import OneSignal from 'react-native-onesignal';
// import callWebService, { callTypes } from 'Utils/NetworkOps';
// import Config from '../../Config';
import {
  REGISTER_DEVICE,
  registeredDevice,
  registeredDeviceError,
} from './actionsNotificationHandler';
// import { deviceInfo } from '../../../Utils/utility';
// import { logoutAccount } from '../ProfileHome/action';

// eslint-disable-next-line import/prefer-default-export
export const RegisterDevice = (actions$) => actions$.pipe(
  ofType(REGISTER_DEVICE),
  debounceTime(1000),
  mergeMap(() => from(registerDeviceInApi()).pipe(
    map((data) => {
      // if (!data) return logoutAccount(); // registeredDeviceError(new Error('reg error.'));
      return registeredDevice(data);
    }),
    takeUntil(actions$.pipe(ofType(REGISTER_DEVICE))),
  )),
  catchError((error) => {
    // debugLog(TAG, error);
    return of(registeredDeviceError(error));
  }),
);

async function registerDeviceInApi() {
  const deviceState = await OneSignal.getDeviceState();
  if (typeof deviceState?.userId !== 'string') return null;
  // const url = 'Config.deviceInfo.deviceInfo';
  // const data = 'await deviceInfo()'
  //   .then((response) => ({
  //     device_id: response.device_id,
  //     onesignal_player_id: deviceState?.userId,
  //     device_ip: response.device_ip,
  //     device_os: response.device_os,
  //     device_os_version: response.device_os_version,
  //     device_brand: response.device_brand,
  //     app_version: response.app_version,
  //     device_network_type: response.device_network_type,
  //   }))
  // .catch((error) => error);
  // const token = await getAsync(AsyncKeys.ASYNC_USER_TOKEN);
  let res;
  // if (token) {
  //   res = await callWebService(callTypes.post, data, url, { isTokenRequired: true });
  // }
  // debugLog(TAG, res);
  return res?.data || null;
}
