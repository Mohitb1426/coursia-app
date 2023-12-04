import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError, debounceTime,
} from 'rxjs/operators';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {
  getNotes, getSaveBookmark, gettingErrorOnMedia,
  GET_ALL_NOTE,
  GET_NOTE,
  SENT_NOTE,
  setVideoData,
  SET_BOOKMARK,
  updateAllNotes,
  updateNotes,
  UPDATE_MEDIA_STORE,
  GET_SAVE_BOOKMARK,
  updateAllBookMark,
  GET_ALL_BOOKMARK,
  getAllBookMark,
  getAllNotes,
  SET_WATCHED_VIDEO,
  updatedWatchedVideo,
  SET_UPDATED_NOTE,
  gettingErrorUpdatingNote,
  setIsUpdatingNotes,
  UPDATE_CLOSE_MEDIA_STORE,
  setCloseVideoData,
  gettingErrorSendingNotes,
  UPDATE_FREEMIUM_STORE,
} from './actionMediaPlayer';
import Config from '../../common/Config';
// const TAG = 'epicScreenMedia';
import { makePostRequest } from '../../common/NetworkOps';
import { debugLog } from '../../common/Logger';
import { setMyCourseUnitViewedArray } from '../MyCourseUnitScreen/actionCourseUnit';

