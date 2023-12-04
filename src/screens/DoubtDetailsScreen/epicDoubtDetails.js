import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import Config from '../../common/Config';
import { makeGetRequest } from '../../common/NetworkOps';
import {
  errorGettingDoubts,
  GET_DOUBTS,
  gotDoubtDetails,
} from './actionDoubtDetail';

export const getDoubtsData = (id) => {
  const res = makeGetRequest(`${Config.doubtDetail.doubts}/${id}`);
  return res;
};

export const epicGetDoubtsData = (action$) => action$.pipe(
  ofType(GET_DOUBTS),
  pluck('payload'),
  mergeMap((id) => {
    return from(getDoubtsData(id)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return gotDoubtDetails(res?.data);
        }
        return errorGettingDoubts(res);
      }),
      takeUntil(action$.pipe(ofType(GET_DOUBTS))),
      catchError((error) => {
        return of(errorGettingDoubts(error.response?.data?.message || ''));
      }),
    );
  }),
);
