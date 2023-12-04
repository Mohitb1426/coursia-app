import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import AsyncKeys from '../../common/AsyncKeys';
import Config from '../../common/Config';
import { LANGUAGE_ENGLISH } from '../../common/LocalizationProvider';
// import { debugLog } from '../../common/Logger';
import { makeGetRequest } from '../../common/NetworkOps';
import StorageUtils from '../../common/StorageUtils';
import {
  changeBottomSheetStatus,
  errorGettingAllDoubts,
  errorGettingMyDoubts,
  errorUploadingUserComment,
  filterMyDoubts,
  FILTER_ALL_DOUBTS,
  FILTER_MY_DOUBTS,
  gettingErrorTagList,
  GET_ALL_DOUBTS,
  GET_MY_DOUBTS,
  GET_TAG_LIST,
  gotAllDoubts,
  gotMyDoubts,
  gotTagList,
  setActiveToggleButton,
  setFilterAllDoubts,
  setFilterMyDoubts,
  uploadedUserComment,
  UPLOAD_USER_COMMENT,
  DELETE_TICKET,
  gettingErrorOnDeleteTicket,
  openConfirmModal,
  errorGettingFilteredMyDoubts,
  errorGettingFilteredAllDoubts,
  GET_SEARCH_MY_DOUBTS,
  GET_SEARCH_ALL_DOUBTS,
  RELOAD_MY_DOUBTS,
  reloadedMyDoubts,
  RELOAD_ALL_DOUBTS,
  reloadedAllDoubts,
  errorReloadingMyDoubts,
  errorReloadingAllDoubts,
  setPaginationLoader,
  gotSearchData,
  CHECK_ACTIVE_FEATURE,
  errorCheckingActiveFeature,
  setActiveFeature,
} from './actionAskDoubt';

const getTags = async () => {
  const res = await makeGetRequest(Config.comments.getTagList);
  return res;
};

