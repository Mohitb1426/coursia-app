import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, takeUntil, catchError, map,
} from 'rxjs/operators';
// import { Alert } from 'react-native';
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  errorGettingQuizCourses,
  errorGettingStandardList,
  errorGettingSubjectList, GET_QUIZ_COURSES,
  GET_STANDARD_LIST, GET_SUBJECT_LIST,
  gotData,
  gotQuizCourses,
  gotStandardList, gotSubjectList, isDataNull, isFooterLoading,
} from './actionQuizByCategory';

export async function getSubjectListData() {
  const res = await makeGetRequest(Config.quizByCategory.getSubjectList);
  return res;
}

export async function getStandardListData() {
  const res = await makeGetRequest(Config.quizByCategory.getStandardList);
  return res;
}

export async function getCourseQuizData(data) {
  const res = await makePostRequest(Config.quizByCategory.getCourseList, data);
  return res;
}

export const epicGetSubjectList = (action$) => action$.pipe(
  ofType(GET_SUBJECT_LIST),
  pluck('payload'),
  mergeMap(() => {
    return from(getSubjectListData()).pipe(
      map((res) => {
        if (res.code === 200) {
          const subjectListData = res?.data?.map((ele) => {
            return { ...ele, isSubject: true };
          });
          return gotSubjectList(subjectListData);
        }
        return errorGettingSubjectList(res);
      }),
      takeUntil(action$.pipe(ofType(GET_SUBJECT_LIST))),
      catchError((error) => {
        return of(errorGettingSubjectList(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetStandardList = (action$) => action$.pipe(
  ofType(GET_STANDARD_LIST),
  pluck('payload'),
  mergeMap(() => {
    return from(getStandardListData()).pipe(
      map((res) => {
        // console.log('standard list', res);
        if (res.code === 200) {
          const standardListData = res?.data?.map((ele) => {
            return { ...ele, isSubject: false };
          });
          return gotStandardList(standardListData);
        }
        return errorGettingStandardList(res);
      }),
      takeUntil(action$.pipe(ofType(GET_STANDARD_LIST))),
      catchError((error) => {
        return of(errorGettingStandardList(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetQuizCourses = (action$, state$) => action$.pipe(
  ofType(GET_QUIZ_COURSES),
  pluck('payload'),
  mergeMap(() => {
    const { selectedSubject, selectedStandard, pageNumber } = state$.value.reducerQuizByCategory;
    const body = {
      subject_id: selectedSubject?.length > 0 ? selectedSubject : [],
      class_id: selectedStandard?.length > 0 ? selectedStandard : [],
      pageno: pageNumber,
      limit: 20,
    };
    return from(getCourseQuizData(body)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          if (res?.data?.length === 0) {
            return of(isFooterLoading(false), gotData(true), isDataNull());
          }
          return of(gotQuizCourses(res?.data), gotData(true));
        }
        // eslint-disable-next-line no-alert
        alert(`Error : ${res?.message}`);
        return errorGettingQuizCourses(res);
      }),
      takeUntil(action$.pipe(ofType(GET_QUIZ_COURSES))),
      catchError((error) => {
        return of(errorGettingQuizCourses(error.response?.data?.message || ''));
      }),
    );
  }),
);
