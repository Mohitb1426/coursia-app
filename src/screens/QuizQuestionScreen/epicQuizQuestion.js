/* eslint-disable eqeqeq */
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  mergeMap, pluck, takeUntil, catchError, map,
} from 'rxjs/operators';
import {
  GET_REVIEW_QUIZ_DATA,
  gotReviewQuizData,
  gotErrorReviewQuizData,
  CHECK_NEXT_AND_REVIEW,
  updateTheQuestionTime,
  errorCheckNextAndReview,
  UPDATE_QUESTION_TIME,
  getTheQuestionData,
  errorGettingQuestionData,
  GET_THE_QUESTION_DATA,
  errorUpdatingQuestionTime,
  SUBMIT_SECTION,
  errorSubmittingQuiz,
  submitTheQuiz,
  SUBMIT_QUIZ,
  errorSubmittingSection,
  REGISTER_THE_DATA,
  registerTheData,
  getReviewQuizData,
  errorRegisteringTheData,
  setIsSwipeTrue,
  setScreen,
  setQuestionStatus,
  GET_DETAILS_OF_QUIZ_QUESTION,
  errorDetailsOfQuizQuestion,
  getDetailsOfQuizQuestion,
  setIsSelectOption,
  setPreviousQuestionStatus,
  RESTART_TIMER,
  CHECK_NEXT_AND_REVIEW_PAUSE,
  PAUSE_ACTIVE_QUIZ,
  pauseActiveQuiz,
  pauseQuizData,
  restartTimerData,
  cleanModel,
  AUTO_SAVE_SECTION,
  submitTheSection,
  autoUpdateQuestionTime,
  AUTO_UPDATE_QUESTION_TIME,
  setIsSectionSubmitStatus,
  setUserScreenTime,
  isTimerStopped,
  setOpenConfirmModal,
  setOpenSuccessModal,
  GET_NEXT_QUESTION,
  errorGettingNextQuestion,
  setQuizInstructionModalOpen,
  ASSESSMENT_MODULE_STATUS,
  assessmentModuleStatus,
  errorAssessmentModuleStatus,
} from './actionQuizQuestion';
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps';
import Config from '../../common/Config';
import {
  update_Question_Time,
  get_question_data,
  get_register_data,
} from '../../database/migrations';
import { setActiveQuestions, setActiveQuestionsData } from '../QuizInstructionsScreen/actionQuizInstructions';
import { Routes } from '../../routes/Routes';
import { STOP_TIMER_CONSTANTS } from './constantsScreenQuizQuestion';

async function quizMenuData(body) {
  const {
    module_group_id, examId, courseGroupId, unitGroupId,
  } = body;
  const res = await makeGetRequest(`${Config.quiz.getQuizMenuData}?module_id=${module_group_id}&course_id=${courseGroupId}&unit_id=${unitGroupId}&exam_id=${examId}`);
  return res;
}
async function pauseQuiz(body) {
  const res = await makePostRequest(Config.quiz.pauseActiveQuiz, body);
  return res;
}
async function reStartQuiz(body) {
  const res = await makePostRequest(Config.quiz.restartActiveQuiz, body);
  return res;
}

async function getQuizResult(data) {
  const {
    module_group_id,
    courseGroupId,
    unitGroupId,
    examId,
  } = data;
  const res = await makeGetRequest(`${Config.quiz.getQuizResult}?module_id=${module_group_id}&course_id=${courseGroupId}&unit_id=${unitGroupId}&exam_id=${examId}`);
  return res;
}

async function sendData(body) {
  const res = await makePostRequest(Config.quiz.saveAndNext, body);
  return res;
}

async function submitSection(body) {
  const res = await makePostRequest(Config.quiz.submitSection, body);
  return res;
}

async function moduleAssessmentStatus(body) {
  const res = await makePostRequest(Config.quiz.statusAssessmentModule, body);
  return res;
}

function getQuestionData(questionId) {
  return new Promise((resolve, reject) => {
    get_question_data(questionId)
      .then((data) => {
        const successObject = {
          code: 200,
          message: 'Success',
          data,
        };
        resolve(successObject);
      }).catch(() => {
        const errorObject = {
          code: 201,
          message: 'Failure',
        };
        reject(errorObject);
      });
  });
}

