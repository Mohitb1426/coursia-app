import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { GET_GRAPH_RESULT_DATA, setGraphResultData, errorGraphResultData } from './actionResultGraph';
import { makeGetRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import { Routes } from '../../routes/Routes';

// const TAG = 'epicScreenLogin';

export async function getResultGraphData(data) {
  const {
    moduleId, courseGroupId, unitGroupId, examId,
  } = data;
  const res = await makeGetRequest(`${Config.quizResult.getGraphResult}?module_id=${moduleId}&course_id=${courseGroupId}&unit_id=${unitGroupId}
  &exam_id=${examId}`);
  return res;
}

export const epicGetResultGraphData = (action$, state$) => action$.pipe(
  ofType(GET_GRAPH_RESULT_DATA),
  pluck('payload'),
  mergeMap((item) => {
    const { examId, unitGroupId } = state$.value.reducerQuizUnit;
    const { courseGroupId } = state$.value.reducerChooseCourses;
    const body = {
      moduleId: item.module_ID,
      courseGroupId,
      unitGroupId,
      examId,
    };
    return from(getResultGraphData(body)).pipe(
      map((res) => {
        if (res.code === 200) {
          item.navigation.navigate(Routes.SCREEN_QUIZ_RESULT_GRAPH, { module_ID: item?.module_ID });
          return setGraphResultData(res?.data);
        }
        return errorGraphResultData(res);
      }),
      takeUntil(action$.pipe(ofType(GET_GRAPH_RESULT_DATA))),
      catchError((error) => {
        return of(errorGraphResultData(error.response?.data?.message || ''));
      }),
    );
  }),
);
