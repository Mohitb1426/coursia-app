import { GET_OFFLINE_DOWNLOAD, SET_OFFLINE_DOWNLOAD_DATA } from './actionDownloadCourse';

const initialState = {
  offlineVideosData: [],
};

const reducerDownloadCourseUnit = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_OFFLINE_DOWNLOAD:
      return {
        ...state,
        offlineVideosData: [],
      };
    case SET_OFFLINE_DOWNLOAD_DATA:
      return {
        ...state,
        offlineVideosData: payload,
      };
    default:
      return state;
  }
};
export default reducerDownloadCourseUnit;