function registerData(sectionId) {
  return new Promise((resolve, reject) => {
    get_register_data()
      .then((element) => {
        const newArray = [];
        const object = element.filter(
          (obj) => obj.sectionId == sectionId,
        );
        const qnsArray = [];
        object.forEach((data) => {
          const qns = {
            questionName: data.questionName,
            answers: JSON.parse(data.options),
            questionOrder: data.questionOrder,
            questionId: data.questionId,
            questionTime: data.questionTime,
            questionNegativeMarks: data.questionNegativeMarks,
            questionMarks: data.questionMarks,
            questionGroupId: data.questionGroupId,
            questionUnattemptedMarks: data.questionUnattemptedMarks,
          };
          qnsArray.push(qns);
        });
        newArray.push({
          sectionOrder: object[0]?.sectionOrder,
          questions: qnsArray,
          isDone: false,
          sectionId,
          sectionTime: object[0]?.sectionTime,
        });
        return newArray;
      }).then((newArray) => {
        const successObject = {
          code: 200,
          message: 'Success',
          data: {
            newArray,
          },
        };
        resolve(successObject);
      }).catch(() => {
        const errorObject = {
          code: 201,
          message: 'Failure',
        };
        reject(errorObject);
      });
  });
}

function updateQuestionTime(activeQuestionId, remainingTime) {
  return new Promise((resolve, reject) => {
    update_Question_Time(activeQuestionId, remainingTime)
      .then(() => {
        const successObject = {
          code: 200,
          message: 'Success',
        };
        resolve(successObject);
      }).catch(() => {
        const errorObject = {
          code: 201,
          message: 'Failure',
        };
        reject(errorObject);
      });
  });
}

function getQuestion(activeQuestions, questionId) {
  const question = activeQuestions.find(
    (o) => o.questionId == questionId,
  );
  return question;
}

