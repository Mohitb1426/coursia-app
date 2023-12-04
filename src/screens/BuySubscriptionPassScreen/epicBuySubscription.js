import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import Config from '../../common/Config';// import { debugLog } from '../../common/Logger';
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
import {
  errorGenerateSubscriptionPaymentOrder,
  errorGetSubscriptionPlanDetails,
  errorVerifyingPaymentAction,
  GENERATE_SUBSCRIPTION_PAYMENT_ORDER,
  GET_SUBSCRIPTION_PLAN_DETAILS,
  setLoading,
  setPaymentOrderData,
  setSubscriptionPlanDetails,
  setTransactionId,
  setVerifiedPaymentData,
  VERIFY_PAYMENT_ACTION,
} from './actionBuySubscription';

export async function getSubscriptionDetailsCall(id) {
  const res = await makeGetRequest(`${Config.subscription.buySubscriptionDetails}/${id}`);
  return res;
}

export async function generateSubscriptionPaymentLink(body) {
  const res = await makePostRequest(Config.subscription.generatePaymentLink, body);
  return res;
}

export async function verifyPayment(body) {
  const res = await makePostRequest(Config.subscription.verifyPaymentData, body);
  return res;
}

export const epicSubscriptionDetailsList = (action$) => action$.pipe(
  ofType(GET_SUBSCRIPTION_PLAN_DETAILS),
  pluck('payload'),
  mergeMap((id) => {
    return from(getSubscriptionDetailsCall(id)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return setSubscriptionPlanDetails(res?.data);
        }
        return errorGetSubscriptionPlanDetails(res);
      }),
      takeUntil(action$.pipe(ofType(GET_SUBSCRIPTION_PLAN_DETAILS))),
      catchError((error) => {
        return of(errorGetSubscriptionPlanDetails(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGeneratePaymentLink = (action$) => action$.pipe(
  ofType(GENERATE_SUBSCRIPTION_PAYMENT_ORDER),
  pluck('payload'),
  mergeMap((id) => {
    const body = {
      plan_id: id,
    };
    return from(generateSubscriptionPaymentLink(body)).pipe(
      map((res) => {
        if (res?.code === 200) {
          return setPaymentOrderData(res?.data);
        }
        return errorGenerateSubscriptionPaymentOrder(res);
      }),
      takeUntil(action$.pipe(ofType(GENERATE_SUBSCRIPTION_PAYMENT_ORDER))),
      catchError((error) => {
        return of(errorGenerateSubscriptionPaymentOrder(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicVerifyPaymentOrder = (action$) => action$.pipe(
  ofType(VERIFY_PAYMENT_ACTION),
  pluck('payload'),
  mergeMap((data) => {
    return from(verifyPayment(data)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            setLoading(true),
            setVerifiedPaymentData(),
            setTransactionId(data?.razorpay_payment_id),
          );
        }
        return of(errorVerifyingPaymentAction(res));
      }),
      takeUntil(action$.pipe(ofType(VERIFY_PAYMENT_ACTION))),
      catchError((error) => {
        return of(errorVerifyingPaymentAction(error.response?.data?.message || ''));
      }),
    );
  }),
);
