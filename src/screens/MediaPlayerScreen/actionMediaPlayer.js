const module_key = 'action_media';

export const SET_ACTIVE_VIDEO_DATA = `${module_key}_set_active_video_data`;
export const SET_PAID_ACTIVE_VIDEO_DATA = `${module_key}_set_paid_active_video_data`;
export const SET_CLOSE_ACTIVE_VIDEO_DATA = `${module_key}_set_close_active_video_data`;
export const SET_PDF_DATA = `${module_key}_set_pdf_data`;
export const SET_TIME_ACTIVE_VIDEO = `${module_key}_set_active_time`;
export const SET_DURATION_TIME = `${module_key}_set_duration_time`;
export const SET_RESUME_TIME = `${module_key}_set_resume_time`;
export const SET_BOOKMARK = `${module_key}_set_bookmark`;
export const GET_SAVE_BOOKMARK = `${module_key}_get_save_bookmark`;
export const BOOKMARK_UPDATED = `${module_key}_bookmark_updated`;
export const GETTING_ERROR = `${module_key}_getting_error`;
export const TAKE_NOTE = `${module_key}_take_note`;
export const START_VIDEO_DOWNLOADING = `${module_key}_start_downloading`;
export const ON_VIDEO_DOWNLOADING = `${module_key}_on_downloading`;
export const CHANGE_NOTE_STATE = `${module_key}_change_note_state`;
export const SENT_NOTE = `${module_key}_sent_note`;
export const GET_NOTE = `${module_key}_get_note`;
export const GET_ALL_NOTE = `${module_key}_get_all_note`;
export const GET_ALL_BOOKMARK = `${module_key}_get_all_bookmark`;

export const UPDATE_NOTE = `${module_key}_update_note`;
export const SUCCESSFULLY_FETCH_NOTES = `${module_key}_successfully_Fetch_Notes`;
export const UPDATE_MEDIA_STORE = `${module_key}_update_media_store`;
export const UPDATE_CLOSE_MEDIA_STORE = `${module_key}_update_close_media_store`;
export const SET_COURSE_ACTIVE_ID = `${module_key}_set_course_id`;
export const UPDATE_ALL_NOTE = `${module_key}_update_all_note`;
export const UPDATE_ALL_BOOKMARK = `${module_key}_update_all_bookmark`;
export const SET_WATCHED_VIDEO = `${module_key}_set_watched_video`;
export const UPDATED_WATCHED_VIDEO = `${module_key}_updated_watched_video`;
export const NAVIGATED_SUCCESSFULLY = `${module_key}_navigated_successfully`;
export const SET_UPDATED_NOTE = `${module_key}_set_updated_note`;
export const IS_UPDATING_NOTES = `${module_key}_is_updating_note`;
export const UPDATE_NOTE_ID = `${module_key}_update_note_id`;
export const UPDATE_NOTE_TIME = `${module_key}_update_note_time`;
export const ERROR_UPDATING_NOTE = `${module_key}_error_updating_note`;
export const SET_DOWNLOADED_CHECK = `${module_key}_set_downloaded_check`;
export const SET_DOWNLOADING_CHECK = `${module_key}_set_downloading_check`;
export const SHOW_NOTES_UPDATED_TEXT = `${module_key}_show_notes_updates_text`;
export const PAUSE_VIDEO = `${module_key}_pause_video`;
export const SHOW_DOWNLOADED_ICON = `${module_key}_show_downloaded_icon`;
export const MOVE_VIDEO = `${module_key}_move_video`;
export const IS_FULL_SCREEN = `${module_key}_is_full_screen`;
export const GETTING_ERROR_SENDING_NOTES = `${module_key}_getting_error_sending_notes`;
export const UPDATE_FREEMIUM_STORE = `${module_key}_update_freemium_store`;

export const setVideoData = (data) => ({
  type: SET_ACTIVE_VIDEO_DATA,
  payload: data,
});

export const setPaidVideoData = (data) => ({
  type: SET_PAID_ACTIVE_VIDEO_DATA,
  payload: data,
});

export const setPdfData = (data) => ({
  type: SET_PDF_DATA,
  payload: data,
});

export const setActiveVideoTime = (data) => ({
  type: SET_TIME_ACTIVE_VIDEO,
  payload: data,
});
export const setDurationTime = (data) => ({
  type: SET_DURATION_TIME,
  payload: data,
});
export const setResumeVideoTime = (data) => ({
  type: SET_RESUME_TIME,
  payload: data,
});

