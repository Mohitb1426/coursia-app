/* eslint-disable no-alert */
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import {
  GET_DRAWER_DATA,
  setDrawerData,
  errorGettingDrawerData,
  GET_ACTIVE_PASS_DETAILS,
  setActivePassDetails,
  errorGettingUserPassDetails,
} from './actionDrawer';
import { makeGetRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
// const TAG = 'epicScreenLogin';
export async function getLanguages() {
  const res = await makeGetRequest(Config.home.getLanguages);
  return res;
}

export async function getHamburgerData() {
  const res = await makeGetRequest(Config.home.getHamburgerData);
  return res;
}

export async function getUserPassDetails() {
  const res = await makeGetRequest(Config.home.getActivePassDetails);
  return res;
}

export const epicDrawer = (action$) => action$.pipe(
  ofType(GET_DRAWER_DATA),
  pluck('payload'),
  mergeMap(() => {
    return from(getHamburgerData()).pipe(
      map((res) => {
        if (res.code === 200) return setDrawerData(res);
        alert(res?.message);
        return errorGettingDrawerData(res);
      }),
      takeUntil(action$.pipe(ofType(GET_DRAWER_DATA))),
      catchError((error) => {
        alert(error.response?.data?.message || '');
        return of(errorGettingDrawerData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetUserPassDetails = (action$) => action$.pipe(
  ofType(GET_ACTIVE_PASS_DETAILS),
  pluck('payload'),
  mergeMap(() => {
    return from(getUserPassDetails()).pipe(
      map((res) => {
        if (res.code === 200) return setActivePassDetails(res?.data);
        return errorGettingUserPassDetails(res);
      }),
      takeUntil(action$.pipe(ofType(GET_ACTIVE_PASS_DETAILS))),
      catchError((error) => {
        return of(errorGettingUserPassDetails(error.response?.data?.message || ''));
      }),
    );
  }),
);
