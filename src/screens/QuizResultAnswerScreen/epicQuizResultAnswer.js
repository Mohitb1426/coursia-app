import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {
  GET_QUIZ_ANSWER,
  setQuizAnswer,
  errorQuizAnswer,
  SET_QUIZ_BOOKMARK,
  errorQuizBookmark,
  changeLoaderStatus,
  GET_QUIZ_COMMENT,
  CREATE_COMMENT_QUIZ,
  successCreateQuizComment,
  errorCreateQuizComment,
  successGetQuizComment,
  errorGetQuizComment,
  GET_COURSE_DETAILS,
  setCourseDetails,
  errorGetCourseDetails,
} from './actionQuizResultAnswer';
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import { getOfflineDownloadData } from '../DownloadCourseScreen/actionDownloadCourse';

// const TAG = 'epicScreenLogin';

export async function getQuizAns(data) {
  const {
    moduleId,
    courseGroupId,
    examId,
    unitGroupId,
    questionId,
    sectionId,
  } = data;
  const res = await makeGetRequest(
    `${Config.quizResult.getQuizAnswer}?module_id=${moduleId}&course_id=${courseGroupId}&unit_id=${unitGroupId}&question_id=${questionId}&exam_id=${examId}&section_id=${sectionId}&issubmitted=1`,
  );
  return res;
}
export async function getCourseDetails(data) {
  const res = await makeGetRequest(`${Config.quizResult.getCourseDetails}/${data.module_ID}`);
  return res;
}

export async function getQuizComment(data) {
  const res = await makeGetRequest(
    `${Config.quizResult.getQuizCommentList}?module_id=${data.module_ID}&question_id=${data.question_ID}&course_id=${data.courseId}&section_id=${data.section_ID}&issubmitted=1`,
  );
  return res;
}

export async function postQuizComments(data) {
  const d = {
    question_id: data.questionId,
    module_id: data.moduleId,
    course_id: data.courseId,
    section_id: data.section_id,
    serial_no: data.serial_no,
    subject: data.subjectValue,
    content: data.textValue,
    group_id: data.group_id,
  };
  const res = await makePostRequest(Config.quizResult.postQuizComment, d);
  return res;
}

export const epicGetQuizAnswer = (action$, state$) => action$.pipe(
  ofType(GET_QUIZ_ANSWER),
  pluck('payload'),
  mergeMap((data) => {
    const { examId, unitGroupId } = state$.value.reducerQuizUnit;
    const { courseGroupId } = state$.value.reducerChooseCourses;
    const body = {
      moduleId: data.module_ID,
      courseGroupId,
      examId,
      unitGroupId,
      questionId: data.question_ID,
      sectionId: data.section_ID,
    };
    return from(getQuizAns(body)).pipe(
      map((res) => {
        if (res.code === 200) return setQuizAnswer(res?.data);
        return errorQuizAnswer(res);
      }),
      takeUntil(action$.pipe(ofType(GET_QUIZ_ANSWER))),
      catchError((error) => {
        return of(errorQuizAnswer(error.response?.data?.message || ''));
      }),
    );
  }),
);
export const epicGetQuizComment = (action$) => action$.pipe(
  ofType(GET_QUIZ_COMMENT),
  pluck('payload'),
  mergeMap((data) => {
    return from(getQuizComment(data)).pipe(
      map((res) => {
        if (res.code === 200) return successGetQuizComment(res?.data);
        return errorGetQuizComment(res?.message);
      }),
      takeUntil(action$.pipe(ofType(GET_QUIZ_COMMENT))),
      catchError((error) => {
        return of(errorGetQuizComment(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetCourseDetails = (action$) => action$.pipe(
  ofType(GET_COURSE_DETAILS),
  pluck('payload'),
  mergeMap((data) => {
    return from(getCourseDetails(data)).pipe(
      map((res) => {
        if (res.code === 200) return setCourseDetails(res?.data);
        return errorGetCourseDetails(res?.message);
      }),
      takeUntil(action$.pipe(ofType(GET_COURSE_DETAILS))),
      catchError((error) => {
        return of(errorGetCourseDetails(error.response?.data?.message || ''));
      }),
    );
  }),
);

async function saveImageBookMark(data) {
  const { storagePath, url } = data;

  return new Promise((resolve, reject) => {
    ReactNativeBlobUtil.fs
      .writeFile(storagePath, url, 'base64')
      .then(() => {
        const successObject = {
          code: 200,
          message: 'Success',
        };
        resolve(successObject);
      })
      .catch(() => {
        const failObject = {
          code: 201,
          message: 'Fail',
        };
        reject(failObject);
      });
  });
}

export const epicSetQuestionBookMark = (action$, state$) => action$.pipe(
  ofType(SET_QUIZ_BOOKMARK),
  pluck('payload'),
  mergeMap((data) => {
    const { isTamil } = data;
    const { assessmentName, activeCourseId } = state$.value.reducerChooseCourses;
    const {
      unitName, unitId, id, title,
    } = state$.value.reducerQuizUnit;
    const { dirs } = ReactNativeBlobUtil.fs;
    const storagePath = `${dirs.DownloadDir}/.Veranda/${isTamil}/${assessmentName?.replace(
      / /g,
      '_',
    )}+${activeCourseId}/${unitName?.replace(/ /g, '_')}+${unitId}/${title?.replace(
      / /g,
      '_',
    )}+${id}+${data?.question_ID}.png`;
    const body = {
      storagePath,
      url: data?.uri,
    };
    return from(saveImageBookMark(body)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          return of(
            getOfflineDownloadData({ isTamil }),
            changeLoaderStatus(false),
          );
        }
        return of(errorQuizBookmark(false));
      }),
      takeUntil(action$.pipe(ofType(SET_QUIZ_BOOKMARK))),
      catchError(() => {
        return of(errorQuizBookmark(false));
      }),
    );
  }),
);

export const epicPostQuizComment = (action$, state$) => action$.pipe(
  ofType(CREATE_COMMENT_QUIZ),
  pluck('payload'),
  mergeMap(() => {
    const { postCommentData } = state$.value.reducerQuizResultAnswer;
    return from(postQuizComments(postCommentData)).pipe(
      mergeMap((res) => {
        if (res.code === 200) return of(successCreateQuizComment(res.data));
        return of(errorCreateQuizComment(res.message));
      }),
      takeUntil(action$.pipe(ofType(CREATE_COMMENT_QUIZ))),
      catchError(() => {
        return of(errorCreateQuizComment(''));
      }),
    );
  }),
);
