import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs';
import { debugLog } from '../../common/Logger';
import {
  epicAddCourse,
  epicGetUserDetails,
  epicUpdateUserProfile,
  epicCreatePaymentLink,
  epicCreatePaymentLinkForCourse,
  epicGetCourseUnitData,
  epicVerifyPayment,
} from '../../screens/BuyCourseScreen/epicBuyCourse';
import {
  epicGetCourses,
  epicSetCourseDetail,
  epicSetCourseDetailById,
  epicSetCourseSummary,
  epicCourseCategoriesList,
} from '../../screens/ChooseCoursesScreen/epicChooseCourses';
import { epicSendingOtp } from '../../screens/LogInScreen/epicLogin';
import {
  epicCourseData,
  epicGetModuleQuestions,
  epicMigrationData,
  epicResumeQuiz,
} from '../../screens/QuizUnit/epicQuizUnit';
import {
  epicQuizMenu,
  epicCheckNextAndReview,
  epicUpdateQuestionTime,
  epicGetQuestionData,
  epicSubmitSection,
  epicSubmitQuiz,
  epicRegisterData,
  epicDetailsOfQuizQuestions,
  epicPauseActiveQuiz,
  epicRestartActiveQuiz,
  epicCheckNextAndReviewWhenPause,
  epicAutoSaveSection,
  epicAutoUpdateQuestionTime,
  epicAssessmentModuleStatus,
} from '../../screens/QuizQuestionScreen/epicQuizQuestion';
import {
  epicGetContinueWatchData,
  epicGetUserCoursesData,
  epicUpdateProgress,
  epicGetMyCourseData,
  epicGetContinueVideoData,
  epicStartContinueVideo,
} from '../../screens/MyCoursesScreen/epicMyCourses';
import {
  epicVerifyOtp,
  epicResendOtp,
  epicAutoVerifyOtp,
  epicGetState,
  epicGetCity,
} from '../../screens/OtpScreen/epicOtp';
import { epicIntro, epicGetFeatureList } from '../../screens/IntroScreen/epicIntro';
import { epicGetResultGraphData } from '../../screens/QuizResultGraphScreen/epicResultGraph';
import { epicGetResultQuesSheetData } from '../../screens/QuizResultQuestionSheetScreen/epicQuizResultSheet';
import {
  epicGetQuizAnswer,
  epicPostQuizComment,
  epicGetQuizComment,
  epicSetQuestionBookMark,
  epicGetCourseDetails,
} from '../../screens/QuizResultAnswerScreen/epicQuizResultAnswer';
import {
  epicSetBookMark,
  epicGettingBookMark,
  epicSentNote,
  epicGetNotes,
  epicGetAllNotes,
  epicGetAllBookMark,
  epicUpdateVideoData,
  epicSetVideoWatched,
  epicUpdateNote,
  epicUpdateCloseVideoData,
  epicUpdateFreemiumVideoData,
} from '../../screens/MediaPlayerScreen/epicMediaPlayer';
import {
  epicGetPaidPdfData,
  epicGetPaidVideoData,
  epicGetPdfData,
  epicGetVideoData,
} from '../../screens/MyCourseUnitScreen/epicCourseUnitScreen';
import epicOfflineData from '../../screens/DownloadCourseScreen/epicDownloadCourse';
import {
  epicUpdateProfile,
  epicGetDetails,
  epicProfileUpdate,
  epiGetDetailsFromAskDoubt,
  epiGetDetailsFromCommentQuiz,
  epicGetProfileImage,
} from '../../screens/UpdateProfileScreen/epicUpdateProfile';
import { epicDrawer, epicGetUserPassDetails } from '../../routes/Drawer/epicDrawer';
import {
  epicGetNotificationList,
  epicDeleteNotification,
  epicReadNotification,
  epicSaveOsToken,
} from '../../screens/Notifications/epicNotification';
import {
  epicSearch,
  epicGetStoryCarouseData,
  epicReadStory,
  epicGetMiddleMenu,
  epicHomeScreenComponentOrder,
  epicGetHomeScreenBanner,
} from '../../screens/Home/epicHome';
import { epicGetAllCourses } from '../../screens/ViewAllChooseCourseScreen/epicViewAllChooseCourse';
import {
  epicGetTagList,
  epicUploadUserComment,
  epicGetMyDoubts,
  epicGetAllDoubts,
  epicFilterMyDoubts,
  epicFilterAllDoubts,
  epicDeleteTicket,
  epicSearchGetMyDoubts,
  epicSearchGetAllDoubts,
  epicReloadMyDoubts,
  epicReloadAllDoubts,
  epicCheckActiveFeature,
} from '../../screens/AskDoubtScreen/epicAskDoubtScreen';
import { captureErrorLogs } from '../../utilities/Sentry';
import { epicGetStudentDashboard, epicGetStudentLeaderBoard } from '../../screens/StudentDashboard/epicStudentDashboard';
import {
  epicGetAvailableDates, epicGetCurrentAffairs,
  epicSetCurrentAffairsBookmark, epicCurrentAffairsOfflineData,
  removeCurrentAffairBookmarkEpic, addedCurrentAffairBookmarkEpic,
} from '../../screens/CurrentAffairs/epicCurrentAffairs';
import { epicGetQuizCourses, epicGetStandardList, epicGetSubjectList } from '../../screens/QuizByCategoryScreen/epicQuizByCategory';
import { epicGeneratePaymentLink, epicSubscriptionDetailsList, epicVerifyPaymentOrder } from '../../screens/BuySubscriptionPassScreen/epicBuySubscription';
import { epicActivateSubscriptionPlan, epicSubscriptionList } from '../../screens/SubscriptionScreen/epicSubscriptionScreen';
import { epicGetDoubtsData } from '../../screens/DoubtDetailsScreen/epicDoubtDetails';
import { epicGetMaterial, epicGetMaterialStandardList, epicGetMaterialSubjectList } from '../../screens/MaterialsTabScreen/epicMaterialsTab';

