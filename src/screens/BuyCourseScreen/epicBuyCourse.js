/* eslint-disable no-alert */
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  ADD_FREE_COURSE, gettingErrorOnBuy,
  gettingUserProfileError, getUserProfile, GET_USER_PROFILE,
  userProfileUpdated, GENERATE_A_PAYMENT_LINK, GENERATE_A_PAYMENT_LINK_FOR_COURSE_UNIT,
  setUserProfile,
  UPDATE_USER_PROFILE,
  setPaymentLink,
  setIsDataUpdated, GET_COURSE_UNIT_DATA,
  errorGettingCourseUnitData, generatePaymentLink,
  VERIFICATION_PAYMENT,
  errorGettingVerificationLink,
  paymentVerificationComplete,
  setNavigateToBuyCourse,
  isFormFilled,
  setCourseTransactionId,
  updateLoader,
} from './actionBuyCourseScreen';
import StorageUtils from '../../common/StorageUtils';
import AsyncKeys from '../../common/AsyncKeys';
import { Routes } from '../../routes/Routes';
import { setCourseData } from '../ChooseCoursesScreen/actionChooseCourses';

// const TAG = 'epicScreenLogin';

export async function addCourse(data) {
  const userId = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
  const body = {
    ...data,
    user_id: userId,
  };
  const res = await makePostRequest(Config.course.addFreeCourse, body);
  return res;
}

export async function getPaymentLink(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.course.generatePaymentLink, body);
  return res;
}
export async function getUserDetails() {
  const res = await makeGetRequest(Config.auth.userProfile);
  return res;
}

export async function verifyPayment(data) {
  const res = await makePostRequest(Config.course.verifyPaymentData, data);
  return res;
}

export async function updateUserProfileData(data) {
  const body = {
    first_name: data?.firstName,
    last_name: data?.lastName,
    add1: data?.address1,
    add2: data?.address2,
    state: data?.state,
    city: data?.city,
    pincode: data?.pincode,
  };
  const res = await makePostRequest(Config.auth.userProfileUpdate, body);
  return res;
}

async function setCourseDetailById(groupId) {
  const userId = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
  const res = await makeGetRequest(`${Config.course.courses}${groupId}/${userId}`);
  return res;
}

function checkProfileData(data) {
  const {
    first_middle_name, last_name, address1, state, city, pincode,
  } = data;
  if (first_middle_name && last_name && address1 && state && city && pincode) {
    // console.log('We have data');
    return true;
  }
  // console.log('We do not have data');
  return false;
}

