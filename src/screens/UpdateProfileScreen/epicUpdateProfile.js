/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  gettingUserProfileError,
  getUserProfile,
  getUserProfileFromAskDoubt,
  getUserProfileFromCommentQuiz,
  GET_PROFILE_IMAGE,
  GET_USER_PROFILE,
  GET_USER_PROFILE_FROM_ASK_DOUBT,
  GET_USER_PROFILE_FROM_COMMENT_QUIZ,
  setProfileImage,
  setProfileUpdated,
  setUserProfile,
  setUserProfileFromAskDoubt,
  setUserProfileFromCommentQuiz,
  UPDATE_PROFILE,
  UPDATE_USER_PROFILE,
} from './actionUpdateProfile';
import { fromAskDoubtScreen, uploadUserComment } from '../AskDoubtScreen/actionAskDoubt';
import { Routes } from '../../routes/Routes';
import {
  createQuizComment,
  setFromQuizResult,
} from '../QuizResultAnswerScreen/actionQuizResultAnswer';
import StorageUtils from '../../common/StorageUtils';
import AsyncKeys from '../../common/AsyncKeys';
import { LANGUAGE_ENGLISH } from '../../common/LocalizationProvider';

// const TAG = 'epicScreenLogin';

export async function addCourse(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.course.addFreeCourse, body);
  return res;
}

export async function getPaymentLink(data) {
  const res = await makePostRequest(Config.course.generatePaymentLink, data);
  return res;
}

export async function getUserDetails() {
  const res = await makeGetRequest(Config.auth.userProfile);
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
    email: data?.email,
  };
  const res = await makePostRequest(Config.auth.userProfileUpdate, body);
  return res;
}

export async function getProfilePhoto(data) {
  let response;
  const lang = StorageUtils.getString(
    AsyncKeys.ASYNC_KEY_SELECTED_APP_LANGUAGE,
    LANGUAGE_ENGLISH,
  );
  const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null);
  const userId = StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
  const langCode = lang === LANGUAGE_ENGLISH ? 1 : 2;
  await fetch(Config.auth.userProfileImage, {
    method: 'post',
    headers: {
      Accept: 'application/x-www-form-urlencoded',
      'auth-bearer': token,
      'auth-id': userId,
      'language-code': langCode,
    },
    body: data,
    timeout: 18000,
  }).then((res) => res.json())
    .then((res) => {
      response = res;
    })
    .catch((error) => {
      const errorObject = {
        code: 201,
        message: 'Failure',
        data: error,
      };
      response = errorObject;
    });
  return response;
}

export const epicUpdateProfile = (action$) => action$.pipe(
  ofType(UPDATE_USER_PROFILE),
  pluck('payload'),
  mergeMap((data) => {
    return from(updateUserProfileData(data?.cData)).pipe(
      mergeMap((res) => {
        if (res?.status_code === 200) {
          return of(setProfileUpdated(true), getUserProfile(data?.navigation));
        }
        return of(gettingUserProfileError(res));
      }),
      takeUntil(action$.pipe(ofType(UPDATE_USER_PROFILE))),
      catchError((error) => {
        return of(gettingUserProfileError(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicProfileUpdate = (action$, state$) => action$.pipe(
  ofType(UPDATE_PROFILE),
  pluck('payload'),
  mergeMap((data) => {
    const { fromQuizResults } = state$.value.reducerQuizResultAnswer;
    const { navigationFromAskDoubt } = state$.value.reducerAskDoubt;
    return from(updateUserProfileData(data?.cData)).pipe(
      mergeMap((res) => {
        if (res?.status_code === 200) {
          if (navigationFromAskDoubt) {
            return of(fromAskDoubtScreen(false), getUserProfileFromAskDoubt(data?.navigation));
          }
          if (fromQuizResults) {
            return of(setFromQuizResult(false), getUserProfileFromCommentQuiz(data?.navigation));
          }
        }
        return of(gettingUserProfileError(res));
      }),
      takeUntil(action$.pipe(ofType(UPDATE_PROFILE))),
      catchError((error) => {
        return of(gettingUserProfileError(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetDetails = (action$, state$) => action$.pipe(
  ofType(GET_USER_PROFILE),
  pluck('payload'),
  mergeMap((data) => {
    const { isComingFromDrawer } = state$.value.reducerDrawer;
    const { profileUpdated } = state$.value.reducerUpdateProfile;
    return from(getUserDetails()).pipe(
      map((res) => {
        if (res?.status_code === 200) {
          if (isComingFromDrawer && profileUpdated) {
            data.goBack();
          }
          return setUserProfile(res?.data);
        }
        return gettingUserProfileError(res);
      }),
      takeUntil(action$.pipe(ofType(GET_USER_PROFILE))),
      catchError((error) => {
        return of(gettingUserProfileError(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epiGetDetailsFromAskDoubt = (action$) => action$.pipe(
  ofType(GET_USER_PROFILE_FROM_ASK_DOUBT),
  pluck('payload'),
  mergeMap((data) => {
    return from(getUserDetails()).pipe(
      mergeMap((res) => {
        if (res?.status_code === 200) {
          data.navigate(Routes.SCREEN_ASK_DOUBT);
          return of(setUserProfileFromAskDoubt(res?.data), uploadUserComment());
        }
        return of(gettingUserProfileError(res));
      }),
      takeUntil(action$.pipe(ofType(GET_USER_PROFILE_FROM_ASK_DOUBT))),
      catchError((error) => {
        return of(gettingUserProfileError(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epiGetDetailsFromCommentQuiz = (action$) => action$.pipe(
  ofType(GET_USER_PROFILE_FROM_COMMENT_QUIZ),
  pluck('payload'),
  mergeMap((data) => {
    return from(getUserDetails()).pipe(
      mergeMap((res) => {
        if (res?.status_code === 200) {
          data?.goBack();
          return of(setUserProfileFromCommentQuiz(res?.data), createQuizComment());
        }
        return of(gettingUserProfileError(res));
      }),
      takeUntil(action$.pipe(ofType(GET_USER_PROFILE_FROM_COMMENT_QUIZ))),
      catchError((error) => {
        return of(gettingUserProfileError(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetProfileImage = (action$) => action$.pipe(
  ofType(GET_PROFILE_IMAGE),
  pluck('payload'),
  mergeMap((data) => {
    const formData = new FormData();
    formData.append('file', {
      uri: data.uri,
      type: data.type,
      name: data.name,
    });
    return from(getProfilePhoto(formData)).pipe(
      mergeMap((res) => {
        if (res?.status_code === 200) {
          return of(setProfileImage(res?.data?.image_url));
        }
        return of(gettingUserProfileError(res));
      }),
      takeUntil(action$.pipe(ofType(GET_PROFILE_IMAGE))),
      catchError((error) => {
        return of(gettingUserProfileError(error.response?.data?.message || ''));
      }),
    );
  }),
);