export const epicQuizMenu = (action$, state$) => action$.pipe(
  ofType(GET_REVIEW_QUIZ_DATA),
  pluck('payload'),
  mergeMap(() => {
    const { module_group_id, unitGroupId, examId } = state$.value.reducerQuizUnit;
    const { courseGroupId } = state$.value.reducerChooseCourses;
    const body = {
      module_group_id,
      examId,
      courseGroupId,
      unitGroupId,
    };
    return from(quizMenuData(body)).pipe(
      map((res) => {
        if (res.code === 200) return gotReviewQuizData(res?.data);
        return gotErrorReviewQuizData(res);
      }),
      takeUntil(action$.pipe(ofType(GET_REVIEW_QUIZ_DATA))),
      catchError((error) => {
        return of(gotErrorReviewQuizData(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicCheckNextAndReview = (action$, state$) => action$.pipe(
  ofType(CHECK_NEXT_AND_REVIEW),
  pluck('payload'),
  mergeMap((item) => {
    const { module_group_id, unitGroupId, examId } = state$.value.reducerQuizUnit;
    const { courseGroupId } = state$.value.reducerChooseCourses;
    const { activeQuestionsData } = state$.value.reducerQuizInstructions;
    const { questionTime, prevUserScreenTime } = state$.value.reducerQuizQuestion;
    const {
      order, finalOptions, screenTime, status, isLastQuestion,
    } = item;
    const body = {
      module_id: module_group_id,
      exam_id: examId,
      unit_id: unitGroupId,
      course_id: courseGroupId,
      question_id: activeQuestionsData.activeQuestionId,
      question_group_id: activeQuestionsData.activeQuestionGroupId,
      section_id: activeQuestionsData.activeSectionId,
      answer_id: finalOptions,
      answer_text: [],
      remaning_time: questionTime === -1 ? 0 : questionTime,
      consumed_time: screenTime,
      markasreview: status,
    };
    return from(sendData(body)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          const dataSet = {
            activeQuestionId: activeQuestionsData.activeQuestionId,
            remainingTime: res.data.remaning_time,
            activeQuestionOrder: order,
            lastQuestion: isLastQuestion,
            activeQuestions: activeQuestionsData.activeQuestions,
            options: finalOptions,
          };
          return of(
            setUserScreenTime(prevUserScreenTime),
            setPreviousQuestionStatus(status),
            updateTheQuestionTime(dataSet),
          );
        }
        return of(
          errorCheckNextAndReview(res),
          isTimerStopped(STOP_TIMER_CONSTANTS.FAILED_API_CALL),
        );
      }),
      takeUntil(action$.pipe(ofType(CHECK_NEXT_AND_REVIEW))),
      catchError((error) => {
        return of(
          errorCheckNextAndReview(error.response?.data?.message || ''),
          isTimerStopped(STOP_TIMER_CONSTANTS.FAILED_API_CALL),
        );
      }),
    );
  }),
);

// Time update for prevQuestion and getting the next active Question from DB
export const epicUpdateQuestionTime = (action$, state$) => action$.pipe(
  ofType(UPDATE_QUESTION_TIME),
  pluck('payload'),
  mergeMap((data) => {
    const array1 = data?.activeQuestions;
    const {
      activeQuestionId, remainingTime, activeQuestionOrder, lastQuestion, options,
    } = data;
    const { questionStatus } = state$.value.reducerQuizQuestion;
    return from(updateQuestionTime(activeQuestionId, remainingTime)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          const activeQuestion = array1.find(
            (o) => o.questionOrder == activeQuestionOrder,
          );
          const element = {
            activeQuestion,
            options,
            lastQuestion,
          };
          return of(
            getTheQuestionData(element),
            setOpenConfirmModal(false),
            setOpenSuccessModal(false),
            setQuizInstructionModalOpen(false),
            setScreen(false),
            setQuestionStatus({
              ...questionStatus,
              attempted: 0,
              markAsReview_Attempted: 0,
              markAsReview_Unattempted: 0,
              unAttempted: 0,
            }),
          );
        }
        return of(errorUpdatingQuestionTime(res));
      }),
      takeUntil(action$.pipe(ofType(UPDATE_QUESTION_TIME))),
      catchError((error) => {
        return of(
          errorUpdatingQuestionTime(error.response?.data?.message || ''),
          isTimerStopped(STOP_TIMER_CONSTANTS.FAILED_API_CALL),
        );
      }),
    );
  }),
);

// Setting the next question Data
export const epicGetQuestionData = (action$, state$) => action$.pipe(
  ofType(GET_THE_QUESTION_DATA),
  pluck('payload'),
  mergeMap((data) => {
    const { activeQuestion, options, lastQuestion } = data;
    const { questionId } = activeQuestion;
    const { activeQuestionsData } = state$.value.reducerQuizInstructions;
    const { activeQuestionOrder } = activeQuestionsData;
    const { isSelectOption } = state$.value.reducerQuizQuestion;

    return from(getQuestionData(questionId)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          const element = { activeQuestionOrder, options };
          // eslint-disable-next-line max-len
          const containsId = isSelectOption.find((x) => x.activeQuestionOrder == activeQuestionOrder);

          if (containsId !== undefined) {
            const arrCopy = Array.from(isSelectOption);
            // eslint-disable-next-line max-len
            const objWithIdIndex = arrCopy.findIndex((obj) => obj.activeQuestionOrder == activeQuestionOrder);
            arrCopy.splice(objWithIdIndex, 1);
            if (lastQuestion) {
              return of(
                setActiveQuestionsData({
                  ...activeQuestionsData,
                  activeQuestionSectionTime: res.data[0]?.questionTime,
                  activeQuestionOrder: activeQuestion?.questionOrder,
                  activeQuestionId: activeQuestion?.questionId,
                  activeQuestionTitle: activeQuestion?.questionName,
                  activeQuestionOptions: activeQuestion?.answers,
                  activeQuestionGroupId: activeQuestion?.questionGroupId,
                  activeQuestionMarks: activeQuestion?.questionMarks,
                  activeQuestionNegativeMarks: activeQuestion?.questionNegativeMarks,
                  activeQuestionUnattemptedMarks: activeQuestion?.questionUnattemptedMarks,
                }),
                setIsSelectOption([...arrCopy, element]),
                setIsSwipeTrue(true),
                getDetailsOfQuizQuestion(),
                isTimerStopped(STOP_TIMER_CONSTANTS.RESUME_THE_TIMER),
              );
            }
            return of(
              setActiveQuestionsData({
                ...activeQuestionsData,
                activeQuestionSectionTime: res.data[0]?.questionTime,
                activeQuestionOrder: activeQuestion?.questionOrder,
                activeQuestionId: activeQuestion?.questionId,
                activeQuestionTitle: activeQuestion?.questionName,
                activeQuestionOptions: activeQuestion?.answers,
                activeQuestionGroupId: activeQuestion?.questionGroupId,
                activeQuestionMarks: activeQuestion?.questionMarks,
                activeQuestionNegativeMarks: activeQuestion?.questionNegativeMarks,
                activeQuestionUnattemptedMarks: activeQuestion?.questionUnattemptedMarks,
              }),
              isTimerStopped(STOP_TIMER_CONSTANTS.RESUME_THE_TIMER),
              setIsSelectOption([...arrCopy, element]),
              setIsSwipeTrue(true),
            );
          }
          if (lastQuestion) {
            return of(
              setActiveQuestionsData({
                ...activeQuestionsData,
                activeQuestionSectionTime: res.data[0]?.questionTime,
                activeQuestionOrder: activeQuestion?.questionOrder,
                activeQuestionId: activeQuestion?.questionId,
                activeQuestionTitle: activeQuestion?.questionName,
                activeQuestionOptions: activeQuestion?.answers,
                activeQuestionGroupId: activeQuestion?.questionGroupId,
                activeQuestionMarks: activeQuestion?.questionMarks,
                activeQuestionNegativeMarks: activeQuestion?.questionNegativeMarks,
                activeQuestionUnattemptedMarks: activeQuestion?.questionUnattemptedMarks,
              }),
              setIsSelectOption([...isSelectOption, element]),
              setIsSwipeTrue(true),
              getDetailsOfQuizQuestion(),
              isTimerStopped(STOP_TIMER_CONSTANTS.RESUME_THE_TIMER),
            );
          }
          return of(
            setActiveQuestionsData({
              ...activeQuestionsData,
              activeQuestionSectionTime: res.data[0]?.questionTime,
              activeQuestionOrder: activeQuestion?.questionOrder,
              activeQuestionId: activeQuestion?.questionId,
              activeQuestionTitle: activeQuestion?.questionName,
              activeQuestionOptions: activeQuestion?.answers,
              activeQuestionGroupId: activeQuestion?.questionGroupId,
              activeQuestionMarks: activeQuestion?.questionMarks,
              activeQuestionNegativeMarks: activeQuestion?.questionNegativeMarks,
              activeQuestionUnattemptedMarks: activeQuestion?.questionUnattemptedMarks,
            }),
            isTimerStopped(STOP_TIMER_CONSTANTS.RESUME_THE_TIMER),
            setIsSelectOption([...isSelectOption, element]),
            setIsSwipeTrue(true),
          );
        }
        return errorGettingQuestionData(res);
      }),
      takeUntil(action$.pipe(ofType(GET_THE_QUESTION_DATA))),
      catchError((error) => {
        return of(
          errorGettingQuestionData(error.response?.data?.message || ''),
          isTimerStopped(STOP_TIMER_CONSTANTS.FAILED_API_CALL),
        );
      }),
    );
  }),
);

