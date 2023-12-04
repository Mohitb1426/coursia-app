import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { GET_QUIZ_QUESTION_SHEET, setQuizQuestionSheet, errorQuizQuestionSheet } from './actionQuizResultQuestionSheet';
import { makeGetRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';

// const TAG = 'epicScreenLogin';

export async function getResultQuesSheetData(data) {
  const {
    moduleId, courseGroupId, unitGroupId, examId,
  } = data;
  const res = await makeGetRequest(`${Config.quizResult.getQuestSheet}?module_id=${moduleId}&course_id=${courseGroupId}&unit_id=${unitGroupId}&exam_id=${examId}`);
  return res;
}

export const epicGetResultQuesSheetData = (action$, state$) => action$.pipe(
  ofType(GET_QUIZ_QUESTION_SHEET),
  pluck('payload'),
  mergeMap((id) => {
    const { courseGroupId } = state$.value.reducerChooseCourses;
    const { examId, unitGroupId } = state$.value.reducerQuizUnit;
    const body = {
      moduleId: id,
      courseGroupId,
      unitGroupId,
      examId,
    };
    return from(getResultQuesSheetData(body)).pipe(
      map((res) => {
        if (res.code === 200) return setQuizQuestionSheet(res?.data);
        return setQuizQuestionSheet(res);
      }),
      takeUntil(action$.pipe(ofType(GET_QUIZ_QUESTION_SHEET))),
      catchError((error) => {
        return of(errorQuizQuestionSheet(error.response?.data?.message || ''));
      }),
    );
  }),
);
