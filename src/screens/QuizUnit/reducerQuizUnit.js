import {
  SET_ACTIVE_QUIZ_TIME,
  SET_ACTIVE_QUIZ_TITLE,
  SET_COURSE_DATA,
  SET_COURSE_ID,
  SET_ID,
  SET_LAST_INDEX,
  SET_QUIZ_INFO,
  SET_QUIZ_TIMER_ZERO,
  SET_SECTION_TIMER_ENABLE,
  SET_SHOW_INDEX,
  SET_SHOW_LOCK,
  SET_TABLE_DATA,
  SET_TITLE,
  SET_ACTIVE_MODULE_QUIZ,
  IS_QUIZ_SUBMITTED,
  GET_MODULE_QUESTION,
  IS_LOADING,
  ERROR_GETTING_QUESTION_DETAILS,
  SET_UNIT_NAME,
  SET_UNIT_ID,
  ERROR_GETTING_COURSE_DATA,
  SET_EXAM_ID,
  GET_RESUME_DATA,
  SET_RESUME_DATA,
  IS_RESUME_QUIZ,
  SET_UNIT_INDEX,
  SET_MODULE_GROUP_ID,
} from './actionQuizUnit';

const initialState = {
  courseId: '',
  quizModuleData: [],
  isLoading: false,
  tableData: [],
  showIndex: false,
  lastIndex: false,
  showLock: false,
  quizInfo: {
    mins: 0,
    marks: 0,
    questions: 0,
    marksForCorrect: 0,
    marksForWrong: 0,
    different_Marking: 0,
  },
  isSectionTimerEnable: false,
  isQuizTimerZero: false,
  activeQuizTitle: '',
  activeQuizTime: -1,
  id: '',
  title: '',
  quizDetails: {},
  activeModuleQuiz: '',
  isSubmitQuiz: false,
  unitName: '',
  unitId: 0,
  unitGroupId: 0,
  examId: 0,
  isResumeQuiz: false,
  resumeData: {
    lastQuizQuestionId: '',
    lastQuizSectionId: '',
    lastQuizQuestionTime: '',
    lastQuizSectionRemainingTime: '',
  },
  unitIndex: 0,
  module_group_id: 0,
};

export const reducerQuizUnit = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MODULE_QUESTION:
      return {
        ...state,
        isLoading: true,
      };
    // case ERROR_GETTING_RESUME_DATA:
    case ERROR_GETTING_QUESTION_DETAILS:
      return {
        ...state,
        isLoading: false,
      };
    case SET_COURSE_ID:
      return {
        ...state,
        // quizModuleData: [],
        // tableData: [],
        isLoading: true,
      };
    case SET_COURSE_DATA:
      return {
        ...state,
        quizModuleData: payload,
        isLoading: false,
      };
    case SET_TABLE_DATA:
      return {
        ...state,
        tableData: payload,
      };
    case SET_SHOW_INDEX:
      return {
        ...state,
        showIndex: payload,
      };
    case SET_LAST_INDEX:
      return {
        ...state,
        lastIndex: payload,
      };
    case SET_ACTIVE_MODULE_QUIZ:
      return {
        ...state,
        activeModuleQuiz: payload,
      };
    case SET_SHOW_LOCK:
      return {
        ...state,
        showLock: payload,
      };
    case SET_QUIZ_INFO:
      return {
        ...state,
        quizInfo: {
          ...state.quizInfo,
          mins: Math.ceil((payload?.time || 1) / 60),
          marks: payload?.marks,
          questions: payload?.questions,
          marksForCorrect: payload?.marks_for_correct,
          marksForWrong: payload?.marks_for_wrong,
          different_Marking: payload?.different_Marking,
        },
      };
    case SET_SECTION_TIMER_ENABLE:
      return {
        ...state,
        isSectionTimerEnable: payload,
      };
    case ERROR_GETTING_COURSE_DATA:
      return {
        ...state,
        isLoading: false,
      };
    case SET_QUIZ_TIMER_ZERO:
      return {
        ...state,
        isQuizTimerZero: payload,
      };
    case SET_ACTIVE_QUIZ_TITLE:
      return {
        ...state,
        activeQuizTitle: payload,
      };
    case SET_ACTIVE_QUIZ_TIME:
      return {
        ...state,
        activeQuizTime: payload,
        isLoading: false,
      };
    case SET_ID:
      return {
        ...state,
        id: payload,
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload,
      };
    case IS_QUIZ_SUBMITTED:
      return {
        ...state,
        isSubmitQuiz: payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_UNIT_NAME:
      return {
        ...state,
        unitName: payload,
      };
    case SET_UNIT_ID:
      return {
        ...state,
        unitId: payload?.unitId,
        unitGroupId: payload?.unitGroupId,
      };
    case SET_EXAM_ID:
      return {
        ...state,
        examId: payload,
      };
    case GET_RESUME_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case SET_RESUME_DATA:
      return {
        ...state,
        resumeData: {
          ...state.resumeData,
          lastQuizQuestionId: payload?.last_question,
          lastQuizSectionId: payload?.last_section_id,
          lastQuizQuestionTime: payload?.last_question_time,
          lastQuizSectionRemainingTime: payload?.remaining_last_section_time,
        },
        isLoading: false,
        isResumeQuiz: true,
      };
    case IS_RESUME_QUIZ:
      return {
        ...state,
        isResumeQuiz: payload,
      };
    case SET_UNIT_INDEX:
      return {
        ...state,
        unitIndex: payload,
      };
    case SET_MODULE_GROUP_ID:
      return {
        ...state,
        module_group_id: payload,
      };
    default:
      return state;
  }
};