// epic for submit section
export const epicSubmitSection = (action$, state$) => action$.pipe(
  ofType(SUBMIT_SECTION),
  pluck('payload'),
  mergeMap((item) => {
    const { activeQuestionsData } = state$.value.reducerQuizInstructions;
    const { module_group_id, unitGroupId, examId } = state$.value.reducerQuizUnit;
    const { courseGroupId } = state$.value.reducerChooseCourses;
    const body = {
      module_id: module_group_id,
      section_id: activeQuestionsData.activeSectionId,
      exam_id: examId,
      unit_id: unitGroupId,
      course_id: courseGroupId,
    };
    return from(submitSection(body)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          const sectionId = res.data?.section_to_activate;
          if (sectionId === 0) {
            return of(
              submitTheQuiz(item),
            );
          }
          return of(
            setIsSectionSubmitStatus(true),
            registerTheData(sectionId),
          );
        }
        return of(
          errorSubmittingSection(res),
          isTimerStopped(STOP_TIMER_CONSTANTS.FAILED_API_CALL),
        );
      }),
      takeUntil(action$.pipe(ofType(SUBMIT_SECTION))),
      catchError((error) => {
        return of(
          errorSubmittingSection(error.response?.data?.message || ''),
          isTimerStopped(STOP_TIMER_CONSTANTS.FAILED_API_CALL),
        );
      }),
    );
  }),
);

