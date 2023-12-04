// import { debugLog } from '../../common/Logger';
import {
  SET_ACTIVE_QUESTIONS,
  TOTAL_ACTIVE_SECTION, ACTIVE_QUESTION_DATA, SHOW_OPTION_RESUME, NUMBER_OF_SECTIONS,
} from './actionQuizInstructions';

const initialState = {
  activeQuestions: [],
  activeQuestionsData: {
    activeQuestionMarks: '',
    activeQuestionNegativeMarks: '',
    activeQuestions: [],
    activeQuestionUnattemptedMarks: '',
    activeSection: '',
    activeSectionTime: '',
    activeQuestionSectionTime: '',
    activeQuestionOrder: 0,
    activeQuestionId: '',
    activeQuestionTitle: '',
    activeQuestionOptions: [],
    lastSectionQuestion: {},
    activeSectionId: '',
    activeQuestionGroupId: '',
  },
  totalActiveSection: [],
  showOptionsResume: false,
  numberOfSections: 1,
};

const reducerQuizInstructions = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ACTIVE_QUESTIONS:
      return {
        ...state,
        activeQuestions: payload,
      };
    case TOTAL_ACTIVE_SECTION:
      return {
        ...state,
        totalActiveSection: payload,
      };
    case ACTIVE_QUESTION_DATA:
      return {
        ...state,
        activeQuestionsData: {
          ...state.activeQuestionsData,
          activeQuestionMarks: payload?.activeQuestionMarks,
          activeQuestionNegativeMarks: payload?.activeQuestionNegativeMarks,
          activeQuestionUnattemptedMarks: payload?.activeQuestionUnattemptedMarks,
          activeQuestions: payload?.activeQuestions,
          activeSection: payload?.activeSection,
          activeSectionTime: payload?.activeSectionTime,
          activeQuestionSectionTime: payload?.activeQuestionSectionTime,
          activeQuestionOrder: payload?.activeQuestionOrder,
          activeQuestionId: payload?.activeQuestionId,
          activeQuestionTitle: payload?.activeQuestionTitle,
          activeQuestionOptions: payload?.activeQuestionOptions,
          lastSectionQuestion: payload?.lastSectionQuestion,
          activeSectionId: payload?.activeSectionId,
          activeQuestionGroupId: payload?.activeQuestionGroupId,
        },
      };
    case SHOW_OPTION_RESUME:
      return {
        ...state,
        showOptionsResume: payload,
      };
    case NUMBER_OF_SECTIONS:
      return {
        ...state,
        numberOfSections: payload,
      };
    default: return state;
  }
};

export default reducerQuizInstructions;
