/* eslint-disable eqeqeq */
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  GET_COURSES,
  gotCourses,
  gotErrorFetchingCourseData,
  gotErrorFetchingCourseDetail,
  gotErrorFetchingCourses,
  setCourseData,
  SET_COURSE_DETAIL,
  SET_COURSE_DETAIL_BY_ID,
  GET_COURSE_SUMMARY,
  gotCourseSummary,
  gotErrorFetchingCourseSummary,
  getCourseSummary,
  setCourseModuleDetails,
  setAssessmentName,
  isQuizBuy,
  GET_COURSE_CATEGORIES_LIST,
  setCourseCategoriesList,
  errorGetCourseCategoriesList,
} from './actionChooseCourses';
import StorageUtils from '../../common/StorageUtils';
import AsyncKeys from '../../common/AsyncKeys';
import { Routes } from '../../routes/Routes';

async function getCourses(activeTabName, data, body) {
  // const userId = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
  const res = await makePostRequest(
    `${Config.course.showNewCourses}/${activeTabName.toLowerCase()}/${data}`,
    body,
  );
  return res;
}
async function setCourseDetail(data) {
  const res = await makeGetRequest(`${Config.quiz.getQuizModule}${data?.item?.course_group_id}`);
  return res;
}

async function setCourseDetailById(data) {
  const userId = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
  const res = await makeGetRequest(`${Config.course.courses}${data?.item?.course_group_id}/${userId}`);
  return res;
}

async function setCourseSummaryById(data) {
  const res = await makeGetRequest(`${Config.course.courseSummary}${data?.item?.id}`);
  return res;
}

async function getCategoryCourseList() {
  const res = await makeGetRequest(`${Config.course.categoryCourseListUrl}`);
  // console.log('------------------------------>', JSON.stringify(res, undefined, 2));
  return res;
}

export const epicGetCourses = (action$, state$) => action$.pipe(
  ofType(GET_COURSES),
  pluck('payload'),
  mergeMap((data) => {
    const {
      activeTabName,
      courseCategories,
      pageNo,
      coursesData,
      recordedClassToggle,
      recordedCourseCategories,
    } = state$.value.reducerChooseCourses;
    const body = {
      course_category_id: recordedClassToggle ? recordedCourseCategories : courseCategories,
      pageno: pageNo,
      limit: 10,
    };
    return from(getCourses(activeTabName, data, body)).pipe(
      map((res) => {
        if (res.code === 200) {
          if (pageNo > 1) {
            return gotCourses([...coursesData, ...res.data]);
          }
          if (pageNo === 1) { return gotCourses(res?.data); }
        }
        // eslint-disable-next-line no-alert
        alert(res?.message);
        return gotErrorFetchingCourses(res);
      }),
      takeUntil(action$.pipe(ofType(GET_COURSES))),
      catchError((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response?.data?.message || '');
        return of(gotErrorFetchingCourses(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicSetCourseDetail = (action$) => action$.pipe(
  ofType(SET_COURSE_DETAIL),
  pluck('payload'),
  mergeMap((data) => {
    const { item } = data;
    // console.log('course detail item===>', item?.course_price);
    return from(setCourseDetail(data)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          if (item.course_type_clp == '4') {
            data.navigation.navigate(Routes.SCREEN_QUIZ_UNIT);
            return of(
              setCourseModuleDetails(res?.data),
              setAssessmentName(item?.display_title),
              isQuizBuy(false),
            );
          }
          data.navigation.navigate(Routes.SCREEN_COURSE_UNIT);
          return of(setCourseModuleDetails(res?.data), setAssessmentName(item?.display_title));
        }
        // eslint-disable-next-line no-alert
        alert(res?.message);
        return of(gotErrorFetchingCourseDetail(res));
      }),
      takeUntil(action$.pipe(ofType(SET_COURSE_DETAIL))),
      catchError((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response?.data?.message || '');
        return of(gotErrorFetchingCourseDetail(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicSetCourseDetailById = (action$) => action$.pipe(
  ofType(SET_COURSE_DETAIL_BY_ID),
  pluck('payload'),
  mergeMap((data) => {
    // const { item } = data;
    // console.log('course detail by Id item===>', item?.course_price);
    return from(setCourseDetailById(data)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          data.navigation.navigate('EnrollCourseScreen');
          return of(setCourseData(res?.data), getCourseSummary(data));
        }
        // eslint-disable-next-line no-alert
        alert(res?.message);
        return gotErrorFetchingCourseData(res);
      }),
      takeUntil(action$.pipe(ofType(SET_COURSE_DETAIL_BY_ID))),
      catchError((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response?.data?.message || '');
        return of(gotErrorFetchingCourseDetail(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicSetCourseSummary = (action$) => action$.pipe(
  ofType(GET_COURSE_SUMMARY),
  pluck('payload'),
  mergeMap((data) => {
    return from(setCourseSummaryById(data)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return gotCourseSummary(res?.data);
        }
        return gotErrorFetchingCourseSummary(res);
      }),
      takeUntil(action$.pipe(ofType(GET_COURSE_SUMMARY))),
      catchError((error) => {
        return of(gotErrorFetchingCourseSummary(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicCourseCategoriesList = (action$) => action$.pipe(
  ofType(GET_COURSE_CATEGORIES_LIST),
  pluck('payload'),
  mergeMap(() => {
    return from(getCategoryCourseList()).pipe(
      map((res) => {
        if (res?.code === 200) {
          return setCourseCategoriesList(res?.data);
        }
        return errorGetCourseCategoriesList(res);
      }),
      takeUntil(action$.pipe(ofType(GET_COURSE_CATEGORIES_LIST))),
      catchError((error) => {
        return of(errorGetCourseCategoriesList(error.response?.data?.message || ''));
      }),
    );
  }),
);