// epic for submit quiz
export const epicSubmitQuiz = (action$, state$) => action$.pipe(
  ofType(SUBMIT_QUIZ),
  pluck('payload'),
  mergeMap((item) => {
    const { courseGroupId } = state$.value.reducerChooseCourses;
    const { module_group_id, unitGroupId, examId } = state$.value.reducerQuizUnit;
    const body = {
      module_group_id,
      courseGroupId,
      unitGroupId,
      examId,
    };
    return from(getQuizResult(body)).pipe(
      map((res) => {
        if (res.code === 200) {
          // console.log('------------------------------->', JSON.stringify(res, undefined, 2));
          if (res.data?.module_completed) {
            const data = {
              course_group_id: courseGroupId,
              unit_group_id: unitGroupId,
              module_group_id,
              is_completed: res.data.module_completed ? 1 : 0,
            };
            return assessmentModuleStatus({ data, item });
          }
          item.navigation.navigate(Routes.SCREEN_QUIZ_UNIT);
          return cleanModel();
        }
        return errorSubmittingQuiz(res);
      }),
      takeUntil(action$.pipe(ofType(SUBMIT_QUIZ))),
      catchError((error) => {
        return of(errorSubmittingQuiz(error.response?.data?.message || ''));
      }),
    );
  }),
);
// epic for check goal tracker update assessment status module
export const epicAssessmentModuleStatus = (action$) => action$.pipe(
  ofType(ASSESSMENT_MODULE_STATUS),
  pluck('payload'),
  mergeMap((item) => {
    return from(moduleAssessmentStatus(item.data)).pipe(
      map((res) => {
        if (res.code === 200) {
          item.item.navigation.navigate(Routes.SCREEN_QUIZ_UNIT);
          return cleanModel();
        }
        if (res.code === 201) {
          item.item.navigation.navigate(Routes.SCREEN_QUIZ_UNIT);
          return cleanModel();
        }
        return errorAssessmentModuleStatus(res);
      }),
      takeUntil(action$.pipe(ofType(ASSESSMENT_MODULE_STATUS))),
      catchError((error) => {
        return of(errorAssessmentModuleStatus(error.response?.data?.message || ''));
      }),
    );
  }),
);

// Getting the data of next section
export const epicRegisterData = (action$, state$) => action$.pipe(
  ofType(REGISTER_THE_DATA),
  pluck('payload'),
  mergeMap((item) => {
    const { activeQuestionsData } = state$.value.reducerQuizInstructions;
    return from(registerData(item)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          const { newArray } = res.data;
          return of(
            getReviewQuizData(),
            setActiveQuestions(newArray),
            setActiveQuestionsData({
              ...activeQuestionsData,
              activeQuestions: newArray[0]?.questions,
              activeSection: newArray[0],
              activeSectionTime: newArray[0]?.sectionTime,
              activeQuestionSectionTime:
                newArray[0]?.questions[0]?.questionTime,
              activeQuestionOrder: Number(
                newArray[0]?.questions[0]?.questionOrder,
              ),
              activeQuestionId: newArray[0]?.questions[0]?.questionId,
              activeQuestionTitle: newArray[0]?.questions[0]?.questionName,
              activeQuestionOptions: newArray[0]?.questions[0]?.answers,
              lastSectionQuestion:
                // eslint-disable-next-line no-unsafe-optional-chaining
                newArray[0]?.questions[newArray[0]?.questions.length - 1],
              activeSectionId: newArray[0]?.sectionId,
              activeQuestionMarks: newArray[0]?.questions[0]?.questionMarks,
              activeQuestionNegativeMarks: newArray[0]?.questions[0]?.questionNegativeMarks,
              // eslint-disable-next-line max-len
              activeQuestionUnattemptedMarks: newArray[0]?.questions[0]?.questionUnattemptedMarks,
              activeQuestionGroupId: newArray[0]?.questions[0]?.questionGroupId,
            }),
            setOpenConfirmModal(false),
            setOpenSuccessModal(false),
            isTimerStopped(STOP_TIMER_CONSTANTS.SECTION_SUBMITTED),
          );
        }
        return of(
          errorRegisteringTheData(res),
          isTimerStopped(STOP_TIMER_CONSTANTS.FAILED_API_CALL),
        );
      }),
      takeUntil(action$.pipe(ofType(REGISTER_THE_DATA))),
      catchError((error) => {
        return of(
          errorRegisteringTheData(error.response?.data?.message || ''),
          isTimerStopped(STOP_TIMER_CONSTANTS.FAILED_API_CALL),
        );
      }),
    );
  }),
);

