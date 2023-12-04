/* eslint-disable no-plusplus */
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, map, takeUntil, catchError,
} from 'rxjs/operators';
import { debugLog } from '../../common/Logger';
import {
  makeGetRequest,
  makePostRequest,
} from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  SET_COURSE_ID, setCoursesData, errorGettingData, GET_MODULE_QUESTION,
  dataMigration, errorGettingQuestionDetails, DATA_MIGRATION,
  setActiveQuizTime, errorDataMigration, setSectionTimerEnable, setQuizTimerZero, setExamId,
  GET_RESUME_DATA, setResumeData, errorGettingResumeData,
} from './actionQuizUnit';
import { run_database_migrations } from '../../database/AppDatabase';
import { register_migration } from '../../database/migrations';
import { Routes } from '../../routes/Routes';
import { TIME_ENABLE_CONSTANTS } from './constantsScreenQuizUnit';

async function mapAllCourses(data) {
  const res = await makeGetRequest(`${Config.quiz.getQuizModule}${data}`);
  return res;
}

async function getQuestionDetails(data) {
  const { module_group_id, unitGroupId, courseGroupId } = data;
  const res = await makeGetRequest(`${Config.quiz.getQuestionDetails}?module_id=${module_group_id}&course_id=${courseGroupId}&unit_id=${unitGroupId}`);
  return res;
}

async function getResumeData(body) {
  const res = await makePostRequest(Config.quiz.getResumeData, body);
  return res;
}

function migrationOfData(data) {
  return new Promise((resolve, reject) => {
    let quizTotalTime = 0;
    run_database_migrations()
      .then(() => {
        for (
          let sectionData = 0;
          sectionData < data.length;
          sectionData++
        ) {
          const { questions } = data[sectionData];
          const sectionId = data[sectionData].section_id;
          const sectionName = data[sectionData].name;
          const sectionOrder = data[sectionData].order == null
            ? sectionData + 1
            : data[sectionData].order;
          const sectionTime = data[sectionData].section_time;
          quizTotalTime += data[sectionData].section_time;
          for (
            let questionData = 0;
            questionData < questions.length;
            questionData++
          ) {
            const options = questions[questionData].answers;
            const questionId = questions[questionData].id;
            const questionName = questions[questionData].title;
            const questionOrder = questions[questionData].srno;
            const questionTime = questions[questionData].question_time;
            const questionNegativeMarks = questions[questionData].negative_weightage;
            const questionMarks = questions[questionData].weightage;
            const questionUnattemptedMarks = questions[questionData].unattempted_weightage;
            const questionGroupId = questions[questionData].question_group_id;
            const selectedOption = questions[questionData].answer_id || '';

            register_migration(
              sectionId,
              sectionName,
              questionId,
              questionName,
              JSON.stringify(options),
              sectionOrder,
              questionOrder,
              questionTime,
              sectionTime,
              questionNegativeMarks,
              questionMarks,
              questionUnattemptedMarks,
              questionGroupId,
              selectedOption,
            );
          }
        }
      }).then(() => {
        const successObject = {
          code: 200,
          message: 'Success',
          data: {
            quizTotalTime,
          },
        };
        resolve(successObject);
      }).catch(() => {
        const TAG = 'QUIZ UNIT_LINE_NO_85';
        debugLog(TAG, 'Error');
        const errorObject = {
          code: 201,
          message: 'Failure',
        };
        reject(errorObject);
      });
  });
}

