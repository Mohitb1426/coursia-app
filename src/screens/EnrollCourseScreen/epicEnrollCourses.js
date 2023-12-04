/* eslint-disable eqeqeq */
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { makeGetRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  CHECK_RECORDED_CLASS_ACTIVE_PASS,
  setRecordedClassPass,
  errorCheckRecordedClassPass,
} from './actionEnrollCourse';

async function enableActiveFeatureBlackBox(id) {
  const res = await makeGetRequest(`${Config.comments.activeFeature}/${id}`);
  return res;
}

export const epicCheckActiveFeatureRecordedClass = (action$, state$) => action$.pipe(
  ofType(CHECK_RECORDED_CLASS_ACTIVE_PASS),
  pluck('payload'),
  mergeMap(() => {
    const { featureListData } = state$.value.reducerIntro;
    const { Access_Recorded_Courses } = featureListData;
    return from(enableActiveFeatureBlackBox(Access_Recorded_Courses)).pipe(
      map((res) => {
        if (res?.code === 200) {
          if (res?.data) {
            return setRecordedClassPass(!res.data);
          }
          return setRecordedClassPass(false);
        }
        if (res?.code === 500) {
          return setRecordedClassPass(true);
        }
        return errorCheckRecordedClassPass(res);
      }),
      takeUntil(action$.pipe(ofType(CHECK_RECORDED_CLASS_ACTIVE_PASS))),
      catchError((error) => {
        return of(errorCheckRecordedClassPass(error.response?.data?.message || ''));
      }),
    );
  }),
);
