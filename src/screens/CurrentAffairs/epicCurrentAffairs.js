/* eslint-disable no-underscore-dangle */
import moment from 'moment';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, takeUntil, catchError, map,
} from 'rxjs/operators';
import Config from '../../common/Config';
import { makePostRequest } from '../../common/NetworkOps';
import { gettingErrorOnMedia } from '../MediaPlayerScreen/actionMediaPlayer';
import {
  GET_AVAILABLE_DATES,
  setAvailableDatesData,
  errorAvailableDatessData,
  GET_CURRENT_AFFAIRS_DATA,
  setCurrentAffairsData,
  errorCurrentAffairsData,
  SET_CURRENT_AFFAIRS_BOOKMARK,
  errorCurrentAffairsBookmark,
  setCurrentAffairsDownloadData,
  GET_CURRENT_AFFAIRS_DOWNLOAD_DATA,
  getCurrentAffairsDownloadData,
  errorNoInternet,
  REMOVE_CURRENT_AFFAIRS_BOOKMARK,
  ADDED_CURRENT_AFFAIRS_BOOKMARK,
} from './actionCurrentAffairs';
import StorageUtils from '../../common/StorageUtils';
import AsyncKeys from '../../common/AsyncKeys';
import { APP_NAME, PLATFORM } from './ConstantCurrentAffairs';

export async function getCurrentAffairs(data) {
  const body = {
    date: data?.date,
    app: APP_NAME,
    language: 'English',
  };
  const res = await makePostRequest(Config.currentAffairs.getCurrentAffairs, body);
  return res;
}

async function getAvailableDatesData() {
  const res = await makePostRequest(Config.currentAffairs.getCADates);
  return res;
}

async function removeCABookmark(body) {
  const res = await makePostRequest(Config.currentAffairs.removeBookmark, body);
  return res;
}

async function addedCABookmark(body) {
  const res = await makePostRequest(Config.currentAffairs.addedBookmark, body);
  return res;
}

export const epicGetCurrentAffairs = (action$, state$) => action$.pipe(
  ofType(GET_CURRENT_AFFAIRS_DATA),
  pluck('payload'),
  mergeMap((data) => {
    const { currentAffairsData } = state$.value.reducerCurrentAffairs;
    return from(getCurrentAffairs(data)).pipe(
      mergeMap((res) => {
        if (res?.data?.length > 0) {
          const ca = currentAffairsData;
          ca[data?.index].data = res?.data;

          return setCurrentAffairsData(ca);
        }
        return of(errorCurrentAffairsData(res?.data), errorNoInternet(false));
      }),
      catchError((error) => {
        return of(errorCurrentAffairsData(error.response?.data?.message), errorNoInternet(true));
      }),
    );
  }),
);

export const epicGetAvailableDates = (action$) => action$.pipe(
  ofType(GET_AVAILABLE_DATES),
  pluck('payload'),
  mergeMap(() => {
    return from(getAvailableDatesData()).pipe(
      map((res) => {
        if (res?.length > 0) {
          // TODO: will remove this Sorting Logic after BE give Sorted Array.
          const dates = res;
          dates.sort((a, b) => moment(b, 'DD-MM-YYYY').diff(moment(a, 'DD-MM-YYYY')));
          return setAvailableDatesData(res);
        }
        return errorAvailableDatessData(res?.message);
      }),
      takeUntil(action$.pipe(ofType(GET_AVAILABLE_DATES))),
      catchError((error) => {
        return of(errorAvailableDatessData(error.response?.data?.message || ''));
      }),
    );
  }),
);

async function saveImageBookMark(data) {
  const { storagePath, url } = data;

  return new Promise((resolve, reject) => {
    ReactNativeBlobUtil.fs
      .writeFile(storagePath, url, 'base64')
      .then(() => {
        const successObject = {
          code: 200,
          message: 'Success',
        };
        resolve(successObject);
      })
      .catch(() => {
        const failObject = {
          code: 201,
          message: 'Fail',
        };
        reject(failObject);
      });
  });
}

export const epicSetCurrentAffairsBookmark = (action$) => action$.pipe(
  ofType(SET_CURRENT_AFFAIRS_BOOKMARK),
  pluck('payload'),
  mergeMap((data) => {
    const { currentAffairsCardData, currentAffairs, isTamil } = data;
    const { dirs } = ReactNativeBlobUtil.fs;
    // eslint-disable-next-line no-underscore-dangle
    const storagePath = `${dirs.DownloadDir}/.Veranda/${isTamil}/${currentAffairs}/${currentAffairsCardData?.Date}/${currentAffairsCardData?.heading}+${currentAffairsCardData?._id}.png`;
    const body = {
      storagePath,
      url: data?.uri,
    };
    return from(saveImageBookMark(body)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          return of(
            getCurrentAffairsDownloadData({ isTamil }),
          );
        }
        return of(errorCurrentAffairsBookmark());
      }),
      takeUntil(action$.pipe(ofType(SET_CURRENT_AFFAIRS_BOOKMARK))),
      catchError(() => {
        return of(errorCurrentAffairsBookmark());
      }),
    );
  }),
);

