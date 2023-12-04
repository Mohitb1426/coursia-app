import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import Config from '../../common/Config'; // import { debugLog } from '../../common/Logger';
import { makeGetRequest } from '../../common/NetworkOps';
import {
  activatedSubscriptionPass,
  ACTIVATE_SUBSCRIPTION_PASS,
  errorActivatingSubscriptionPass,
  errorGetSubscription,
  getSubscription,
  GET_SUBSCRIPTION_PLAN,
  setSubscription,
} from './actionSubscription';

export async function getSubscriptionCall() {
  const res = await makeGetRequest(Config.subscription.getSubscriptionPass);
  return res;
}

export async function activatePass(id) {
  const res = await makeGetRequest(`${Config.subscription.activateSubscriptionPlan}${id}`);
  return res;
}

export const epicSubscriptionList = (action$) => action$.pipe(
  ofType(GET_SUBSCRIPTION_PLAN),
  pluck('payload'),
  mergeMap(() => {
    return from(getSubscriptionCall()).pipe(
      map((res) => {
        if (res?.code === 200) {
          return setSubscription(res?.data);
        }
        return errorGetSubscription(res);
      }),
      takeUntil(action$.pipe(ofType(GET_SUBSCRIPTION_PLAN))),
      catchError((error) => {
        return of(errorGetSubscription(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicActivateSubscriptionPlan = (action$, state$) => action$.pipe(
  ofType(ACTIVATE_SUBSCRIPTION_PASS),
  pluck('payload'),
  mergeMap(() => {
    const { planId } = state$.value.reducerSubscription;
    return from(activatePass(planId)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          return of(
            activatedSubscriptionPass(res?.data),
            getSubscription(),
          );
        }
        return errorActivatingSubscriptionPass(res);
      }),
      takeUntil(action$.pipe(ofType(ACTIVATE_SUBSCRIPTION_PASS))),
      catchError((error) => {
        return of(errorActivatingSubscriptionPass(error.response?.data?.message || ''));
      }),
    );
  }),
);
