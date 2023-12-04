import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, takeUntil, catchError, map,
} from 'rxjs/operators';
import { Alert } from 'react-native';
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  gotErrorVerifying,
  setToken,
  VERIFYING_OTP,
  RESENDING_OTP,
  resentOtp,
  errorResendingOtp,
  AUTO_VERIFYING_OTP,
  getStateData,
  GET_STATE_DATA,
  setUserStateData,
  GET_CITY_DATA,
  setUserCityData,
} from './actionOtp';
import { getFeatureList, setAuthStatus } from '../IntroScreen/actionIntro';
import { sentOtp } from '../LogInScreen/epicLogin';
import { gettingUserProfileError } from '../BuyCourseScreen/actionBuyCourseScreen';
import StorageUtils from '../../common/StorageUtils';
import AsyncKeys from '../../common/AsyncKeys';

// const TAG = 'epicScreenLogin';

async function verifyOtp(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.auth.verifyOTP, body);
  if (res?.data?.user_id) {
    await StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, res?.data?.token);
    await StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_USER_ID, res?.data?.user_id);
  }
  return res;
}

export async function getUserStateData() {
  const res = await makeGetRequest(Config.auth.state);
  return res;
}
export async function getUserCityData(data) {
  const res = await makeGetRequest(`${Config.auth.city}/${data}`);
  return res;
}

export const epicVerifyOtp = (action$, state$) => action$.pipe(
  ofType(VERIFYING_OTP),
  pluck('payload'),
  mergeMap(() => {
    const { mobile } = state$.value.reducerLogin;
    const { otp } = state$.value.reducerOtp;
    const body = {
      mobile,
      mobile_otp: otp,
    };
    return from(verifyOtp(body)).pipe(
      mergeMap((res) => {
        if (res.status_code === 200) {
          return of(setToken(res.data), setAuthStatus(true), getStateData(), getFeatureList());
        }
        return of(gotErrorVerifying(res?.status_message));
      }),
      takeUntil(action$.pipe(ofType(VERIFYING_OTP))),
      catchError((error) => {
        return of(gotErrorVerifying(error.response?.message || ''));
      }),
    );
  }),
);

export const epicResendOtp = (action$, state$) => action$.pipe(
  ofType(RESENDING_OTP),
  pluck('payload'),
  mergeMap(() => {
    const { mobile } = state$.value.reducerLogin;
    const body = {
      mobile,
      code: '+91',
    };
    return from(sentOtp(body)).pipe(
      map((res) => {
        if (res?.status_code === 200) return resentOtp();
        return errorResendingOtp(res);
      }),
      takeUntil(action$.pipe(ofType(RESENDING_OTP))),
      catchError((error) => {
        return of(errorResendingOtp(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicAutoVerifyOtp = (action$, state$) => action$.pipe(
  ofType(AUTO_VERIFYING_OTP),
  pluck('payload'),
  mergeMap((data) => {
    const { mobile } = state$.value.reducerLogin;
    const body = {
      mobile,
      mobile_otp: data,
    };
    return from(verifyOtp(body)).pipe(
      mergeMap((res) => {
        if (res.status_code === 200) {
          return of(setToken(res.data), setAuthStatus(true), getStateData());
        }
        Alert.alert(res?.message);
        return gotErrorVerifying(res);
      }),
      takeUntil(action$.pipe(ofType(AUTO_VERIFYING_OTP))),
      catchError((error) => {
        return of(gotErrorVerifying(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetState = (action$) => action$.pipe(
  ofType(GET_STATE_DATA),
  pluck('payload'),
  mergeMap(() => {
    return from(getUserStateData()).pipe(
      map((res) => {
        if (res?.status_code === 200) {
          const data = res?.data;
          const stateList = [];
          const listData = data;
          listData.map((values) => {
            return stateList.push({
              label: values?.name,
              value: values?.name,
              id: values?.id,
            });
          });
          return setUserStateData(stateList);
        }
        return gettingUserProfileError(res);
      }),
      takeUntil(action$.pipe(ofType(GET_STATE_DATA))),
      catchError((error) => {
        return of(gettingUserProfileError(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetCity = (action$) => action$.pipe(
  ofType(GET_CITY_DATA),
  pluck('payload'),
  mergeMap((data) => {
    const { state_id } = data;
    return from(getUserCityData(state_id)).pipe(
      map((res) => {
        if (res?.status_code === 200) {
          const cityList = [];
          const cityData = res?.data;
          const listData = cityData;
          listData.map((values) => {
            return cityList.push({
              label: values?.name,
              value: values?.name,
              id: values?.id,
            });
          });
          return setUserCityData(cityList);
        }
        return gettingUserProfileError(res);
      }),
      takeUntil(action$.pipe(ofType(GET_CITY_DATA))),
      catchError((error) => {
        return of(gettingUserProfileError(error.response?.data?.message || ''));
      }),
    );
  }),
);
