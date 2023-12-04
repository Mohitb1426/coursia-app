/* eslint-disable eqeqeq */
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { makeGetRequest } from '../../../../common/NetworkOps';
import Config from '../../../../common/Config';
import {
  GET_DASHBOARD_SUMMARY_DATA,
  setDashBoardSummary,
  errorGetDashBoardSummary,
  GET_DASHBOARD_ANALYSIS_DATA,
  setDashBoardAnalysisListData,
  errorGetDashBoardAnalysisListData,
  CHECK_ACTIVE_FEATURE_BLACK_BOX,
  setActiveFeatureBlackBox,
  errorCheckingActiveFeatureBlackBox,
} from './actionBlackBoxDashBoard';
// import StorageUtils from '../../../../common/StorageUtils';
// import AsyncKeys from '../../../../common/AsyncKeys';
// import { Routes } from '../../../../routes/Routes';

async function getBlackBoxDashBoardSummary() {
  const res = await makeGetRequest(`${Config.blackBox.getBlackBoxSummary}`);
  return res;
}

async function getBlackBoxDashBoardAnalysis() {
  const res = await makeGetRequest(`${Config.blackBox.getBlackBoxAnalysis}`);
  return res;
}

async function enableActiveFeatureBlackBox(id) {
  const res = await makeGetRequest(`${Config.comments.activeFeature}/${id}`);
  return res;
}

export const epicBlackBoxSummaryData = (action$) => action$.pipe(
  ofType(GET_DASHBOARD_SUMMARY_DATA),
  pluck('payload'),
  mergeMap(() => {
    return from(getBlackBoxDashBoardSummary()).pipe(
      map((res) => {
        if (res?.code === 200) {
          return setDashBoardSummary(res?.data);
        }
        return errorGetDashBoardSummary(res);
      }),
      takeUntil(action$.pipe(ofType(GET_DASHBOARD_SUMMARY_DATA))),
      catchError((error) => {
        return of(errorGetDashBoardSummary(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicBlackBoxAnalysisData = (action$) => action$.pipe(
  ofType(GET_DASHBOARD_ANALYSIS_DATA),
  pluck('payload'),
  mergeMap(() => {
    return from(getBlackBoxDashBoardAnalysis()).pipe(
      map((res) => {
        if (res?.code === 200) {
          return setDashBoardAnalysisListData(res?.data);
        }
        return errorGetDashBoardAnalysisListData(res);
      }),
      takeUntil(action$.pipe(ofType(GET_DASHBOARD_ANALYSIS_DATA))),
      catchError((error) => {
        return of(errorGetDashBoardAnalysisListData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicCheckActiveFeatureBlackBox = (action$, state$) => action$.pipe(
  ofType(CHECK_ACTIVE_FEATURE_BLACK_BOX),
  pluck('payload'),
  mergeMap(() => {
    const { featureListData } = state$.value.reducerIntro;
    const { Blackbox } = featureListData;
    return from(enableActiveFeatureBlackBox(Blackbox)).pipe(
      map((res) => {
        if (res?.code === 200) {
          if (res?.data) {
            return setActiveFeatureBlackBox(!res.data);
          }
          return setActiveFeatureBlackBox(false);
        }
        if (res?.code === 500) {
          return setActiveFeatureBlackBox(true);
        }
        return errorCheckingActiveFeatureBlackBox(res);
      }),
      takeUntil(action$.pipe(ofType(CHECK_ACTIVE_FEATURE_BLACK_BOX))),
      catchError((error) => {
        return of(errorCheckingActiveFeatureBlackBox(error.response?.data?.message || ''));
      }),
    );
  }),
);
