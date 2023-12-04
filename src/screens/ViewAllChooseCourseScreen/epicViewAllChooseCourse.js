/* eslint-disable eqeqeq */
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  GET_ALL_COURSES,
  setAllCourses,
  errorAllCourses,
} from './actionViewAllChooseCourse';

async function getCoursesAll(activeTabName, id, body) {
  // const userId = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
  const res = await makePostRequest(`${Config.course.showNewCourses}/${activeTabName.toLowerCase()}/${id}`, body);
  return res;
}

export const epicGetAllCourses = (action$, state$) => action$.pipe(
  ofType(GET_ALL_COURSES),
  pluck('payload'),
  mergeMap((id) => {
    const {
      activeTabName,
      courseCategories,
      recordedClassToggle,
      recordedCourseCategories,
    } = state$.value.reducerChooseCourses;
    const { pageNo, allCoursesData } = state$.value.reducerViewAllChooseCourses;
    const body = {
      course_category_id: recordedClassToggle ? recordedCourseCategories : courseCategories,
      pageno: pageNo,
      limit: 10,
    };
    return from(getCoursesAll(activeTabName, id, body)).pipe(
      map((res) => {
        if (res.code === 200) {
          if (pageNo > 1) {
            return setAllCourses([...allCoursesData, ...res.data.course_list]);
          } if (pageNo === 1) {
            return setAllCourses(res?.data?.course_list);
          }
        }
        // eslint-disable-next-line no-alert
        alert(res?.message);
        return errorAllCourses(res);
      }),
      takeUntil(action$.pipe(ofType(GET_ALL_COURSES))),
      catchError((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response?.data?.message || '');
        return of(errorAllCourses(error.response?.data?.message || ''));
      }),
    );
  }),
);