export const epicAddCourse = (action$, state$) => action$.pipe(
  ofType(ADD_FREE_COURSE),
  pluck('payload'),
  mergeMap((data) => {
    const { courseUnitData } = state$.value.reducerChooseCourses;
    const { id } = courseUnitData[0];
    const body = {
      course_id: id,
      batch_id: 0,
    };
    return from(addCourse(body)).pipe(
      map((res) => {
        if (res.status_code === 200) {
          data.navigate(Routes.SCREEN_MY_COURSES);
          return null;
        }
        return gettingErrorOnBuy();
      }),
      takeUntil(action$.pipe(ofType(ADD_FREE_COURSE))),
      catchError((error) => {
        return of(gettingErrorOnBuy(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetCourseUnitData = (action$, state$) => action$.pipe(
  ofType(GET_COURSE_UNIT_DATA),
  pluck('payload'),
  mergeMap(() => {
    const { courseGroupId } = state$.value.reducerChooseCourses;
    return from(setCourseDetailById(courseGroupId)).pipe(
      mergeMap((res) => {
        // console.log('res', res);
        if (res?.code === 200) {
          return of(
            setCourseData(res?.data),
            generatePaymentLink(),
          );
        }
        // eslint-disable-next-line no-alert
        alert(res?.message);
        return of(errorGettingCourseUnitData(res));
      }),
      takeUntil(action$.pipe(ofType(GET_COURSE_UNIT_DATA))),
      catchError((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response?.data?.message || '');
        return of(errorGettingCourseUnitData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicCreatePaymentLink = (action$, state$) => action$.pipe(
  ofType(GENERATE_A_PAYMENT_LINK),
  pluck('payload'),
  mergeMap(() => {
    const { courseUnitData } = state$.value.reducerChooseCourses;
    const { id } = courseUnitData[0];
    const body = {
      course_id: id,
    };
    return from(getPaymentLink(body)).pipe(
      mergeMap((res) => {
        // console.log('res', res);
        if (res.code === 200) {
          return of(
            setPaymentLink(res?.data),
          );
        }
        setTimeout(() => {
          alert(res?.message);
        }, 500);
        return of(gettingErrorOnBuy(res));
      }),
      takeUntil(action$.pipe(ofType(GENERATE_A_PAYMENT_LINK))),
      catchError((error) => {
        return of(gettingErrorOnBuy(error.response?.data?.message || ''));
      }),
    );
  }),
);
export const epicCreatePaymentLinkForCourse = (action$, state$) => action$.pipe(
  ofType(GENERATE_A_PAYMENT_LINK_FOR_COURSE_UNIT),
  pluck('payload'),
  mergeMap(() => {
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const body = {
      course_id: activeCourseId,
    };
    return from(getPaymentLink(body)).pipe(
      map((res) => {
        // console.log('from epicCreatePaymentLinkForCourse');
        if (res.code === 200) return setPaymentLink(res?.data);
        setTimeout(() => {
          alert(res?.message);
        }, 500);
        return gettingErrorOnBuy();
      }),
      takeUntil(action$.pipe(ofType(GENERATE_A_PAYMENT_LINK_FOR_COURSE_UNIT))),
      catchError((error) => {
        return of(gettingErrorOnBuy(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicUpdateUserProfile = (action$, state$) => action$.pipe(
  ofType(UPDATE_USER_PROFILE),
  pluck('payload'),
  mergeMap((data) => {
    const { isComingFromDrawer } = state$.value.reducerDrawer;
    return from(updateUserProfileData(data)).pipe(
      mergeMap((res) => {
        if (res?.status_code === 200) {
          return of(
            getUserProfile(),
            userProfileUpdated(!isComingFromDrawer),
            setIsDataUpdated(true),
          );
        }
        alert(res?.message);
        return of(gettingUserProfileError(res));
      }),
      takeUntil(action$.pipe(ofType(UPDATE_USER_PROFILE))),
      catchError((error) => {
        alert(error.response?.data?.message || '');
        return of(gettingUserProfileError(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetUserDetails = (action$) => action$.pipe(
  ofType(GET_USER_PROFILE),
  pluck('payload'),
  mergeMap(() => {
    return from(getUserDetails()).pipe(
      mergeMap((res) => {
        if (res?.status_code === 200) {
          if (checkProfileData(res?.data)) {
            return of(
              setUserProfile(res?.data),
              setNavigateToBuyCourse(false),
              isFormFilled(true),
            );
          }
          return of(
            setUserProfile(res?.data),
            setNavigateToBuyCourse(true),
            isFormFilled(false),
          );
        }
        alert(res?.message);
        return of(gettingUserProfileError(res));
      }),
      takeUntil(action$.pipe(ofType(GET_USER_PROFILE))),
      catchError((error) => {
        alert(error.response?.data?.message || '');
        return of(gettingUserProfileError(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicVerifyPayment = (action$) => action$.pipe(
  ofType(VERIFICATION_PAYMENT),
  pluck('payload'),
  mergeMap((data) => {
    return from(verifyPayment(data)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            updateLoader(true),
            paymentVerificationComplete(),
            setCourseTransactionId(data?.razorpay_payment_id),
          );
        }
        return of(errorGettingVerificationLink(res));
      }),
      takeUntil(action$.pipe(ofType(VERIFICATION_PAYMENT))),
      catchError((error) => {
        return of(errorGettingVerificationLink(error.response?.data?.message || ''));
      }),
    );
  }),
);