export const setBookmark = (data) => ({
  type: SET_BOOKMARK,
  payload: data,
});

export const getSaveBookmark = () => ({
  type: GET_SAVE_BOOKMARK,
  payload: {},
});

export const bookmarkUpdated = (data) => ({
  type: BOOKMARK_UPDATED,
  payload: data,
});

export const gettingErrorOnMedia = () => {
  return ({
    type: GETTING_ERROR,
    payload: {},
  });
};

export const setTakeNotes = () => ({
  type: TAKE_NOTE,
  payload: {},
});

export const downloadVideo = () => ({
  type: START_VIDEO_DOWNLOADING,
  payload: {},
});

export const onProgressDownloading = (data) => ({
  type: ON_VIDEO_DOWNLOADING,
  payload: data,
});

export const changeFullNotePad = (data) => ({
  type: CHANGE_NOTE_STATE,
  payload: data,
});
export const submitNotePad = (data) => ({
  type: SENT_NOTE,
  payload: data,
});
export const getNotes = () => ({
  type: GET_NOTE,
  payload: {},
});

export const updateNotes = (data) => ({
  type: UPDATE_NOTE,
  payload: data,
});

export const successfullyFetchNotes = () => ({
  type: SUCCESSFULLY_FETCH_NOTES,
  payload: {},
});

export const updateMediaData = (data) => {
  return ({
    type: UPDATE_MEDIA_STORE,
    payload: data,
  });
};

export const updateFreemiumMediaData = (data) => {
  return ({
    type: UPDATE_FREEMIUM_STORE,
    payload: data,
  });
};

export const updateCloseMediaData = (data) => {
  return ({
    type: UPDATE_CLOSE_MEDIA_STORE,
    payload: data,
  });
};

export const setCloseVideoData = (data) => ({
  type: SET_CLOSE_ACTIVE_VIDEO_DATA,
  payload: data,
});

export const setActiveCourseId = (data) => ({
  type: SET_COURSE_ACTIVE_ID,
  payload: data,
});

export const getAllNotes = () => ({
  type: GET_ALL_NOTE,
  payload: {},
});

export const updateAllNotes = (data) => ({
  type: UPDATE_ALL_NOTE,
  payload: data,
});

export const getAllBookMark = () => ({
  type: GET_ALL_BOOKMARK,
  payload: {},
});

export const updateAllBookMark = (data) => ({
  type: UPDATE_ALL_BOOKMARK,
  payload: data,
});

export const setWatchedVideo = (data) => ({
  type: SET_WATCHED_VIDEO,
  payload: data,
});

export const updatedWatchedVideo = (data) => ({
  type: UPDATED_WATCHED_VIDEO,
  payload: data,
});

export const navigatedSuccessfully = () => ({
  type: NAVIGATED_SUCCESSFULLY,
  payload: {},
});

export const setUpdatedNote = (data) => ({
  type: SET_UPDATED_NOTE,
  payload: data,
});

export const setIsUpdatingNotes = (data) => ({
  type: IS_UPDATING_NOTES,
  payload: data,
});

export const setUpdateNoteId = (data) => ({
  type: UPDATE_NOTE_ID,
  payload: data,
});

export const gettingErrorUpdatingNote = (data) => ({
  type: ERROR_UPDATING_NOTE,
  payload: data,
});

export const setUpdateNoteTime = (data) => ({
  type: UPDATE_NOTE_TIME,
  payload: data,
});

export const setDownloadedCheck = (data) => ({
  type: SET_DOWNLOADED_CHECK,
  payload: data,
});
export const setDownloadingCheck = (data) => ({
  type: SET_DOWNLOADING_CHECK,
  payload: data,
});

export const setShowNotesUpdatedText = (data) => ({
  type: SHOW_NOTES_UPDATED_TEXT,
  payload: data,
});

export const setPauseVideo = (data) => ({
  type: PAUSE_VIDEO,
  payload: data,
});

export const showDownloadedIcon = (data) => ({
  type: SHOW_DOWNLOADED_ICON,
  payload: data,
});

export const setMoveVideo = (data) => ({
  type: MOVE_VIDEO,
  payload: data,
});

export const setIsFullScreen = (data) => ({
  type: IS_FULL_SCREEN,
  payload: data,
});

export const gettingErrorSendingNotes = (data) => ({
  type: GETTING_ERROR_SENDING_NOTES,
  payload: data,
});
