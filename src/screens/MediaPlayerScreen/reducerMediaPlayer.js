import { SET_OFFLINE_PDF_DOWNLOAD, SET_OFFLINE_VIDEO_DOWNLOAD } from '../DownloadCourseScreen/actionDownloadCourse';
import {
  SET_DURATION_TIME, SET_ACTIVE_VIDEO_DATA, SET_PDF_DATA, ON_VIDEO_DOWNLOADING,
  SET_TIME_ACTIVE_VIDEO, SET_RESUME_TIME, BOOKMARK_UPDATED, SUCCESSFULLY_FETCH_NOTES,
  TAKE_NOTE, CHANGE_NOTE_STATE,
  GET_NOTE, UPDATE_NOTE, UPDATE_MEDIA_STORE, UPDATE_ALL_NOTE,
  UPDATE_ALL_BOOKMARK, SET_PAID_ACTIVE_VIDEO_DATA, NAVIGATED_SUCCESSFULLY, GET_ALL_BOOKMARK,
  UPDATE_NOTE_ID,
  IS_UPDATING_NOTES,
  UPDATE_NOTE_TIME,
  SET_DOWNLOADED_CHECK,
  SHOW_NOTES_UPDATED_TEXT,
  SET_DOWNLOADING_CHECK,
  PAUSE_VIDEO,
  SHOW_DOWNLOADED_ICON,
  MOVE_VIDEO, SET_CLOSE_ACTIVE_VIDEO_DATA, SENT_NOTE,
  IS_FULL_SCREEN, GETTING_ERROR_SENDING_NOTES, UPDATE_FREEMIUM_STORE,
} from './actionMediaPlayer';

const initialState = {
  activeVideoData: {
    url: '',
    titleName: '',
    unitName: '',
    courseName: '',
    courseId: '',
    unitId: '',
    moduleId: '',
  },
  activeVideoTime: {
    progressTime: 1,
    currentMin: '0',
    currentSecond: '0',
    duration: 0,
    showDuration: '0:0',
  },
  resumeData: {
    resumeTime: 0,
    unit_id: '',
    module_id: '',
    batch_id: '',
  },
  modalState: {
    isAdded: false,
    modalBookmark: false,
  },
  bookmarkVideosData: [],
  takeNotes: false,
  isDownloadingData: [],
  showFullPad: false,
  notesData: [],
  isNotesUpdated: false,
  videosData: [],
  file: false,
  gotUrl: false,
  updateNote: '',
  isUpdatingNotes: false,
  updateNoteId: 0,
  updateNoteTime: 0,
  downloadedCheck: false,
  downloadingCheck: false,
  showNotesUpdatedText: false,
  paused: false,
  moveVideo: false,
  isLoading: false,
  isFullScreen: false,
};