// BlackBox Epic
import { epicBlackBoxQuestionList, epicBlackBoxSubmitQuiz } from '../../screens/BlackBox/BlackBoxScreen/BlackBoxQuestionScreen/epicBlackBoxQuestion';
import { epicBlackBoxSummaryData, epicBlackBoxAnalysisData, epicCheckActiveFeatureBlackBox } from '../../screens/BlackBox/BlackBoxScreen/BlackBoxDashBoardScreen/epicBlackBoxDashBoard';
import { epicBlackBoxDetailListData } from '../../screens/BlackBox/BlackBoxScreen/BlackBoxQuizDetailListScreen/epicBlackBoxQuizDetailList';
import { epicCheckActiveFeatureRecordedClass } from '../../screens/EnrollCourseScreen/epicEnrollCourses';

const epics = [
  epicSendingOtp,
  epicVerifyOtp,
  epicGetCourses,
  epicCourseData,
  epicSetCourseDetail,
  epicSetCourseDetailById,
  epicSetCourseSummary,
  epicGetVideoData,
  epicGetPdfData,
  epicGetModuleQuestions,
  epicMigrationData,
  epicResendOtp,
  epicAutoVerifyOtp,
  epicQuizMenu,
  epicCheckNextAndReview,
  epicUpdateQuestionTime,
  epicGetQuestionData,
  epicSubmitSection,
  epicSubmitQuiz,
  epicRegisterData,
  epicGetUserDetails,
  epicUpdateProgress,
  epicGetUserCoursesData,
  epicGetContinueWatchData,
  epicGetState,
  epicGetCity,
  epicUpdateUserProfile,
  epicAddCourse,
  epicCreatePaymentLink,
  epicCreatePaymentLinkForCourse,
  epicIntro,
  epicGetResultGraphData,
  epicGetResultQuesSheetData,
  epicGetQuizAnswer,
  epicSetBookMark,
  epicGettingBookMark,
  epicSentNote,
  epicGetNotes,
  epicGetAllNotes,
  epicGetAllBookMark,
  epicGetMyCourseData,
  epicGetPaidVideoData,
  epicGetPaidPdfData,
  epicUpdateVideoData,
  epicOfflineData,
  epicSetVideoWatched,
  epicStartContinueVideo,
  epicGetContinueVideoData,
  epicUpdateProfile,
  epicGetDetails,
  epicProfileUpdate,
  epiGetDetailsFromAskDoubt,
  epicDetailsOfQuizQuestions,
  epicSaveOsToken,
  epicUpdateNote,
  epicDrawer,
  epicGetNotificationList,
  epicReadNotification,
  epicDeleteNotification,
  epicSetQuestionBookMark,
  epicResumeQuiz,
  epicPauseActiveQuiz,
  epicRestartActiveQuiz,
  epicCheckNextAndReviewWhenPause,
  epicSearch,
  epicGetQuizComment,
  epicPostQuizComment,
  epicGetStoryCarouseData,
  epicReadStory,
  epicGetMiddleMenu,
  epicGetCourseUnitData,
  epicGetCourseDetails,
  epicGetAllCourses,
  epicGetTagList,
  epicUploadUserComment,
  epicGetMyDoubts,
  epicGetAllDoubts,
  epicFilterMyDoubts,
  epicFilterAllDoubts,
  epicDeleteTicket,
  epicGetStudentDashboard,
  epicGetStudentLeaderBoard,
  epicGetCurrentAffairs,
  epicSearchGetMyDoubts,
  epicSearchGetAllDoubts,
  epicReloadMyDoubts,
  epicReloadAllDoubts,
  epicUpdateCloseVideoData,
  epicGetSubjectList,
  epicGetStandardList,
  epicAutoSaveSection,
  epicAutoUpdateQuestionTime,
  epicSubscriptionDetailsList,
  epicSubscriptionList,
  epicGetQuizCourses,
  epiGetDetailsFromCommentQuiz,
  epicCourseCategoriesList,
  epicGetDoubtsData,
  epicUpdateFreemiumVideoData,
  epicGetProfileImage,
  epicActivateSubscriptionPlan,
  epicGetFeatureList,
  epicVerifyPayment,
  epicGeneratePaymentLink,
  epicVerifyPaymentOrder,
  epicCheckActiveFeature,
  epicGetAvailableDates,
  epicSetCurrentAffairsBookmark,
  epicCurrentAffairsOfflineData,
  epicGetUserPassDetails,
  epicHomeScreenComponentOrder,
  epicGetHomeScreenBanner,
  epicGetMaterial,
  epicGetMaterialStandardList,
  epicGetMaterialSubjectList,
  // BlackBox Epics
  epicBlackBoxQuestionList,
  epicBlackBoxSummaryData,
  epicBlackBoxAnalysisData,
  epicBlackBoxDetailListData,
  epicBlackBoxSubmitQuiz,
  removeCurrentAffairBookmarkEpic,
  addedCurrentAffairBookmarkEpic,
  epicCheckActiveFeatureBlackBox,
  epicCheckActiveFeatureRecordedClass,
  epicAssessmentModuleStatus,
];
const TAG = 'rootEpic: ';

const rootEpic = (a$, s$, d) => combineEpics(...epics)(a$, s$, d).pipe(
  catchError((error, source) => {
    debugLog(TAG, error);
    captureErrorLogs(error);
    return source;
  }),
);

export default rootEpic;
