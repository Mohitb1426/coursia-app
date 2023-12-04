import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import {
  GET_NOTIFICATIONS,
  setNotifications,
  errorGettingNotifications,
  SAVE_OS_TOKEN,
  errorsavingOsToken,
  oSTokenSaved,
  DELETE_NOTIFICATION,
  deletedNotification,
  errorDeleteNotification,
  errorMarkAsReadNotification,
  MARK_AS_READ_NOTIFICATION,
  markedAsReadNotification,
} from './actionNotification';
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import StorageUtils from '../../common/StorageUtils';
import AsyncKeys from '../../common/AsyncKeys';

// const TAG = 'epicNotification';
export async function getNotifications() {
  const res = await makeGetRequest(Config.notification.getNotificationList);
  return res;
}

export async function saveOsToken(data) {
  const body = {
    ...data,
  };
  let idLoggedIn = false;
  const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null);
  const userId = StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
  if (token && userId) {
    idLoggedIn = true;
  }

  let url = Config.notification.saveOsTokenNotLoggedIn;
  if (idLoggedIn) {
    url = Config.notification.saveOsToken;
  }
  const res = await makePostRequest(
    url,
    body,
  );
  return res;
}

export async function deleteNotification(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.notification.deleteNotification, body);
  return res;
}

export async function markAsRead(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.notification.readNotification, body);
  return res;
}

export const epicSaveOsToken = (action$) => action$.pipe(
  ofType(SAVE_OS_TOKEN),
  pluck('payload'),
  mergeMap(() => {
    const body = {
      token: StorageUtils.getString(AsyncKeys.ONESIGNAL_PLAYER_ID, ''),
      deviceId: StorageUtils.getString(AsyncKeys.ASYNC_KEY_DEVICE_ID, ''),
    };

    return from(saveOsToken(body)).pipe(
      map((res) => {
        if (res.status_code === 200) return oSTokenSaved();
        return errorsavingOsToken(res);
      }),
      takeUntil(action$.pipe(ofType(SAVE_OS_TOKEN))),
      catchError((error) => {
        return of(errorsavingOsToken(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetNotificationList = (action$) => action$.pipe(
  ofType(GET_NOTIFICATIONS),
  pluck('payload'),
  mergeMap(() => {
    return from(getNotifications()).pipe(
      map((res) => {
        if (res.code === 200) return setNotifications(res);
        return errorGettingNotifications(res);
      }),
      takeUntil(action$.pipe(ofType(GET_NOTIFICATIONS))),
      catchError((error) => {
        return of(errorGettingNotifications(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicReadNotification = (action$, state$) => action$.pipe(
  ofType(MARK_AS_READ_NOTIFICATION),
  pluck('payload'),
  mergeMap(() => {
    const { readId, isAll } = state$.value.reducerNotification;
    const body = {
      notification_id: readId,
      update_all: isAll,
    };
    return from(markAsRead(body)).pipe(
      map((res) => {
        if (res.code === 200) return markedAsReadNotification(res);
        return errorMarkAsReadNotification(res);
      }),
      takeUntil(action$.pipe(ofType(MARK_AS_READ_NOTIFICATION))),
      catchError((error) => {
        return of(errorMarkAsReadNotification(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicDeleteNotification = (action$, state$) => action$.pipe(
  ofType(DELETE_NOTIFICATION),
  pluck('payload'),
  mergeMap(() => {
    const { deleteId } = state$.value.reducerNotification;
    const body = {
      notification_id: deleteId,
    };

    return from(deleteNotification(body)).pipe(
      map((res) => {
        if (res.code === 200) return deletedNotification(res);
        return errorDeleteNotification(res);
      }),
      takeUntil(action$.pipe(ofType(DELETE_NOTIFICATION))),
      catchError((error) => {
        return of(errorDeleteNotification(error.response?.data?.message || ''));
      }),
    );
  }),
);
