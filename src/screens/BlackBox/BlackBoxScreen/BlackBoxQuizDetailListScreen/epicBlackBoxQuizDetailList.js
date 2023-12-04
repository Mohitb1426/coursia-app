/* eslint-disable eqeqeq */
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { makeGetRequest } from '../../../../common/NetworkOps';
import Config from '../../../../common/Config';
import {
  GET_QUIZ_DETAIL_LIST,
  setQuizDetailList,
  errorGetQuizDetailList,
} from './actionBlackBoxQuizDetailList';

async function getBlackBoxDetailListData(data, pageNo) {
  const res = await makeGetRequest(`${Config.blackBox.getBlackBoxQuizDetailList}/${data}?limit=20&page=${pageNo}`);
  return res;
}

export const epicBlackBoxDetailListData = (action$, state$) => action$.pipe(
  ofType(GET_QUIZ_DETAIL_LIST),
  pluck('payload'),
  mergeMap((data) => {
    const {
      pageNo,
      quizQuestionList,
    } = state$.value.reducerBlackBoxQuizDetailList;
    return from(getBlackBoxDetailListData(data, pageNo)).pipe(
      map((res) => {
        if (res?.code === 200) {
          if (pageNo > 1) {
            return setQuizDetailList([...quizQuestionList, ...res.data]);
          }
          if (pageNo === 1) { return setQuizDetailList(res?.data); }
        }
        return errorGetQuizDetailList(res);
      }),
      takeUntil(action$.pipe(ofType(GET_QUIZ_DETAIL_LIST))),
      catchError((error) => {
        return of(errorGetQuizDetailList(error.response?.data?.message || ''));
      }),
    );
  }),
);