// For Quiz Menu
export const epicDetailsOfQuizQuestions = (action$, state$) => action$.pipe(
  ofType(GET_DETAILS_OF_QUIZ_QUESTION),
  pluck('payload'),
  mergeMap(() => {
    const { module_group_id, unitGroupId, examId } = state$.value.reducerQuizUnit;
    const {
      activeQuestionsData,
    } = state$.value.reducerQuizInstructions;
    const { courseGroupId } = state$.value.reducerChooseCourses;
    const {
      questionTime, sectionTime, questionStatus,
    } = state$.value.reducerQuizQuestion;
    const body = {
      module_group_id,
      examId,
      unitGroupId,
      courseGroupId,
    };
    return from(quizMenuData(body)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          return of(
            setActiveQuestionsData({
              ...activeQuestionsData,
              activeQuestionSectionTime: questionTime,
              activeSectionTime: sectionTime,
            }),
            setQuestionStatus({
              ...questionStatus,
              attempted: 0,
              markAsReview_Attempted: 0,
              markAsReview_Unattempted: 0,
              unAttempted: 0,
            }),
            gotReviewQuizData(res?.data),
            setScreen(true),
          );
        }
        return errorDetailsOfQuizQuestion(res);
      }),
      takeUntil(action$.pipe(ofType(GET_DETAILS_OF_QUIZ_QUESTION))),
      catchError((error) => {
        return of(errorDetailsOfQuizQuestion(error.response?.data?.message || ''));
      }),
    );
  }),
);

// For Pause Active Quiz
export const epicPauseActiveQuiz = (action$, state$) => action$.pipe(
  ofType(PAUSE_ACTIVE_QUIZ),
  pluck('payload'),
  mergeMap((screenTime) => {
    const { module_group_id, examId } = state$.value.reducerQuizUnit;
    const { activeQuestionsData } = state$.value.reducerQuizInstructions;
    const { activeQuestionGroupId, activeSectionId } = activeQuestionsData;
    const body = {
      exam_id: examId,
      last_question: activeQuestionGroupId,
      last_question_consumed_time: screenTime,
      last_active_section: activeSectionId,
      module_id: module_group_id,
    };
    return from(pauseQuiz(body)).pipe(
      map((res) => {
        if (res.code === 200) return pauseQuizData(res?.data);
        return errorDetailsOfQuizQuestion(res);
      }),
      takeUntil(action$.pipe(ofType(PAUSE_ACTIVE_QUIZ))),
      catchError((error) => {
        return of(errorDetailsOfQuizQuestion(error.response?.data?.message || ''));
      }),
    );
  }),
);

// For Restart Active Quiz
export const epicRestartActiveQuiz = (action$, state$) => action$.pipe(
  ofType(RESTART_TIMER),
  pluck('payload'),
  mergeMap(() => {
    const { module_group_id, examId } = state$.value.reducerQuizUnit;
    const { activeQuestionsData } = state$.value.reducerQuizInstructions;
    const { activeQuestionId, activeSectionId } = activeQuestionsData;
    const body = {
      exam_id: examId,
      module_id: module_group_id,
      last_question_id: activeQuestionId,
      last_active_section: activeSectionId,
      pause_time: 0,
    };
    return from(reStartQuiz(body)).pipe(
      map((res) => {
        if (res.code === 200) return restartTimerData(res?.data);
        return errorDetailsOfQuizQuestion(res);
      }),
      takeUntil(action$.pipe(ofType(RESTART_TIMER))),
      catchError((error) => {
        return of(errorDetailsOfQuizQuestion(error.response?.data?.message || ''));
      }),
    );
  }),
);

