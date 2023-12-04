import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { errorSendingOtp, otpSent, SENDING_OTP } from './actionLogin';
import { makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';

// const TAG = 'epicScreenLogin';

export async function sentOtp(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.auth.generateOTP, body);
  return res;
}

export const epicSendingOtp = (action$, state$) => action$.pipe(
  ofType(SENDING_OTP),
  pluck('payload'),
  mergeMap(() => {
    const { mobile } = state$.value.reducerLogin;
    const body = {
      mobile,
      code: '+91',
    };
    return from(sentOtp(body)).pipe(
      map((res) => {
        if (res.status_code === 200) return otpSent();
        return errorSendingOtp(res);
      }),
      takeUntil(action$.pipe(ofType(SENDING_OTP))),
      catchError((error) => {
        return of(errorSendingOtp(error.response?.data?.message || ''));
      }),
    );
  }),
);
