const module_key = 'download_Course';
export const IS_LOADING = `${module_key}_loader`;
export const GET_OFFLINE_DOWNLOAD = `${module_key}_get_offline_data`;
export const SET_OFFLINE_DOWNLOAD = `${module_key}_set_offline_data`;
export const SET_OFFLINE_VIDEO_DOWNLOAD = `${module_key}_set_offline_video_data`;
export const SET_OFFLINE_DOWNLOAD_DATA = `${module_key}_set_offline_download_data`;
export const SET_OFFLINE_PDF_DOWNLOAD = `${module_key}_set_offline_pdf_data`;

export const toggleLoader = (data) => ({
  type: IS_LOADING,
  payload: data,
});

export const getOfflineDownloadData = (data) => ({
  type: GET_OFFLINE_DOWNLOAD,
  payload: data,
});

export const setOfflineDownloadData = (data) => ({
  type: SET_OFFLINE_DOWNLOAD_DATA,
  payload: data,
});

export const setOfflineVideoData = (data) => ({
  type: SET_OFFLINE_VIDEO_DOWNLOAD,
  payload: data,
});

export const setOfflinePdfData = (data) => ({
  type: SET_OFFLINE_PDF_DOWNLOAD,
  payload: data,
});
