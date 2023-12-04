import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, takeUntil, catchError, map,
} from 'rxjs/operators';
import { makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  errorGettingAtMaterial,
  errorGettingStandardList,
  errorGettingSubjectList, GET_MATERIALS,
  GET_STANDARD_LIST, GET_SUBJECT_LIST,
  gotData,
  gotMaterialData,
  gotStandardList, gotSubjectList, isDataNull, isFooterLoading,
} from './actionMaterialsTab';
import { getStandardListData, getSubjectListData } from '../QuizByCategoryScreen/epicQuizByCategory';

export async function getMaterialData(data) {
  const res = await makePostRequest(Config.material.getMaterials, data);
  return res;
}

export const epicGetMaterialSubjectList = (action$) => action$.pipe(
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

export const epicGetMaterialStandardList = (action$) => action$.pipe(
  ofType(GET_STANDARD_LIST),
  pluck('payload'),
  mergeMap(() => {
    return from(getStandardListData()).pipe(
      map((res) => {
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

export const epicGetMaterial = (action$, state$) => action$.pipe(
  ofType(GET_MATERIALS),
  pluck('payload'),
  mergeMap(() => {
    const { selectedSubject, selectedStandard, pageNumber } = state$.value.reducerMaterialsTab;
    const body = {
      subject_id: selectedSubject?.length > 0 ? selectedSubject : [],
      class_id: selectedStandard?.length > 0 ? selectedStandard : [],
      pageno: pageNumber,
      limit: 20,
    };
    return from(getMaterialData(body)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          if (res?.data?.length === 0) {
            return of(isFooterLoading(false), gotData(true), isDataNull());
          }
          return of(gotMaterialData(res?.data), gotData(true));
        }
        // eslint-disable-next-line no-alert
        alert(`Error : ${res?.message}`);
        return errorGettingAtMaterial(res);
      }),
      takeUntil(action$.pipe(ofType(GET_MATERIALS))),
      catchError((error) => {
        return of(errorGettingAtMaterial(error.response?.data?.message || ''));
      }),
    );
  }),
);
