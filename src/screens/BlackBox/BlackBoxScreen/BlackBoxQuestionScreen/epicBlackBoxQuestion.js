/* eslint-disable eqeqeq */
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { makeGetRequest, makePostRequest } from '../../../../common/NetworkOps';
import Config from '../../../../common/Config';
import {
  GET_QUESTIONS_LIST,
  setQuestionList,
  errorGetQuestionList,
  BLACK_BOX_QUIZ_SUBMIT,
  blackBoxQuizSubmitted,
  errorBlackBoxQuizSubmit,
} from './actionBlackBoxQuestion';
// import StorageUtils from '../../../../common/StorageUtils';
// import AsyncKeys from '../../../../common/AsyncKeys';
// import { Routes } from '../../../../routes/Routes';
// import { quizQuestionData } from '../../DummyData';

async function getBlackBoxQuestionList(URL) {
  const res = await makeGetRequest(`${Config.blackBox.getBlackBoxQuizQuestionList}${URL}`);
  return res;
}

async function submitBlackBoxQuiz(data) {
  const res = await makePostRequest(Config.blackBox.blackBoxQuizSubmitURL, data);
  return res;
}

export const epicBlackBoxQuestionList = (action$, state$) => action$.pipe(
  ofType(GET_QUESTIONS_LIST),
  pluck('payload'),
  mergeMap(() => {
    const {
      checkUnattempted,
      checkIncorrect,
      retakePopupData,
    } = state$.value.reducerBlackBoxQuizDetailList;
    let type = 'all';
    if (checkIncorrect || checkUnattempted) {
      type = 'all';
    }
    if (checkIncorrect && !checkUnattempted) {
      type = 'incorrect';
    }
    if (!checkIncorrect && checkUnattempted) {
      type = 'unattempted';
    }
    const URL = `?module_id=${retakePopupData?.module_id}&section_id=${retakePopupData?.section_id}&type=${type}&course_id=${retakePopupData?.course_id}&unit_id=${retakePopupData?.unit_id}`;
    return from(getBlackBoxQuestionList(URL)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return setQuestionList(res?.data);
        }
        return errorGetQuestionList(res);
      }),
      takeUntil(action$.pipe(ofType(GET_QUESTIONS_LIST))),
      catchError((error) => {
        return of(errorGetQuestionList(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicBlackBoxSubmitQuiz = (action$, state$) => action$.pipe(
  ofType(BLACK_BOX_QUIZ_SUBMIT),
  pluck('payload'),
  mergeMap(() => {
    const {
      retakePopupData,
    } = state$.value.reducerBlackBoxQuizDetailList;
    const {
      quizQuestionList, examId,
    } = state$.value.reducerBlackBoxQuestion;
    const {
      course_id, unit_id, module_id, section_id,
    } = retakePopupData;
    const data = {
      exam_id: examId,
      module_id,
      course_id,
      unit_id,
      section_id,
      questions: quizQuestionList,
    };
    return from(submitBlackBoxQuiz(data)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return blackBoxQuizSubmitted(res?.data);
        }
        return errorBlackBoxQuizSubmit(res);
      }),
      takeUntil(action$.pipe(ofType(BLACK_BOX_QUIZ_SUBMIT))),
      catchError((error) => {
        return of(errorBlackBoxQuizSubmit(error.response?.data?.message || ''));
      }),
    );
  }),
);