async function saveImageBookMark(data) {
  const { storagePath, url } = data;

  return new Promise((resolve, reject) => {
    ReactNativeBlobUtil.fs.writeFile(storagePath, url, 'base64').then(() => {
      const successObject = {
        code: 200,
        message: 'Success',
      };
      resolve(successObject);
    }).catch(() => {
      const failObject = {
        code: 201,
        message: 'Fail',
      };
      reject(failObject);
    });
  });
}
async function getCaptureBookmarkImagePath(body) {
  const { path, activeVideoData } = body;
  return new Promise((resolve, reject) => {
    const bookmarkData = [];

    ReactNativeBlobUtil.fs.ls(path)
      .then((course) => {
        for (let i = 0; i < course.length; i += 1) {
          if (course[i]?.replace(/_/g, ' ') === activeVideoData?.courseName) {
            ReactNativeBlobUtil.fs.ls(`${path}/${course[i]}`).then((unit) => {
              for (let j = 0; j < unit.length; j += 1) {
                if (unit[j]?.replace(/_/g, ' ') === activeVideoData?.unitName) {
                  ReactNativeBlobUtil.fs.ls(`${path}/${course[i]}/${unit[j]}`).then((title) => {
                    for (let k = 0; k < title.length; k += 1) {
                      if (title[k]?.replace(/_/g, ' ') === activeVideoData?.titleName) {
                        ReactNativeBlobUtil.fs.ls(`${path}/${course[i]}/${unit[j]}/${title[k]}`).then((file) => {
                          for (let l = 0; l < file.length; l += 1) {
                            const tempTitle = title[k].replace(/_/g, ' ');
                            const data = {
                              url: `${path}/${course[i]}/${unit[j]}/${title[k]}/${file[l]}`,
                              title: tempTitle.substring(0, tempTitle.indexOf('.')),
                              unit: unit[j],
                              courseName: course[i].replace(/_/g, ' '),
                              time: file[l]?.replace('.png', ''),
                            };
                            bookmarkData.push(data);
                            if (l === file.length - 1) {
                              const successObject = {
                                code: 200,
                                message: 'Success',
                                data: bookmarkData,
                              };
                              resolve(successObject);
                            }
                          }
                        });
                      }
                    }
                  });
                }
              }
            });
          }
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
async function sentNote(body) {
  const res = await makePostRequest(Config.video.addNote, body);
  return res;
}

async function updateNote(body) {
  const res = await makePostRequest(Config.video.updateNote, body);
  return res;
}

async function getAllSaveNotes(body) {
  const res = await makePostRequest(Config.video.getNote, body);
  return res;
}

async function getVideoData(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.video.paidVideoPdfLink, body);
  return res;
}

async function getFreemiumVideoData(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.video.getFreemiumVideoData, body);
  return res;
}
async function setWatchedVideo(data) {
  const body = {
    ...data,
  };
  const res = await makePostRequest(Config.video.watchedVideo, body);
  return res;
}
export const epicSetBookMark = (action$, state$) => action$.pipe(
  ofType(SET_BOOKMARK),
  pluck('payload'),
  mergeMap((data) => {
    const { activeVideoData, activeVideoTime } = state$.value.reducerMediaPlayer;
    const {
      courseName, unitName, titleName,
    } = activeVideoData;
    const {
      progressTime,
    } = activeVideoTime;
    const { dirs } = ReactNativeBlobUtil.fs;
    const storagePath = `${dirs.DownloadDir}/VerandaBookmark/${courseName?.replace(/ /g, '_')}/${unitName?.replace(/ /g, '_')}/${titleName?.replace(/ /g, '_')}/${progressTime}.png`;
    const body = {
      storagePath,
      url: data,
    };
    return from(saveImageBookMark(body)).pipe(
      map((res) => {
        if (res.code === 200) return getSaveBookmark();
        return gettingErrorOnMedia(res);
      }),
      takeUntil(action$.pipe(ofType(SET_BOOKMARK))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGettingBookMark = (action$, state$) => action$.pipe(
  ofType(GET_SAVE_BOOKMARK),
  pluck('payload'),
  mergeMap(() => {
    const { activeVideoData } = state$.value.reducerMediaPlayer;
    const path = `${ReactNativeBlobUtil.fs.dirs.DownloadDir}/VerandaBookmark`;
    const body = {
      path,
      activeVideoData,
    };
    return from(getCaptureBookmarkImagePath(body)).pipe(
      map((res) => {
        if (res.code === 200) return updateAllBookMark(res?.data);
        return gettingErrorOnMedia(res);
      }),
      takeUntil(action$.pipe(ofType(GET_SAVE_BOOKMARK))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicSentNote = (action$, state$) => action$.pipe(
  ofType(SENT_NOTE),
  debounceTime(500),
  pluck('payload'),
  mergeMap((data) => {
    const { activeVideoData, activeVideoTime } = state$.value.reducerMediaPlayer;
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const {
      unitId, moduleId,
    } = activeVideoData;
    const {
      progressTime,
    } = activeVideoTime;
    const body = {
      title: 'Notes',
      description: data,
      tab: 2, // same value everytime
      course_id: activeCourseId,
      unit_id: unitId,
      module_id: moduleId,
      time: progressTime, // in secs
    };
    return from(sentNote(body)).pipe(
      map((res) => {
        if (res.code === 200) return getNotes();
        return gettingErrorSendingNotes(res);
      }),
      takeUntil(action$.pipe(ofType(SENT_NOTE))),
      catchError((error) => {
        return of(gettingErrorSendingNotes(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicUpdateNote = (action$, state$) => action$.pipe(
  ofType(SET_UPDATED_NOTE),
  pluck('payload'),
  mergeMap((data) => {
    const {
      activeVideoData,
      updateNoteId,
      updateNoteTime,
    } = state$.value.reducerMediaPlayer;
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const {
      unitId, moduleId,
    } = activeVideoData;

    const body = {
      id: updateNoteId,
      title: 'Notes',
      description: data,
      tab: 2, // same value everytime
      course_id: activeCourseId,
      unit_id: unitId,
      module_id: moduleId,
      time: updateNoteTime, // in secs
    };
    debugLog('Body of update Note', body);
    return from(updateNote(body)).pipe(
      mergeMap((res) => {
        debugLog('Notes Updated', res);
        if (res.code === 200) {
          return of(
            getNotes(),
            setIsUpdatingNotes(false),
          );
        }
        return gettingErrorUpdatingNote(res);
      }),
      takeUntil(action$.pipe(ofType(SET_UPDATED_NOTE))),
      catchError((error) => {
        return of(gettingErrorUpdatingNote(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetNotes = (action$, state$) => action$.pipe(
  ofType(GET_NOTE),
  pluck('payload'),
  mergeMap(() => {
    const { activeVideoData } = state$.value.reducerMediaPlayer;
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const {
      unitId, moduleId,
    } = activeVideoData;
    const body = {
      course_id: activeCourseId,
      unit_id: unitId,
      module_id: moduleId,
    };
    return from(getAllSaveNotes(body)).pipe(
      map((res) => {
        if (res.code === 200) return updateNotes(res?.data?.data?.all_notes);
        return gettingErrorOnMedia(res);
      }),
      takeUntil(action$.pipe(ofType(GET_NOTE))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicUpdateVideoData = (action$, state$) => action$.pipe(
  ofType(UPDATE_MEDIA_STORE),
  pluck('payload'),
  mergeMap((data) => {
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const { myCourseUnitViewedArray } = state$.value.reducerCourseUnit;
    const body = {
      unit_id: data?.unit_id,
      course_id: activeCourseId,
      batch_id: data?.batch_id,
      module_id: data?.module_id,
    };
    const viewedVideo = [...myCourseUnitViewedArray, data?.module_id];
    return from(getVideoData(body)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            setVideoData(res),
            getAllNotes(),
            getAllBookMark(),
            setMyCourseUnitViewedArray(viewedVideo),
          );
        }
        return of(gettingErrorOnMedia(res));
      }),
      takeUntil(action$.pipe(ofType(UPDATE_MEDIA_STORE))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicUpdateCloseVideoData = (action$, state$) => action$.pipe(
  ofType(UPDATE_CLOSE_MEDIA_STORE),
  pluck('payload'),
  mergeMap((data) => {
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const { myCourseUnitViewedArray } = state$.value.reducerCourseUnit;
    const body = {
      unit_id: data?.unit_id,
      course_id: activeCourseId,
      batch_id: data?.batch_id,
      module_id: data?.module_id,
    };
    const viewedVideo = [...myCourseUnitViewedArray, data?.module_id];
    return from(getVideoData(body)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            setCloseVideoData(res),
            getAllNotes(),
            getAllBookMark(),
            setMyCourseUnitViewedArray(viewedVideo),
          );
        }
        return of(gettingErrorOnMedia(res));
      }),
      takeUntil(action$.pipe(ofType(UPDATE_CLOSE_MEDIA_STORE))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);
export const epicGetAllNotes = (action$, state$) => action$.pipe(
  ofType(GET_ALL_NOTE),
  pluck('payload'),
  mergeMap(() => {
    const { activeVideoData } = state$.value.reducerMediaPlayer;
    const {
      unitId, moduleId,
    } = activeVideoData;
    const { activeCourseId } = state$.value.reducerChooseCourses;

    const body = {
      course_id: activeCourseId,
      unit_id: unitId,
      module_id: moduleId,
    };
    return from(getAllSaveNotes(body)).pipe(
      map((res) => {
        if (res.code === 200) return updateAllNotes(res?.data?.all_notes);
        return gettingErrorOnMedia(res);
      }),
      takeUntil(action$.pipe(ofType(GET_ALL_NOTE))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetAllBookMark = (action$, state$) => action$.pipe(
  ofType(GET_ALL_BOOKMARK),
  pluck('payload'),
  mergeMap(() => {
    const { activeVideoData } = state$.value.reducerMediaPlayer;
    const path = `${ReactNativeBlobUtil.fs.dirs.DownloadDir}/VerandaBookmark`;
    const body = {
      path,
      activeVideoData,
    };
    return from(getCaptureBookmarkImagePath(body)).pipe(
      map((res) => {
        if (res.code === 200) return updateAllBookMark(res?.data);
        return gettingErrorOnMedia(res);
      }),
      takeUntil(action$.pipe(ofType(GET_ALL_BOOKMARK))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicSetVideoWatched = (action$, state$) => action$.pipe(
  ofType(SET_WATCHED_VIDEO),
  pluck('payload'),
  mergeMap(() => {
    const { activeVideoData, activeVideoTime } = state$.value.reducerMediaPlayer;
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const body = {
      course_id: activeCourseId,
      unit_id: activeVideoData?.unitId,
      module_id: activeVideoData?.moduleId,
      seconds_watched: activeVideoTime?.progressTime,
    };
    return from(setWatchedVideo(body)).pipe(
      map((res) => {
        if (res.code === 200) return updatedWatchedVideo();
        return updatedWatchedVideo();
      }),
      takeUntil(action$.pipe(ofType(SET_WATCHED_VIDEO))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicUpdateFreemiumVideoData = (action$, state$) => action$.pipe(
  ofType(UPDATE_FREEMIUM_STORE),
  pluck('payload'),
  mergeMap((data) => {
    const { activeCourseId } = state$.value.reducerChooseCourses;
    const { myCourseUnitViewedArray } = state$.value.reducerCourseUnit;
    const body = {
      unit_id: data?.unit_id,
      course_id: activeCourseId,
      batch_id: data?.batch_id,
      module_id: data?.module_id,
    };
    const viewedVideo = [...myCourseUnitViewedArray, data?.module_id];
    return from(getFreemiumVideoData(body)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            setVideoData(res),
            getAllNotes(),
            getAllBookMark(),
            setMyCourseUnitViewedArray(viewedVideo),
          );
        }
        return of(gettingErrorOnMedia(res));
      }),
      takeUntil(action$.pipe(ofType(UPDATE_FREEMIUM_STORE))),
      catchError((error) => {
        return of(gettingErrorOnMedia(error.response?.data?.message || ''));
      }),
    );
  }),
);
