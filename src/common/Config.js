import Config from 'react-native-config';

export const BASE_URL_USER = Config.API_HOST_USER;
export const BASE_URL_AUTH = Config.API_HOST_AUTH;
export const BASE_URL_COURSE = Config.API_HOST_COURSE;
export const BASE_URL_QUIZ = Config.API_HOST_QUIZ;
export const BASE_URL_COURSES = Config.API_HOST_COURSES;
export const BASE_URL_LMS = Config.API_HOST_LMS;
export const BASE_URL_CURRENT_AFFAIR = Config.API_HOST_CURRENT_AFFAIR;

const isStaging = Config.APP_ENV === 'staging';
const useInterceptor = Config.USE_INTERCEPTOR === 'true';
const logErrors = Config.LOG_ERRORS === 'true'; // Log errors in crashlytics
const versionName = Config.ANDROID_VERSION_NAME;
const GOOGLE_WEB_CLIENT_ID = '';

export default {
  versionName,
  isStaging,
  useInterceptor,
  logErrors,
  googleWebClientId: GOOGLE_WEB_CLIENT_ID,
  auth: {
    generateOTP: `${BASE_URL_USER}user/otp`,
    verifyOTP: `${BASE_URL_AUTH}api/user/mobile/login`,
    userProfile: `${BASE_URL_USER}user/profile`,
    state: `${BASE_URL_USER}user/statelist`,
    city: `${BASE_URL_USER}user/citylist`,
    userProfileUpdate: `${BASE_URL_USER}user/profile`,
    userProfileImage: `${BASE_URL_USER}user/image`,
    getFeatureList: `${BASE_URL_LMS}subscriptionplans/getfeaturlist`,
  },
  course: {
    showCourses: `${BASE_URL_COURSES}courses/all`,
    courses: `${BASE_URL_COURSES}courses/`,
    courseSummary: `${BASE_URL_LMS}course-content-summary/`,
    addFreeCourse: `${BASE_URL_USER}courses/free-course-assignment`,
    generatePaymentLink: `${BASE_URL_COURSE}payment/generate-payment-order-course-buy`,
    verifyPaymentData: `${BASE_URL_COURSE}payment/payment-order-status-course-buy`,
    showNewCourses: `${BASE_URL_COURSES}courses/get-courses`,
    categoryCourseListUrl: `${BASE_URL_COURSES}courses/course-category-list`,
  },
  myCourses: {
    readProgressBar: `${BASE_URL_LMS}update-course-read-progress-bar/`,
    userCoursesData: `${BASE_URL_COURSE}mycourses`,
    lastWatchedNodules: `${BASE_URL_LMS}last-watched-modules`,
    myCourses: `${BASE_URL_LMS}lms-details/`,
  },
  quiz: {
    getQuizModule: `${BASE_URL_LMS}course-content-details/`,
    getQuestionDetails: `${BASE_URL_QUIZ}quiz/extended_questionlist`,
    getQuizMenuData: `${BASE_URL_QUIZ}quiz/extended_review`,
    saveAndNext: `${BASE_URL_QUIZ}quiz/extended_saveandnext`,
    submitSection: `${BASE_URL_QUIZ}quiz/savesection`,
    getQuizResult: `${BASE_URL_QUIZ}quiz/extended_getresult`,
    getResumeData: `${BASE_URL_QUIZ}quiz/resumequiz`,
    pauseActiveQuiz: `${BASE_URL_QUIZ}quiz/pausequiz`,
    restartActiveQuiz: `${BASE_URL_QUIZ}quiz/resumecurrentquestion`,
    statusAssessmentModule: `${BASE_URL_COURSE}goaltracker/update-status-assessment-module`,
  },
  video: {
    getFreemiumVideoData: `${BASE_URL_LMS}module-details-freemium/`,
    addNote: `${BASE_URL_LMS}notes/add`,
    getNote: `${BASE_URL_LMS}notes/list`,
    paidVideoPdfLink: `${BASE_URL_LMS}module-details/`,
    watchedVideo: `${BASE_URL_LMS}video-watched`,
    updateNote: `${BASE_URL_LMS}notes/edit`,
  },
  quizResult: {
    getGraphResult: `${BASE_URL_QUIZ}quiz/extended_getresult`,
    getQuestSheet: `${BASE_URL_QUIZ}quiz/extended_getdetailresult`,
    getQuizAnswer: `${BASE_URL_QUIZ}quiz/getquestiondetails`,
    getQuizCommentList: `${BASE_URL_LMS}comments/quizcomments`,
    postQuizComment: `${BASE_URL_LMS}comments/createquizcomment`,
    getCourseDetails: `${BASE_URL_LMS}comments/moduledetails`,
  },
  home: {
    getLanguages: `${BASE_URL_LMS}langauge-list`,
    getUserProfile: `${BASE_URL_USER}user/profile`,
    getHamburgerData: `${BASE_URL_LMS}menuitems-alllist?type=hamburger`,
    homeSearch: `${BASE_URL_COURSES}/courses/all/search`,
    getStoryCarousel: `${BASE_URL_COURSES}courses/get-stories-carousel`,
    readStoryURL: `${BASE_URL_COURSES}courses/read-story-post`,
    middleMenuData: `${BASE_URL_LMS}/menuitems-list?type=middlemenu`,
    getHomeScreenComponentAPI: `${BASE_URL_LMS}/app-setting`,
    getActivePassDetails: `${BASE_URL_LMS}subscriptionplans/activepassdetails`,
    getHomeScreenBanner: `${BASE_URL_LMS}app-componant-banner`,
  },
  notification: {
    getNotificationList: `${BASE_URL_LMS}notification-list`,
    deleteNotification: `${BASE_URL_LMS}notification-delete`,
    readNotification: `${BASE_URL_LMS}notification-update`,
    saveOsToken: `${BASE_URL_LMS}notification-updatetoken`,
    saveOsTokenNotLoggedIn: `${BASE_URL_LMS}notification-updatetoken-notloggedin`,
  },
  comments: {
    getTagList: `${BASE_URL_LMS}comments/gettaglist`,
    createQuizComment: `${BASE_URL_LMS}comments/createdoubtticket`,
    getMyDoubtsList: `${BASE_URL_LMS}comments/mydoubtlist`,
    getAllDoubtsList: `${BASE_URL_LMS}comments/alldoubtlist`,
    deleteTicket: `${BASE_URL_LMS}comments/deletedoubtticket/`,
    activeFeature: `${BASE_URL_LMS}subscriptionplans/validatefeature`,
  },
  quizByCategory: {
    getSubjectList: `${BASE_URL_COURSES}courses/subject-list`,
    getStandardList: `${BASE_URL_COURSES}courses/class-list`,
    getCourseList: `${BASE_URL_COURSES}courses/get-courses-list`,

  },
  subscription: {
    buySubscriptionDetails: `${BASE_URL_LMS}subscriptionplans/planfeatures`,
    getSubscriptionPass: `${BASE_URL_LMS}subscriptionplans`,
    activateSubscriptionPlan: `${BASE_URL_LMS}subscriptionplans/activateplan/`,
    generatePaymentLink: `${BASE_URL_COURSE}payment/generate-payment-order-buy-subscription`,
    verifyPaymentData: `${BASE_URL_COURSE}payment/payment-order-status-buy-subcription-plan`,
  },
  doubtDetail: {
    doubts: `${BASE_URL_LMS}comments/doubtdetails/`,
  },
  currentAffairs: {
    getCADates: `${BASE_URL_CURRENT_AFFAIR}veranda/getCADates`,
    getCurrentAffairs: `${BASE_URL_CURRENT_AFFAIR}veranda/getCurrentAffairs`,
    removeBookmark: `${BASE_URL_CURRENT_AFFAIR}veranda/removeCABookmark`,
    addedBookmark: `${BASE_URL_CURRENT_AFFAIR}veranda/caUserBookmark `,
  },
  studentDashBoard: {
    getStudentDashBoardScore: `${BASE_URL_COURSE}student-dashboard-list`,
    getStudentLeaderBoard: `${BASE_URL_COURSE}student-leaderbord`,
  },
  material: {
    getMaterials: `${BASE_URL_COURSES}courses/quiz-materail-list`,
  },
  blackBox: {
    getBlackBoxSummary: `${BASE_URL_QUIZ}blackbox/getcarddata/`,
    getBlackBoxAnalysis: `${BASE_URL_QUIZ}blackbox/getanalysisdata`,
    getBlackBoxQuizDetailList: `${BASE_URL_QUIZ}blackbox/getmodulewisesectiondata`,
    getBlackBoxQuizQuestionList: `${BASE_URL_QUIZ}blackbox/getquestionlist`,
    blackBoxQuizSubmitURL: `${BASE_URL_QUIZ}blackbox/submitquiz`,
  },
};