// For checking Question then Pause It
export const epicCheckNextAndReviewWhenPause = (action$, state$) => action$.pipe(
  ofType(CHECK_NEXT_AND_REVIEW_PAUSE),
  pluck('payload'),
  mergeMap((item) => {
    const { module_group_id, unitGroupId, examId } = state$.value.reducerQuizUnit;
    const { courseGroupId } = state$.value.reducerChooseCourses;
    const { activeQuestionsData } = state$.value.reducerQuizInstructions;
    const { questionTime } = state$.value.reducerQuizQuestion;
    const {
      finalOptions, screenTime, status,
    } = item;
    const body = {
      module_id: module_group_id,
      exam_id: examId,
      unit_id: unitGroupId,
      course_id: courseGroupId,
      question_id: activeQuestionsData.activeQuestionId,
      question_group_id: activeQuestionsData.activeQuestionGroupId,
      section_id: activeQuestionsData.activeSectionId,
      answer_id: finalOptions,
      answer_text: [],
      remaning_time: questionTime === -1 ? 0 : questionTime,
      consumed_time: screenTime,
      markasreview: status,
    };
    return from(sendData(body)).pipe(
      mergeMap((res) => {
        if (res.code === 200) return of(pauseActiveQuiz(screenTime));
        return of(errorCheckNextAndReview(res));
      }),
      takeUntil(action$.pipe(ofType(CHECK_NEXT_AND_REVIEW_PAUSE))),
      catchError((error) => {
        return of(errorCheckNextAndReview(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicAutoSaveSection = (action$, state$) => action$.pipe(
  ofType(AUTO_SAVE_SECTION),
  pluck('payload'),
  mergeMap((item) => {
    const { module_group_id, unitGroupId, examId } = state$.value.reducerQuizUnit;
    const { courseGroupId } = state$.value.reducerChooseCourses;
    const { activeQuestionsData } = state$.value.reducerQuizInstructions;
    const { questionTime, prevUserScreenTime } = state$.value.reducerQuizQuestion;
    const {
      finalOptions, screenTime, status, navigation,
    } = item;
    const body = {
      module_id: module_group_id,
      exam_id: examId,
      unit_id: unitGroupId,
      course_id: courseGroupId,
      question_id: activeQuestionsData.activeQuestionId,
      question_group_id: activeQuestionsData.activeQuestionGroupId,
      section_id: activeQuestionsData.activeSectionId,
      answer_id: finalOptions,
      answer_text: [],
      remaning_time: questionTime === -1 ? 0 : questionTime,
      consumed_time: screenTime,
      markasreview: status,
    };
    // console.log('body', body);
    return from(sendData(body)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          const dataSet = {
            activeQuestionId: activeQuestionsData.activeQuestionId,
            remainingTime: res.data.remaning_time,
            navigation,
          };
          return of(
            setUserScreenTime(prevUserScreenTime),
            autoUpdateQuestionTime(dataSet),
          );
        }
        return of(
          errorCheckNextAndReview(res),
          isTimerStopped(STOP_TIMER_CONSTANTS.FAILED_API_CALL),
        );
      }),
      takeUntil(action$.pipe(ofType(AUTO_SAVE_SECTION))),
      catchError((error) => {
        return of(
          errorCheckNextAndReview(error.response?.data?.message || ''),
          isTimerStopped(STOP_TIMER_CONSTANTS.FAILED_API_CALL),
        );
      }),
    );
  }),
);

export const epicAutoUpdateQuestionTime = (action$) => action$.pipe(
  ofType(AUTO_UPDATE_QUESTION_TIME),
  pluck('payload'),
  mergeMap((data) => {
    const {
      activeQuestionId, remainingTime, navigation,
    } = data;
    return from(updateQuestionTime(activeQuestionId, remainingTime)).pipe(
      mergeMap((res) => {
        if (res.code === 200) {
          return of(
            submitTheSection({ navigation }),
          );
        }
        return errorUpdatingQuestionTime(res);
      }),
      takeUntil(action$.pipe(ofType(AUTO_UPDATE_QUESTION_TIME))),
      catchError((error) => {
        return of(errorUpdatingQuestionTime(error.response?.data?.message || ''));
      }),
    );
  }),
);

export const epicGetQuestion = (action$, state$) => action$.pipe(
  ofType(GET_NEXT_QUESTION),
  pluck('payload'),
  mergeMap((questionId) => {
    const { activeQuestionsData } = state$.value.reducerQuizInstructions;
    const { activeQuestions } = activeQuestionsData;
    return from(getQuestion(activeQuestions, questionId)).pipe(
      map((question) => {
        return setActiveQuestionsData({
          ...activeQuestionsData,
          activeQuestionSectionTime: question?.questionTime,
          activeQuestionOrder: question?.questionOrder,
          activeQuestionId: question?.questionId,
          activeQuestionTitle: question?.questionName,
          activeQuestionOptions: question?.answers,
          activeQuestionGroupId: question?.questionGroupId,
          activeQuestionMarks: question?.questionMarks,
          activeQuestionNegativeMarks: question?.questionNegativeMarks,
          activeQuestionUnattemptedMarks: question?.questionUnattemptedMarks,
        });
      }),
      takeUntil(action$.pipe(ofType(GET_NEXT_QUESTION))),
      catchError((error) => {
        return of(errorGettingNextQuestion(error));
      }),
    );
  }),
);
