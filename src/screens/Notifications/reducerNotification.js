import {
  SET_NOTIFICATION_TAB_INDEX,
  IS_LOADING,
  GET_NOTIFICATIONS,
  ERROR_GETTING_NOTIFICATIONS,
  SET_NOTIFICATIONS,
  DELETE_NOTIFICATION,
  DELETED_NOTIFICATION,
  ERROR_DELETE_NOTIFICATION,
  MARK_AS_READ_NOTIFICATION,
  MARKED_AS_READ_NOTIFICATION,
  ERROR_MARK_AS_READ_NOTIFICATION,
  SET_NOTIFICATION_COUNT,
} from './actionNotification';

const initialState = {
  notificationTabIndex: 0,
  isLoading: false,
  mainNotificationList: [],
  deleteId: '',
  readId: '',
  update_all: false,
  unReadNotificationCount: 0,
};

const reducerNotification = (state = initialState, { type, payload }) => {
  let i = 0;
  switch (type) {
    case SET_NOTIFICATION_TAB_INDEX:
      return {
        ...state,
        notificationTabIndex: payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_NOTIFICATION_COUNT:
      return {
        ...state,
        unReadNotificationCount: payload,
      };
    case GET_NOTIFICATIONS:
      return {
        ...state,
        isLoading: true,
      };
    case SET_NOTIFICATIONS:
      i = 0;
      if (payload) {
        payload.forEach((element) => {
          if (element.isRead === '0') {
            i += 1;
          }
        });
      }
      return {
        ...state,
        isLoading: false,
        mainNotificationList: payload,
        unReadNotificationCount: i,
      };
    case ERROR_GETTING_NOTIFICATIONS:
      return {
        ...state,
        isLoading: false,
        mainNotificationList: [],
      };
    case DELETE_NOTIFICATION:
      return {
        ...state,
        deleteId: payload,
      };
    case DELETED_NOTIFICATION:
      return {
        ...state,
        deleteId: '',
      };
    case ERROR_DELETE_NOTIFICATION:
      return {
        ...state,
        deleteId: '',
      };
    case MARK_AS_READ_NOTIFICATION:
      return {
        ...state,
        readId: payload.readId,
        isAll: payload.isAll,
      };
    case MARKED_AS_READ_NOTIFICATION:
      return {
        ...state,
        readId: '',
        isAll: false,
      };
    case ERROR_MARK_AS_READ_NOTIFICATION:
      return {
        ...state,
        readId: '',
        isAll: false,
      };
    default:
      return state;
  }
};
export default reducerNotification;
