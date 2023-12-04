import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  map, mergeMap, pluck, catchError, takeUntil,
} from 'rxjs/operators';
import Config from '../../common/Config';
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
import { Routes } from '../../routes/Routes';
import {
  getAllBookMark, getAllNotes, gettingErrorOnMedia, setVideoData,
} from '../MediaPlayerScreen/actionMediaPlayer';
import { setTableData } from '../MyCourseUnitScreen/actionCourseUnit';
import {
  GET_UPDATED_PROGRESS_OF_COURSE,
  errorGettingProgressOfCourse,
  getUserCourse,
  GET_USER_COURSE,
  errorGettingUserCourseData,
  GET_CONTINUE_WATCH_DATA,
  gotContinueWatchData,
  errorGettingContinueWatchData,
  GET_MY_COURSE_DATA,
  errorGettingFetchingData,
  setMyCourseUnitData,
  setCoursesDataById,
  START_CONTINUE_VIDEO,
  getContinueVideoUrl,
  GET_CONTINUE_VIDEO_URL,
  continueWatchSuccess,
} from './actionMyCourses';

async function getUpdateProgress() {
  const res = await makeGetRequest(`${Config.myCourses.readProgressBar}`);
  return res;
}

async function getCourseData() {
  const res = await makeGetRequest(`${Config.myCourses.userCoursesData}`);
  return res;
}

async function getContinueWatchData() {
  const res = await makeGetRequest(`${Config.myCourses.lastWatchedNodules}`);
  return res;
}

async function getMyCoursesData(data) {
  const res = await makeGetRequest(`${Config.myCourses.myCourses}${data?.course_id}/0`);
  return res;
}

async function getVideoData(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.video.paidVideoPdfLink, body);
  return res;
}

export const epicUpdateProgress = (action$) => action$.pipe(
  ofType(GET_UPDATED_PROGRESS_OF_COURSE),
  pluck('payload'),
  mergeMap(() => {
    return from(getUpdateProgress()).pipe(
      map((res) => {
        if (res.code === 200) return getUserCourse();
        return errorGettingProgressOfCourse(res);
      }),
      takeUntil(action$.pipe(ofType(GET_UPDATED_PROGRESS_OF_COURSE))),
      catchError((error) => {
        return of(errorGettingProgressOfCourse(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetUserCoursesData = (action$) => action$.pipe(
  ofType(GET_USER_COURSE),
  pluck('payload'),
  mergeMap(() => {
    return from(getCourseData()).pipe(
      map((res) => {
        if (res.code === 200) return setCoursesDataById(res?.data?.MyCourses[0]?.Courses);
        return errorGettingUserCourseData(res);
      }),
      takeUntil(action$.pipe(ofType(GET_USER_COURSE))),
      catchError((error) => {
        return of(errorGettingUserCourseData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetContinueWatchData = (action$) => action$.pipe(
  ofType(GET_CONTINUE_WATCH_DATA),
  pluck('payload'),
  mergeMap(() => {
    return from(getContinueWatchData()).pipe(
      map((res) => {
        if (res.code === 200) return gotContinueWatchData(res?.data);
        return errorGettingContinueWatchData(res);
      }),
      takeUntil(action$.pipe(ofType(GET_CONTINUE_WATCH_DATA))),
      catchError((error) => {
        return of(errorGettingContinueWatchData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetMyCourseData = (action$) => action$.pipe(
  ofType(GET_MY_COURSE_DATA),
  pluck('payload'),
  mergeMap((data) => {
    return from(getMyCoursesData(data)).pipe(
      map((res) => {
        if (res.code === 200) {
          const resData = res?.data?.LMSData?.CompleteData[0];
          data.navigation.navigate(Routes.SCREEN_MY_COURSE_UNIT);
          return setMyCourseUnitData(resData);
        }
        // eslint-disable-next-line no-alert
        alert(res?.message);
        return errorGettingFetchingData(res);
      }),
      takeUntil(action$.pipe(ofType(GET_MY_COURSE_DATA))),
      catchError((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response?.data?.message || '');
        return of(errorGettingFetchingData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicStartContinueVideo = (action$) => action$.pipe(
  ofType(START_CONTINUE_VIDEO),
  pluck('payload'),
  mergeMap((data) => {
    return from(getMyCoursesData(data)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          const resData = res?.data?.LMSData?.CompleteData[0];
          // eslint-disable-next-line eqeqeq
          const obj = resData?.tabWiseData.find((o) => o.Unit?.id == data?.unit_id);
          return of(
            setMyCourseUnitData(resData),
            getContinueVideoUrl(data),
            setTableData(obj?.TabData),
          );
        }
        return of(errorGettingFetchingData(res));
      }),
      takeUntil(action$.pipe(ofType(START_CONTINUE_VIDEO))),
      catchError((error) => {
        return of(errorGettingFetchingData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetContinueVideoData = (action$, state$) => action$.pipe(
  ofType(GET_CONTINUE_VIDEO_URL),
  pluck('payload'),
  mergeMap((data) => {
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const body = {
      unit_id: data?.unit_id,
      course_id: activeCourseId,
      batch_id: data?.batch_id,
      module_id: data?.module_id,
    };
    return from(getVideoData(body)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            setVideoData(res),
            getAllNotes(),
            getAllBookMark(),
            continueWatchSuccess(true),
          );
        }
        return of(gettingErrorOnMedia(res));
      }),
      takeUntil(action$.pipe(ofType(GET_CONTINUE_VIDEO_URL))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);
