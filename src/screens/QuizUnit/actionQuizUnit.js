const module_key = 'quizUnit';

export const SET_COURSE_ID = `${module_key}_set_course_id`;
export const SET_COURSE_DATA = `${module_key}_courses_data`;
export const ERROR_GETTING_COURSE_DATA = `${module_key}_error_getting_courses_data`;
export const SET_TABLE_DATA = `${module_key}_table_data`;
export const SET_SHOW_INDEX = `${module_key}_show_index`;
export const SET_LAST_INDEX = `${module_key}_last_index`;
export const SET_SHOW_LOCK = `${module_key}_show_lock`;
export const GET_MODULE_QUESTION = `${module_key}_get_module_question`;
export const SET_SECTION_TIMER_ENABLE = `${module_key}_set_section_timer_enable`;
export const SET_QUIZ_TIMER_ZERO = `${module_key}_set_quiz_timer_zero`;
export const SET_ACTIVE_QUIZ_TITLE = `${module_key}_set_active_quiz_title`;
export const SET_ACTIVE_QUIZ_TIME = `${module_key}_set_active_quiz_time`;
export const SET_QUIZ_INFO = `${module_key}_set_quiz_info`;
export const DATA_MIGRATION = `${module_key}_data_migration`;
export const ERROR_GETTING_QUESTION_DETAILS = `${module_key}_error_getting_question_details`;
export const SET_ID = `${module_key}_set_id`;
export const SET_TITLE = `${module_key}_set_title`;
export const SET_ACTIVE_MODULE_QUIZ = `${module_key}_active_module_quiz`;
export const DATA_MIGRATION_DONE = `${module_key}_data_migration_done`;
export const ERROR_DATA_MIGRATION = `${module_key}_error_data_migration`;
export const IS_QUIZ_SUBMITTED = `${module_key}_is_quiz_submit`;
export const IS_LOADING = `${module_key}_is_Loading`;
export const SET_UNIT_NAME = `${module_key}_set_unit_name`;
export const SET_UNIT_ID = `${module_key}_set_unit_id`;
export const SET_EXAM_ID = `${module_key}_set_exam_id`;
export const GET_RESUME_DATA = `${module_key}_get_resume_data`;
export const SET_RESUME_DATA = `${module_key}_set_resume_data`;
export const ERROR_GETTING_RESUME_DATA = `${module_key}_error_getting_resume_data`;
export const IS_RESUME_QUIZ = `${module_key}_is_resume_quiz`;
export const SET_UNIT_INDEX = `${module_key}_set_unit_index`;
export const SET_MODULE_GROUP_ID = `${module_key}_set_module_group_id`;

export const setLoading = (data) => ({
  type: IS_LOADING,
  payload: data,
});

export const setSelectedCoursesData = () => ({
  type: SET_COURSE_ID,
  payload: {},
});

export const errorGettingData = (data) => ({
  type: ERROR_GETTING_COURSE_DATA,
  payload: data,
});

export const setCoursesData = (data) => ({
  type: SET_COURSE_DATA,
  payload: data,
});

export const setTableData = (data) => ({
  type: SET_TABLE_DATA,
  payload: data,
});

export const setShowIndex = (data) => ({
  type: SET_SHOW_INDEX,
  payload: data,
});

export const setLastIndex = (data) => ({
  type: SET_LAST_INDEX,
  payload: data,
});

export const setShowLock = (data) => ({
  type: SET_SHOW_LOCK,
  payload: data,
});

export const getModuleQuestion = (data) => ({
  type: GET_MODULE_QUESTION,
  payload: data,
});

export const setSectionTimerEnable = (data) => ({
  type: SET_SECTION_TIMER_ENABLE,
  payload: data,
});

export const setQuizTimerZero = (data) => ({
  type: SET_QUIZ_TIMER_ZERO,
  payload: data,
});

export const setActiveQuizTitle = (data) => ({
  type: SET_ACTIVE_QUIZ_TITLE,
  payload: data,
});

export const setActiveQuizTime = (data) => ({
  type: SET_ACTIVE_QUIZ_TIME,
  payload: data,
});

export const setQuizInfo = (data) => ({
  type: SET_QUIZ_INFO,
  payload: data,
});

export const dataMigration = (data) => ({
  type: DATA_MIGRATION,
  payload: data,
});

export const errorGettingQuestionDetails = (data) => ({
  type: ERROR_GETTING_QUESTION_DETAILS,
  payload: data,
});

export const setId = (data) => ({
  type: SET_ID,
  payload: data,
});

export const setTitle = (data) => ({
  type: SET_TITLE,
  payload: data,
});

export const setActiveModuleQuiz = (data) => ({
  type: SET_ACTIVE_MODULE_QUIZ,
  payload: data,
});

export const setDataMigrationStatus = () => ({
  type: DATA_MIGRATION_DONE,
  payload: {},
});

export const errorDataMigration = (data) => ({
  type: ERROR_DATA_MIGRATION,
  payload: data,
});

export const isQuizSubmitted = (data) => ({
  type: IS_QUIZ_SUBMITTED,
  payload: data,
});

export const setUnitName = (data) => ({
  type: SET_UNIT_NAME,
  payload: data,
});

export const setUnitId = (data) => ({
  type: SET_UNIT_ID,
  payload: data,
});

export const setExamId = (data) => ({
  type: SET_EXAM_ID,
  payload: data,
});

export const getResumeData = (data) => ({
  type: GET_RESUME_DATA,
  payload: data,
});

export const setResumeData = (data) => ({
  type: SET_RESUME_DATA,
  payload: data,
});

export const errorGettingResumeData = (data) => ({
  type: ERROR_GETTING_RESUME_DATA,
  payload: data,
});

export const setIsResumeQuiz = (data) => ({
  type: IS_RESUME_QUIZ,
  payload: data,
});

export const setUnitIndex = (data) => ({
  type: SET_UNIT_INDEX,
  payload: data,
});

export const setModuleGroupId = (data) => ({
  type: SET_MODULE_GROUP_ID,
  payload: data,
});
