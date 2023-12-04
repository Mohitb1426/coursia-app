import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, takeUntil, catchError,
} from 'rxjs/operators';
import { makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  errorOnPaidPdfOrVideoData, errorOnVideoData, GET_PAID_PDF_DATA,
  GET_PAID_Video_DATA,
  GET_PDF_DATA,
  navigateToViewPdf,
  setCourseUnitViewedArray, setMyCourseUnitViewedArray, SET_COURSE_UNIT_DATA,
} from './actionCourseUnit';
import { setPaidVideoData, setPdfData, setVideoData } from '../MediaPlayerScreen/actionMediaPlayer';
import { getOfflineDownloadData } from '../DownloadCourseScreen/actionDownloadCourse';

async function getPaidVideoPdfData(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.video.paidVideoPdfLink, body);
  return res;
}

async function getVideoData(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.video.getFreemiumVideoData, body);
  return res;
}

export const epicGetPaidVideoData = (action$, state$) => action$.pipe(
  ofType(GET_PAID_Video_DATA),
  pluck('payload'),
  mergeMap((data) => {
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const { myCourseUnitViewedArray } = state$.value.reducerCourseUnit;
    const body = {
      unit_id: data?.unit_id,
      course_id: activeCourseId,
      batch_id: data?.batch_id,
      module_id: data?.id,
    };
    const viewedVideo = [...myCourseUnitViewedArray, data?.id];
    return from(getPaidVideoPdfData(body)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            setPaidVideoData(res),
            setMyCourseUnitViewedArray(viewedVideo),
          );
        }
        return of(errorOnPaidPdfOrVideoData(res));
      }),
      takeUntil(action$.pipe(ofType(GET_PAID_Video_DATA))),
      catchError((error) => {
        return of(errorOnPaidPdfOrVideoData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetPaidPdfData = (action$, state$) => action$.pipe(
  ofType(GET_PAID_PDF_DATA),
  pluck('payload'),
  mergeMap((data) => {
    const { isTamil } = data;
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const { myCourseUnitViewedArray } = state$.value.reducerCourseUnit;
    const body = {
      unit_id: data?.unit_id,
      course_id: activeCourseId,
      batch_id: data?.batch_id,
      module_id: data?.id,
    };
    const viewedPdf = [...myCourseUnitViewedArray, data?.id];
    return from(getPaidVideoPdfData(body)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            setPdfData(res),
            setMyCourseUnitViewedArray(viewedPdf),
            getOfflineDownloadData({ isTamil }),
            navigateToViewPdf(true),
          );
        }
        return errorOnPaidPdfOrVideoData(res);
      }),
      takeUntil(action$.pipe(ofType(GET_PAID_PDF_DATA))),
      catchError((error) => {
        return of(errorOnPaidPdfOrVideoData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetVideoData = (action$, state$) => action$.pipe(
  ofType(SET_COURSE_UNIT_DATA),
  pluck('payload'),
  mergeMap((data) => {
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const { courseUnitViewedArray } = state$.value.reducerCourseUnit;
    const body = {
      unit_id: data?.unit_id,
      course_id: activeCourseId,
      batch_id: data?.batch_id,
      module_id: data?.id,
    };
    const viewedVideo = [...courseUnitViewedArray, data?.id];
    return from(getVideoData(body)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            setVideoData(res),
            setCourseUnitViewedArray(viewedVideo),
          );
        }
        return of(errorOnVideoData(res));
      }),
      takeUntil(action$.pipe(ofType(SET_COURSE_UNIT_DATA))),
      catchError((error) => {
        return of(errorOnVideoData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetPdfData = (action$, state$) => action$.pipe(
  ofType(GET_PDF_DATA),
  pluck('payload'),
  mergeMap((data) => {
    const { isTamil } = data;
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const { courseUnitViewedArray } = state$.value.reducerCourseUnit;
    const body = {
      unit_id: data?.unit_id,
      course_id: activeCourseId,
      batch_id: data?.batch_id,
      module_id: data?.id,
    };
    const viewedPdf = [...courseUnitViewedArray, data?.id];
    return from(getVideoData(body)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            setPdfData(res),
            setCourseUnitViewedArray(viewedPdf),
            getOfflineDownloadData({ isTamil }),
            navigateToViewPdf(true),
          );
        }
        return of(errorOnVideoData(res));
      }),
      takeUntil(action$.pipe(ofType(GET_PDF_DATA))),
      catchError((error) => {
        return of(errorOnVideoData(error.response?.data?.message || ''));
      }),
    );
  }),
);
