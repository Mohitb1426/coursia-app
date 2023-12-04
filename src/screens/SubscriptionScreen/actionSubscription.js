const module_key = 'subscription';

export const GET_SUBSCRIPTION_PLAN = `${module_key}_get_subscription_plan`;
export const SET_SUBSCRIPTION_PLAN = `${module_key}_set_subscription_plan`;
export const ERROR_GETTING_SUBSCRIPTION = `${module_key}_error_getting_subscription`;
export const OPEN_ACTIVATE_MODAL = `${module_key}_open_activate_modal`;
export const BUY_SUBSCRIPTION_PASS = `${module_key}_buy_subscription_pass`;
export const BOUGHT_SUBSCRIPTION_PASS = `${module_key}_bought_subscription_pass`;
export const ERROR_BUYING_SUBSCRIPTION_PASS = `${module_key}_error_buying_subscription_pass`;
export const ACTIVATE_SUBSCRIPTION_PASS = `${module_key}_activate_subscription_pass`;
export const ACTIVATED_SUBSCRIPTION_PASS = `${module_key}_activated_subscription_pass`;
export const ERROR_ACTIVATING_SUBSCRIPTION_PASS = `${module_key}_error_activating_subscription_pass`;
export const SET_PLAN_ID = `${module_key}_set_plan_id`;
export const SET_AMOUNT = `${module_key}_set_amount`;
export const SET_LIST_LOADING = `${module_key}_set_list_loading`;

export const getSubscription = () => ({
  type: GET_SUBSCRIPTION_PLAN,
  payload: {},
});

export const openActivateModal = (data) => ({
  type: OPEN_ACTIVATE_MODAL,
  payload: data,
});

export const setSubscription = (data) => ({
  type: SET_SUBSCRIPTION_PLAN,
  payload: data,
});

export const errorGetSubscription = (data) => ({
  type: ERROR_GETTING_SUBSCRIPTION,
  payload: data,
});

export const buySubscriptionPass = () => ({
  type: BUY_SUBSCRIPTION_PASS,
  payload: {},
});

export const boughtSubscriptionPass = (data) => ({
  type: BOUGHT_SUBSCRIPTION_PASS,
  payload: data,
});

export const errorBuyingSubscriptionPass = (data) => ({
  type: ERROR_BUYING_SUBSCRIPTION_PASS,
  payload: data,
});

export const activateSubscriptionPass = () => ({
  type: ACTIVATE_SUBSCRIPTION_PASS,
  payload: {},
});

export const activatedSubscriptionPass = (data) => ({
  type: ACTIVATED_SUBSCRIPTION_PASS,
  payload: data,
});

export const errorActivatingSubscriptionPass = (data) => ({
  type: ERROR_ACTIVATING_SUBSCRIPTION_PASS,
  payload: data,
});

export const setPlanId = (data) => ({
  type: SET_PLAN_ID,
  payload: data,
});

export const setAmount = (data) => ({
  type: SET_AMOUNT,
  payload: data,
});

export const setListLoading = (data) => ({
  type: SET_LIST_LOADING,
  payload: data,
});
