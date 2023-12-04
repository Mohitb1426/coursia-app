import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, takeUntil, catchError, map,
} from 'rxjs/operators';
import { makeGetRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  GET_DASHBOARD_DATA,
  errorDashboardData,
  setDashboardData,
  GET_LEADER_BOARD_DATA,
  setLeaderBoardData,
  errorGetLeaderBoardData,
} from './actionStudentDashboard';

export async function getStudentDashboard() {
  const res = await makeGetRequest(Config.studentDashBoard.getStudentDashBoardScore);
  return res;
}

export async function getStudentLeaderBoard() {
  const res = await makeGetRequest(Config.studentDashBoard.getStudentLeaderBoard);
  return res;
}

export const epicGetStudentDashboard = (action$) => action$.pipe(
  ofType(GET_DASHBOARD_DATA),
  pluck('payload'),
  mergeMap(() => {
    return from(getStudentDashboard()).pipe(
      map((res) => {
        if (res?.code === 200) {
          const data = res?.data;
          return setDashboardData(data);
        }
        return errorDashboardData(res?.message);
      }),
      takeUntil(action$.pipe(ofType(GET_DASHBOARD_DATA))),
      catchError((error) => {
        return of(errorDashboardData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetStudentLeaderBoard = (action$) => action$.pipe(
  ofType(GET_LEADER_BOARD_DATA),
  pluck('payload'),
  mergeMap(() => {
    return from(getStudentLeaderBoard()).pipe(
      map((res) => {
        if (res?.code === 200) {
          const data = res?.data;
          return setLeaderBoardData(data);
        }
        return errorGetLeaderBoardData(res?.message);
      }),
      takeUntil(action$.pipe(ofType(GET_LEADER_BOARD_DATA))),
      catchError((error) => {
        return of(errorGetLeaderBoardData(error.response?.data?.message || ''));
      }),
    );
  }),
);