async function getCurrentAffairsOfflineData(body) {
  const { path } = body;
  return new Promise((resolve, reject) => {
    const offlineVideoData = [];
    ReactNativeBlobUtil.fs.ls(path)
      .then((course) => {
        for (let i = 0; i < course.length; i += 1) {
          ReactNativeBlobUtil.fs.ls(`${path}/${course[i]}`).then((unit) => {
            for (let j = 0; j < unit.length; j += 1) {
              ReactNativeBlobUtil.fs.ls(`${path}/${course[i]}/${unit[j]}`).then((title) => {
                for (let k = 0; k < title.length; k += 1) {
                  const tempTitle = title[k].replace(/_/g, ' ');
                  const downloadUnit = unit[j].split('+');
                  const courseData = course[i].split('+');
                  const titleId = tempTitle?.substring(0, tempTitle.indexOf('.'));
                  const data = {
                    url: `${path}/${course[i]}/${unit[j]}/${title[k]}`,
                    titleId: titleId.split('+')[1],
                    unit: downloadUnit[0].replace(/_/g, ' '),
                    courseName: courseData[0].replace(/_/g, ' '),
                    courseId: courseData[1],
                    unitId: downloadUnit[1],
                    questionNo: tempTitle?.split('+')[2]?.split('.')[0],
                  };
                  offlineVideoData.push(data);
                  if (k === title.length - 1) {
                    const successObject = {
                      code: 200,
                      message: 'Success',
                      data: offlineVideoData,
                    };

                    resolve(successObject);
                  }
                }
              });
            }
          });
        }
      }).catch(() => {
        const failObject = {
          code: 201,
          message: 'Fail',
        };
        reject(failObject);
      });
  });
}

export const epicCurrentAffairsOfflineData = (action$) => action$.pipe(
  ofType(GET_CURRENT_AFFAIRS_DOWNLOAD_DATA),
  pluck('payload'),
  mergeMap((data) => {
    const { isTamil } = data;
    const path = `${ReactNativeBlobUtil.fs.dirs.DownloadDir}/.Veranda/${isTamil}`;
    const body = {
      path,
    };
    return from(getCurrentAffairsOfflineData(body)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return setCurrentAffairsDownloadData(res?.data);
        }
        return gettingErrorOnMedia(res?.message);
      }),
      takeUntil(action$.pipe(ofType(GET_CURRENT_AFFAIRS_DOWNLOAD_DATA))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const removeCurrentAffairBookmarkEpic = (action$) => action$.pipe(
  ofType(REMOVE_CURRENT_AFFAIRS_BOOKMARK),
  pluck('payload'),
  mergeMap((data) => {
    const userId = StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
    const mobileNumber = StorageUtils.getString(AsyncKeys.ASYNC_KEY_PHONE_NUMBER, null);
    const { currentAffairId } = data;
    const body = {
      _id: currentAffairId,
      app: APP_NAME,
      userId,
      platform: PLATFORM,
      mobileNo: mobileNumber,
    };
    return from(removeCABookmark(body)).pipe(
      mergeMap((res) => {
        // eslint-disable-next-line no-empty
        if (res?.status === 'true') { }
      }),
      takeUntil(action$.pipe(ofType(REMOVE_CURRENT_AFFAIRS_BOOKMARK))),
      catchError(() => {
        return of(errorCurrentAffairsBookmark());
      }),
    );
  }),
);

export const addedCurrentAffairBookmarkEpic = (action$) => action$.pipe(
  ofType(ADDED_CURRENT_AFFAIRS_BOOKMARK),
  pluck('payload'),
  mergeMap((data) => {
    const userId = StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
    const { currentAffairsCardData } = data;
    const mobileNumber = StorageUtils.getString(AsyncKeys.ASYNC_KEY_PHONE_NUMBER, null);
    const body = {
      _id: currentAffairsCardData?._id,
      app: APP_NAME,
      userId,
      platform: PLATFORM,
      mobileNo: mobileNumber,
    };
    return from(addedCABookmark(body)).pipe(
      mergeMap((res) => {
        // eslint-disable-next-line no-empty
        if (res?.status === 'true') { }
      }),
      takeUntil(action$.pipe(ofType(ADDED_CURRENT_AFFAIRS_BOOKMARK))),
      catchError(() => {
        return of(errorCurrentAffairsBookmark());
      }),
    );
  }),
);
