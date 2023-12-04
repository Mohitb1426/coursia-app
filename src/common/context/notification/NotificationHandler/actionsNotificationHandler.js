import NotificationType from './NotificationType';

export const MODULE_KEY = 'notification_handler';
export const SET_NOTIFICATION_EVENT = `${MODULE_KEY}_set_event`;
export const CLEAR_NOTIFICATION_EVENTS = `${MODULE_KEY}_clear`;
export const REGISTER_DEVICE = `${MODULE_KEY}_reg_device`;
export const REGISTERED_DEVICE = `${MODULE_KEY}_registered_device`;
export const REGISTERED_DEVICE_ERROR = `${MODULE_KEY}_registered_device_error`;
export const registerDevice = () => ({
  type: REGISTER_DEVICE,
  payload: {},
});
export const registeredDevice = (data) => ({
  type: REGISTERED_DEVICE,
  payload: { data },
});
export const registeredDeviceError = (error) => ({
  type: REGISTERED_DEVICE_ERROR,
  payload: { error },
});
export const setNotificationEvent = (data, type = NotificationType.NO_TYPE) => ({
  type: SET_NOTIFICATION_EVENT,
  payload: { data, type },
});
export const clearNotificationEvents = () => ({
  type: CLEAR_NOTIFICATION_EVENTS,
  payload: {},
});
