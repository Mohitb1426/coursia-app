import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, takeUntil, catchError,
} from 'rxjs/operators';
import { makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import { setPdfData } from '../MediaPlayerScreen/actionMediaPlayer';
import { Routes } from '../../routes/Routes';
import {
  errorOnVideoData, GET_PDF_DATA, setCourseUnitViewedArray,
} from '../MyCourseUnitScreen/actionCourseUnit';

async function getVideoData(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.video.getFreemiumVideoData, body);
  return res;
}

export const epicGetPdfData = (action$, state$) => action$.pipe(
  ofType(GET_PDF_DATA),
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
    const viewedPdf = [...courseUnitViewedArray, data?.id];
    return from(getVideoData(body)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          data?.navigation.navigate(Routes.SCREEN_VIEW_PDF);
          return of(
            setPdfData(res),
            setCourseUnitViewedArray(viewedPdf),
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
