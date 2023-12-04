import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import {
  GET_LANGUAGES,
  setLanguage, errorGettingLanguage, GET_FEATURE_LIST, errorGettingFeatureList, gotFeatureList,
} from './actionIntro';
import { makeGetRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import { replaceSpace } from '../../utilities/commonFunction/replaceSpace';

export async function getLanguages() {
  const res = await makeGetRequest(Config.home.getLanguages);
  return res;
}

export async function getFeatureListData() {
  const res = await makeGetRequest(Config.auth.getFeatureList);
  return res;
}

const changeData = (data) => {
  const newObj = {};
  data.forEach((item) => {
    newObj[replaceSpace(item?.feature_name)] = item?.feature_group_id;
  });
  return newObj;
};

export const epicIntro = (action$) => action$.pipe(
  ofType(GET_LANGUAGES),
  pluck('payload'),
  mergeMap(() => {
    return from(getLanguages()).pipe(
      map((res) => {
        if (res.status_code === 200) return setLanguage(res);
        return errorGettingLanguage(res.message);
      }),
      takeUntil(action$.pipe(ofType(GET_LANGUAGES))),
      catchError((error) => {
        return of(errorGettingLanguage(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetFeatureList = (action$) => action$.pipe(
  ofType(GET_FEATURE_LIST),
  pluck('payload'),
  mergeMap(() => {
    return from(getFeatureListData()).pipe(
      map((res) => {
        // console.log('res', res);
        if (res.code === 200) {
          const newData = changeData(res?.data);
          return gotFeatureList(newData);
        }
        return errorGettingFeatureList(res.message);
      }),
      takeUntil(action$.pipe(ofType(GET_FEATURE_LIST))),
      catchError((error) => {
        return of(errorGettingFeatureList(error.response?.data?.message || ''));
      }),
    );
  }),
);
