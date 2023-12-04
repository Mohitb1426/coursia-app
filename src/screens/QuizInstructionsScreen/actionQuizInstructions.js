const module_key = 'quiz_instructions';
export const SET_ACTIVE_QUESTIONS = `${module_key}_active_questions`;
export const TOTAL_ACTIVE_SECTION = `${module_key}_total_active_section`;
export const ACTIVE_QUESTION_DATA = `${module_key}_set_active_question_data`;
export const SHOW_OPTION_RESUME = `${module_key}_show_options_resume`;
export const NUMBER_OF_SECTIONS = `${module_key}_number_of_sections`;

export const setActiveQuestions = (data) => ({
  type: SET_ACTIVE_QUESTIONS,
  payload: data,
});

export const setTotalActiveSection = (data) => ({
  type: TOTAL_ACTIVE_SECTION,
  payload: data,
});

export const setActiveQuestionsData = (data) => ({
  type: ACTIVE_QUESTION_DATA,
  payload: data,
});

export const setShowOptionsResume = (data) => ({
  type: SHOW_OPTION_RESUME,
  payload: data,
});

export const setNumberOfSections = (data) => ({
  type: NUMBER_OF_SECTIONS,
  payload: data,
});