export const epicCourseData = (action$, state$) => action$.pipe(
  ofType(SET_COURSE_ID),
  pluck('payload'),
  mergeMap(() => {
    const { activeCourseId } = state$.value.reducerChooseCourses;
    return from(mapAllCourses(activeCourseId)).pipe(
      map((res) => {
        if (res.code === 200) return setCoursesData(res?.data);
        // eslint-disable-next-line no-alert
        alert(res?.message);
        return errorGettingData(res);
      }),
      takeUntil(action$.pipe(ofType(SET_COURSE_ID))),
      catchError((error) => {
        // eslint-disable-next-line no-alert
        alert(error.response?.data?.message || '');
        return of(errorGettingData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetModuleQuestions = (action$, state$) => action$.pipe(
  ofType(GET_MODULE_QUESTION),
  pluck('payload'),
  mergeMap((item) => {
    const { module_group_id, unitGroupId } = state$.value.reducerQuizUnit;
    const { courseGroupId } = state$.value.reducerChooseCourses;
    const body = {
      module_group_id,
      unitGroupId,
      courseGroupId,
    };
    return from(getQuestionDetails(body)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          const data = res?.data;
          const isQuestionTimerStatus = data[0]?.is_question_timer_enable;
          const dataMigrationInput = { data, item };
          // eslint-disable-next-line eqeqeq
          if (isQuestionTimerStatus == TIME_ENABLE_CONSTANTS.ENABLE_SECTION_TIME) {
            return of(
              setSectionTimerEnable(true),
              setQuizTimerZero(false),
              dataMigration(dataMigrationInput),
              setExamId(res?.exam_id),
            );
          }
          // eslint-disable-next-line eqeqeq
          if (isQuestionTimerStatus == TIME_ENABLE_CONSTANTS.ENABLE_QUIZ_TIME) {
            return of(
              setSectionTimerEnable(false),
              setQuizTimerZero(true),
              dataMigration(dataMigrationInput),
              setExamId(res?.exam_id),
            );
          }
          return of(
            setSectionTimerEnable(false),
            setQuizTimerZero(false),
            dataMigration(dataMigrationInput),
            setExamId(res?.exam_id),
          );
        }
        return of(errorGettingQuestionDetails(res));
      }),
      takeUntil(action$.pipe(ofType(GET_MODULE_QUESTION))),
      catchError((error) => {
        return of(errorGettingQuestionDetails(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicMigrationData = (action$) => action$.pipe(
  ofType(DATA_MIGRATION),
  pluck('payload'),
  mergeMap((item) => {
    const data = item?.data;
    return from(migrationOfData(data)).pipe(
      map((res) => {
        if (res.code === 200) {
          item.item.navigate(Routes.SCREEN_QUIZ_INSTRUCTIONS);
          return setActiveQuizTime(res?.data?.quizTotalTime);
        }
        return errorDataMigration(res);
      }),
      takeUntil(action$.pipe(ofType(DATA_MIGRATION))),
      catchError((error) => {
        return of(errorDataMigration(error.response?.message));
      }),
    );
  }),
);

export const epicResumeQuiz = (action$, state$) => action$.pipe(
  ofType(GET_RESUME_DATA),
  pluck('payload'),
  mergeMap((item) => {
    const { examId, module_group_id } = state$.value.reducerQuizUnit;
    const body = {
      exam_id: examId,
      module_id: module_group_id,
    };
    return from(getResumeData(body)).pipe(
      mergeMap((res) => {
        if (res?.code === 200) {
          const data = res?.data?.question_data;
          const resumeData = res?.data;
          const isQuestionTimerStatus = data[0]?.is_question_timer_enable;
          const dataMigrationInput = { data, item };
          // eslint-disable-next-line eqeqeq
          if (isQuestionTimerStatus == TIME_ENABLE_CONSTANTS.ENABLE_SECTION_TIME) {
            return of(
              setSectionTimerEnable(true),
              setQuizTimerZero(false),
              setResumeData(resumeData),
              dataMigration(dataMigrationInput),
            );
          }
          // eslint-disable-next-line eqeqeq
          if (isQuestionTimerStatus == TIME_ENABLE_CONSTANTS.ENABLE_QUIZ_TIME) {
            return of(
              setSectionTimerEnable(false),
              setQuizTimerZero(true),
              setResumeData(resumeData),
              dataMigration(dataMigrationInput),
            );
          }
          return of(
            setSectionTimerEnable(false),
            setQuizTimerZero(false),
            dataMigration(dataMigrationInput),
            setResumeData(resumeData),
          );
        }
        return of(errorGettingResumeData(res));
      }),
      takeUntil(action$.pipe(ofType(GET_RESUME_DATA))),
      catchError((error) => {
        return of(errorGettingResumeData(error.response?.message));
      }),
    );
  }),
);