const uploadUserQuestion = async (data) => {
  let response;
  const lang = await StorageUtils.getString(
    AsyncKeys.ASYNC_KEY_SELECTED_APP_LANGUAGE,
    LANGUAGE_ENGLISH,
  );
  const token = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null);
  const userId = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_USER_ID, null);
  const langCode = lang === LANGUAGE_ENGLISH ? 1 : 2;
  await fetch(Config.comments.createQuizComment, {
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
};

async function getMyDoubtsList(tags, page = 1, text = '') {
  const res = await makeGetRequest(`${Config.comments.getMyDoubtsList}?pageno=${page}&tags=${tags}&limit=15&search_str=${text}`);
  return res;
}

async function getAllDoubtsList(tags, page = 1, text = '') {
  const res = await makeGetRequest(`${Config.comments.getAllDoubtsList}?pageno=${page}&tags=${tags}&limit=15&search_str=${text}`);
  return res;
}

async function deleteTicket(id) {
  const res = await makeGetRequest(`${Config.comments.deleteTicket}${id}`);
  return res;
}

async function enableActiveFeature(id) {
  const res = await makeGetRequest(`${Config.comments.activeFeature}/${id}`);
  return res;
}

export const epicGetTagList = (action$) => action$.pipe(
  ofType(GET_TAG_LIST),
  pluck('payload'),
  mergeMap(() => {
    return from(getTags()).pipe(
      map((res) => {
        if (res?.code === 200) {
          return gotTagList(res?.data);
        }
        return gettingErrorTagList(res);
      }),
      takeUntil(action$.pipe(ofType(GET_TAG_LIST))),
      catchError((error) => {
        return of(gettingErrorTagList(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicUploadUserComment = (action$, state$) => action$.pipe(
  ofType(UPLOAD_USER_COMMENT),
  pluck('payload'),
  mergeMap(() => {
    const {
      subject, userQuestion, selectedImages, selectedTagList,
    } = state$.value.reducerAskDoubt;
    // console.log('=========', selectedTagList);
    const formData = new FormData();
    formData.append('subject', subject);
    formData.append('content', userQuestion);
    formData.append('tags', selectedTagList.length > 0 ? selectedTagList.toString() : '');
    selectedImages.forEach((item, i) => {
      formData.append('files[]', {
        uri: item.uri,
        type: item.type,
        name: item.name || `filename${i}.jpg`,
      });
    });
    return from(uploadUserQuestion(formData)).pipe(
      mergeMap((res) => {
        // console.log('res', res);
        if (res?.code === 200) {
          return of(
            uploadedUserComment(res?.data),
            changeBottomSheetStatus(false),
            setActiveToggleButton(false),
            filterMyDoubts(),
          );
        }
        // eslint-disable-next-line no-alert
        alert('Error uploading files');
        return of(errorUploadingUserComment(res));
      }),
      takeUntil(action$.pipe(ofType(UPLOAD_USER_COMMENT))),
      catchError((error) => {
        return of(errorUploadingUserComment(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetMyDoubts = (action$, state$) => action$.pipe(
  ofType(GET_MY_DOUBTS),
  pluck('payload'),
  mergeMap(() => {
    const {
      filterTagList, myDoubtPage, myDoubtsList,
    } = state$.value.reducerAskDoubt;
    const tags = filterTagList.length > 0 ? filterTagList.toString() : '';
    return from(getMyDoubtsList(tags, myDoubtPage)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return gotMyDoubts(res?.data);
        }
        if (myDoubtsList.length !== 0) {
          return setPaginationLoader(true);
        }
        return errorGettingMyDoubts(res);
      }),
      takeUntil(action$.pipe(ofType(GET_MY_DOUBTS))),
      catchError((error) => {
        return of(errorGettingMyDoubts(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicReloadMyDoubts = (action$) => action$.pipe(
  ofType(RELOAD_MY_DOUBTS),
  pluck('payload'),
  mergeMap(() => {
    const tags = '';
    return from(getMyDoubtsList(tags)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return reloadedMyDoubts(res?.data);
        }
        return errorReloadingMyDoubts(res);
      }),
      takeUntil(action$.pipe(ofType(RELOAD_MY_DOUBTS))),
      catchError((error) => {
        return of(errorReloadingMyDoubts(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicReloadAllDoubts = (action$) => action$.pipe(
  ofType(RELOAD_ALL_DOUBTS),
  pluck('payload'),
  mergeMap(() => {
    const tags = '';
    return from(getAllDoubtsList(tags)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return reloadedAllDoubts(res?.data);
        }
        return errorReloadingAllDoubts(res);
      }),
      takeUntil(action$.pipe(ofType(RELOAD_ALL_DOUBTS))),
      catchError((error) => {
        return of(errorReloadingAllDoubts(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetAllDoubts = (action$, state$) => action$.pipe(
  ofType(GET_ALL_DOUBTS),
  pluck('payload'),
  mergeMap(() => {
    const {
      filterTagList, allDoubtPage, allDoubtsList,
    } = state$.value.reducerAskDoubt;
    const tags = filterTagList.length > 0 ? filterTagList.toString() : '';
    return from(getAllDoubtsList(tags, allDoubtPage)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return gotAllDoubts(res?.data);
        }

        if (allDoubtsList.length !== 0) {
          return setPaginationLoader(true);
        }
        return errorGettingAllDoubts(res);
      }),
      takeUntil(action$.pipe(ofType(GET_ALL_DOUBTS))),
      catchError((error) => {
        return of(errorGettingAllDoubts(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicFilterMyDoubts = (action$, state$) => action$.pipe(
  ofType(FILTER_MY_DOUBTS),
  pluck('payload'),
  mergeMap(() => {
    const {
      filterTagList,
    } = state$.value.reducerAskDoubt;
    const tags = filterTagList.length > 0 ? filterTagList.toString() : '';
    return from(getMyDoubtsList(tags)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return setFilterMyDoubts(res?.data);
        }
        if (res?.code === 400) {
          return setFilterMyDoubts(res?.data);
        }
        return errorGettingFilteredMyDoubts(res);
      }),
      takeUntil(action$.pipe(ofType(FILTER_MY_DOUBTS))),
      catchError((error) => {
        return of(errorGettingFilteredMyDoubts(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicFilterAllDoubts = (action$, state$) => action$.pipe(
  ofType(FILTER_ALL_DOUBTS),
  pluck('payload'),
  mergeMap(() => {
    const {
      filterTagList,
    } = state$.value.reducerAskDoubt;
    const tags = filterTagList.length > 0 ? filterTagList.toString() : '';
    return from(getAllDoubtsList(tags)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return setFilterAllDoubts(res?.data);
        }
        if (res?.code === 400) {
          return setFilterAllDoubts(res?.data);
        }
        return errorGettingFilteredAllDoubts(res);
      }),
      takeUntil(action$.pipe(ofType(FILTER_ALL_DOUBTS))),
      catchError((error) => {
        return of(errorGettingFilteredAllDoubts(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicDeleteTicket = (action$, state$) => action$.pipe(
  ofType(DELETE_TICKET),
  pluck('payload'),
  mergeMap(() => {
    const { ticketId } = state$.value.reducerAskDoubt;
    return from(deleteTicket(ticketId)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            openConfirmModal(false),
            filterMyDoubts(),
          );
        }
        return of(gettingErrorOnDeleteTicket(res));
      }),
      takeUntil(action$.pipe(ofType(DELETE_TICKET))),
      catchError((error) => {
        return of(gettingErrorOnDeleteTicket(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicSearchGetMyDoubts = (action$, state$) => action$.pipe(
  ofType(GET_SEARCH_MY_DOUBTS),
  pluck('payload'),
  mergeMap(() => {
    const {
      filterTagList, searchDoubtText,
    } = state$.value.reducerAskDoubt;
    const tags = filterTagList.length > 0 ? filterTagList.toString() : '';
    return from(getMyDoubtsList(tags, 1, searchDoubtText)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return setFilterMyDoubts(res?.data);
        }
        if (res?.code === 400) {
          return setFilterMyDoubts(res?.data);
        }
        return errorGettingMyDoubts(res);
      }),
      takeUntil(action$.pipe(ofType(GET_SEARCH_MY_DOUBTS))),
      catchError((error) => {
        return errorGettingMyDoubts(error.response?.data?.message || '');
      }),
    );
  }),
);

export const epicSearchGetAllDoubts = (action$, state$) => action$.pipe(
  ofType(GET_SEARCH_ALL_DOUBTS),
  pluck('payload'),
  mergeMap(() => {
    const {
      filterTagList, searchDoubtText,
    } = state$.value.reducerAskDoubt;
    const tags = filterTagList.length > 0 ? filterTagList.toString() : '';
    return from(getAllDoubtsList(tags, 1, searchDoubtText)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(setFilterAllDoubts(res?.data), gotSearchData(true));
        }
        if (res?.code === 400) {
          return of(setFilterAllDoubts(res?.data));
        }
        return of(errorGettingAllDoubts(res));
      }),
      takeUntil(action$.pipe(ofType(GET_SEARCH_ALL_DOUBTS))),
      catchError((error) => {
        return of(errorGettingAllDoubts(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicCheckActiveFeature = (action$, state$) => action$.pipe(
  ofType(CHECK_ACTIVE_FEATURE),
  pluck('payload'),
  mergeMap(() => {
    const { featureListData } = state$.value.reducerIntro;
    const { Ask_unlimited_Doubt } = featureListData;
    return from(enableActiveFeature(Ask_unlimited_Doubt)).pipe(
      map((res) => {
        if (res?.code === 200) {
          if (res?.data) {
            return setActiveFeature(res.data);
          }
          return setActiveFeature(false);
        }
        return errorCheckingActiveFeature(res);
      }),
      takeUntil(action$.pipe(ofType(CHECK_ACTIVE_FEATURE))),
      catchError((error) => {
        return of(errorCheckingActiveFeature(error.response?.data?.message || ''));
      }),
    );
  }),
);