const reducerMediaPlayer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NAVIGATED_SUCCESSFULLY:
      return {
        ...state,
        gotUrl: false,
        bookmarkVideosData: [],
      };
    case SENT_NOTE:
      return {
        ...state,
        isLoading: true,
      };
    case SET_ACTIVE_VIDEO_DATA:
      return {
        ...state,
        activeVideoData: {
          ...state.activeVideoData,
          url: payload?.data?.ContentRepositories.filename,
          titleName: payload?.data?.Modules?.title,
          unitName: payload?.data?.Modules?.unit_title,
          courseName: payload?.data?.Modules?.course_title,
          unitId: payload?.data?.Modules?.unit_id,
          moduleId: payload?.data?.Modules?.id,
        },
        gotUrl: true,

      };
    case SET_CLOSE_ACTIVE_VIDEO_DATA:
      return {
        ...state,
        activeVideoData: {
          ...state.activeVideoData,
          url: payload?.data?.ContentRepositories.filename,
          titleName: payload?.data?.Modules?.title,
          unitName: payload?.data?.Modules?.unit_title,
          courseName: payload?.data?.Modules?.course_title,
          unitId: payload?.data?.Modules?.unit_id,
          moduleId: payload?.data?.Modules?.id,
        },
        gotUrl: false,

      };
    case SET_PAID_ACTIVE_VIDEO_DATA:
      return {
        ...state,
        activeVideoData: {
          ...state.activeVideoData,
          url: payload?.data?.ContentRepositories.filename,
          titleName: payload?.data?.Modules?.title,
          unitName: payload?.data?.Modules?.unit_title,
          courseName: payload?.data?.Modules?.course_title,
          unitId: payload?.data?.Modules?.unit_id,
          moduleId: payload?.data?.Modules?.id,
        },
        gotUrl: true,

      };

    case SET_PDF_DATA:
      return {
        ...state,
        activeVideoData: {
          ...state.activeVideoData,
          url: payload?.data?.Modules?.wistia_download,
          titleName: payload?.data?.Modules?.title,
          unitName: payload?.data?.Modules?.unit_title,
          courseName: payload?.data?.Modules?.course_title,
          unitId: payload?.data?.Modules?.unit_id,
          moduleId: payload?.data?.Modules?.id,
        },
        file: false,
      };
    case SET_TIME_ACTIVE_VIDEO:
      return {
        ...state,
        activeVideoTime: {
          ...state.activeVideoTime,
          progressTime: payload?.currentTime,
          currentMin: payload?.currentMin,
          currentSecond: payload?.currentSecond,
        },

      };
    case SET_DURATION_TIME:
      return {
        ...state,
        activeVideoTime: {
          ...state.activeVideoTime,
          duration: payload?.duration,
          showDuration: payload?.showDuration,
        },
      };
    case SET_RESUME_TIME:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          resumeTime: parseFloat(payload?.resumeTime),
          unit_id: payload?.unit_id,
          module_id: payload?.module_id,
          batch_id: payload?.batch_id,
        },
      };
    case BOOKMARK_UPDATED:
      return {
        ...state,
        modalState: {
          ...state.modalState,
          isAdded: payload,
          modalBookmark: payload,
        },
      };
    case TAKE_NOTE:
      return {
        ...state,
        takeNotes: !state.takeNotes,
      };
    case ON_VIDEO_DOWNLOADING:
      return {
        ...state,
        isDownloadingData: payload,
      };
    case CHANGE_NOTE_STATE:
      return {
        ...state,
        showFullPad: payload,
      };
    case GET_NOTE:
      return {
        ...state,
        notesData: [],
        modalState: {
          ...state.modalState,
          isAdded: true,
          modalBookmark: false,
        },
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notesData: payload || [],
        takeNotes: !state.takeNotes,
        showFullPad: false,
        isNotesUpdated: true,
        isLoading: false,
      };
    case UPDATE_ALL_NOTE:
      return {
        ...state,
        notesData: payload || [],
      };
    case GET_ALL_BOOKMARK:
      return {
        ...state,
        bookmarkVideosData: [],
      };
    case UPDATE_ALL_BOOKMARK:
      return {
        ...state,
        bookmarkVideosData: payload,
      };
    case SUCCESSFULLY_FETCH_NOTES:
      return {
        ...state,
        modalState: {
          ...state.modalState,
          isAdded: false,
          modalBookmark: false,
        },
        isNotesUpdated: false,

      };
    case UPDATE_MEDIA_STORE:
    case UPDATE_FREEMIUM_STORE:
      return {
        ...state,
        activeVideoData: {
          ...state.activeVideoData,
          url: '',
          titleName: '',
          unitName: '',
          courseName: '',
          unitId: '',
          moduleId: '',
        },
        activeVideoTime: {
          ...state.activeVideoTime,
          progressTime: 0,
          currentMin: '0',
          currentSecond: '0',
          duration: 0,
          showDuration: '0:0',
        },
        bookmarkVideosData: [],
      };
    case SET_OFFLINE_VIDEO_DOWNLOAD:
      return {
        ...state,
        activeVideoData: {
          ...state.activeVideoData,
          url: payload?.url,
          titleName: payload?.title,
          courseName: payload?.courseName,
          unitId: payload?.unitId,
          unitName: payload?.unit,
          moduleId: payload?.moduleId,
          courseId: payload?.courseId,
        },
      };
    case SET_OFFLINE_PDF_DOWNLOAD:
      return {
        ...state,
        activeVideoData: {
          ...state.activeVideoData,
          url: payload?.url,
          titleName: payload?.title,
        },
        file: true,
      };
    case SHOW_DOWNLOADED_ICON:
      return {
        ...state,
        file: payload,
      };
    case IS_UPDATING_NOTES:
      return {
        ...state,
        isUpdatingNotes: payload,
      };
    case UPDATE_NOTE_ID:
      return {
        ...state,
        updateNoteId: payload,
      };
    case UPDATE_NOTE_TIME:
      return {
        ...state,
        updateNoteTime: payload,
      };
    case SET_DOWNLOADED_CHECK:
      return {
        ...state,
        downloadedCheck: payload,
      };
    case SET_DOWNLOADING_CHECK:
      return {
        ...state,
        downloadingCheck: payload,
      };
    case SHOW_NOTES_UPDATED_TEXT:
      return {
        ...state,
        showNotesUpdatedText: payload,
      };
    case PAUSE_VIDEO:
      return {
        ...state,
        paused: payload,
        moveVideo: false,
      };
    case MOVE_VIDEO:
      return {
        ...state,
        moveVideo: payload,
      };
    case IS_FULL_SCREEN:
      return {
        ...state,
        isFullScreen: payload,
      };
    case GETTING_ERROR_SENDING_NOTES:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default reducerMediaPlayer;
