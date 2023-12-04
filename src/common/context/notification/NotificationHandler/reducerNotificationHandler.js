import {
  CLEAR_NOTIFICATION_EVENTS,
  REGISTERED_DEVICE,
  SET_NOTIFICATION_EVENT,
} from './actionsNotificationHandler';
import NotificationType from './NotificationType';

const initialState = {
  hasPendingEvent: false, // to handle notifications based on the this variable.
  notificationEvent: undefined, // object this can vary notification to notification,
  type: NotificationType.NO_TYPE, // type should be strictly under NotificationType
  forceUpdate: false,
};

const reducerNotificationHandler = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATION_EVENT:
      return {
        ...state,
        hasPendingEvent: true,
        notificationEvent: action.payload.data,
        type: action.payload.type,
      };
    case CLEAR_NOTIFICATION_EVENTS:
      return {
        ...state,
        hasPendingEvent: false,
        notificationEvent: undefined,
        type: NotificationType.NO_TYPE,
      };
    case REGISTERED_DEVICE:
      return {
        ...state,
        forceUpdate: !!action.payload.data?.force_update,
      };
    // case FETCHED_EQUITY_USER_DETAILS:
    //   return {
    //     ...state,
    //     suspend_buy: !!action.payload.data?.suspend_buy,
    //   };
    default:
      return state;
  }
};

export default reducerNotificationHandler;
