const module_key = 'subscription';

export const SET_LOADING = `${module_key}_set_loading`;
export const GET_SUBSCRIPTION_PLAN_DETAILS = `${module_key}_get_subscription_plan_details`;
export const SET_SUBSCRIPTION_PLAN_DETAILS = `${module_key}_set_subscription_plan_details`;
export const ERROR_GETTING_SUBSCRIPTION_PLAN_DETAILS = `${module_key}_error_getting_subscription_plan_details`;
export const GENERATE_SUBSCRIPTION_PAYMENT_ORDER = `${module_key}_generate_subscription_payment_order`;
export const SET_SUBSCRIPTION_PAYMENT_ORDER_DATA = `${module_key}_set_subscription_payment_order_data`;
export const ERROR_GENERATING_SUBSCRIPTION_PAYMENT_ORDER = `${module_key}_error_generating_subscription_payment_order`;
export const VERIFY_PAYMENT_ACTION = `${module_key}_verify_payment_action`;
export const SET_VERIFIED_PAYMENT_DATA = `${module_key}_set_verified_payment_data`;
export const ERROR_VERIFYING_PAYMENT_ACTION = `${module_key}_error_verifying_payment_action`;
export const SET_DEFAULT_PAYMENT_LINK = `${module_key}_set_default_payment_link`;
export const SHOW_PAYMENT_SUCCESSFUL_SCREEN = `${module_key}_show_payment_successful_screen`;
export const CLOSE_MODAL = `${module_key}_close_modal`;
export const SET_TRANSACTION_ID = `${module_key}_set_transaction_id`;

export const getSubscriptionPlanDetails = (data) => ({
  type: GET_SUBSCRIPTION_PLAN_DETAILS,
  payload: data,
});

export const setLoading = (data) => ({
  type: SET_LOADING,
  payload: data,
});

export const setSubscriptionPlanDetails = (data) => ({
  type: SET_SUBSCRIPTION_PLAN_DETAILS,
  payload: data,
});

export const errorGetSubscriptionPlanDetails = (data) => ({
  type: ERROR_GETTING_SUBSCRIPTION_PLAN_DETAILS,
  payload: data,
});

export const generateSubscriptionPaymentOrder = (data) => ({
  type: GENERATE_SUBSCRIPTION_PAYMENT_ORDER,
  payload: data,
});

export const setPaymentOrderData = (data) => ({
  type: SET_SUBSCRIPTION_PAYMENT_ORDER_DATA,
  payload: data,
});

export const errorGenerateSubscriptionPaymentOrder = (data) => ({
  type: ERROR_GENERATING_SUBSCRIPTION_PAYMENT_ORDER,
  payload: data,
});

export const verifyPaymentAction = (data) => ({
  type: VERIFY_PAYMENT_ACTION,
  payload: data,
});

export const setVerifiedPaymentData = () => ({
  type: SET_VERIFIED_PAYMENT_DATA,
  payload: {},
});

export const errorVerifyingPaymentAction = (data) => ({
  type: ERROR_VERIFYING_PAYMENT_ACTION,
  payload: data,
});

export const setDefaultPaymentLink = () => ({
  type: SET_DEFAULT_PAYMENT_LINK,
  payload: {},
});

export const setShowPaymentSuccessfulScreen = (data) => ({
  type: SHOW_PAYMENT_SUCCESSFUL_SCREEN,
  payload: data,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: {},
});

export const setTransactionId = (data) => ({
  type: SET_TRANSACTION_ID,
  payload: data,
});
