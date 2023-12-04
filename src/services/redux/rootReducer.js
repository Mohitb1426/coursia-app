import { combineReducers } from 'redux';
import reducerLogin from '../../screens/LogInScreen/reducerLogin';
import reducerOtp from '../../screens/OtpScreen/reducerOtp';
import reducerIntro from '../../screens/IntroScreen/reducerIntro';
import reducerChooseCourses from '../../screens/ChooseCoursesScreen/reducerChooseCourses';
import { reducerQuizUnit } from '../../screens/QuizUnit/reducerQuizUnit';
import reducerAskDoubt from '../../screens/AskDoubtScreen/reducerAskDoubt';
import reducerMediaPlayer from '../../screens/MediaPlayerScreen/reducerMediaPlayer';
import reducerQuizInstructions from '../../screens/QuizInstructionsScreen/reducerQuizInstructions';
import reducerQuizQuestion from '../../screens/QuizQuestionScreen/reducerQuizQuestion';
import reducerQuizResultQuesSheet from '../../screens/QuizResultQuestionSheetScreen/reducerQuizResultQuesSheet';
import { reducerMyCourses } from '../../screens/MyCoursesScreen/reducerMyCourses';
import reducerBuyCourse from '../../screens/BuyCourseScreen/reducerBuyCourse';
import reducerDrawer from '../../routes/Drawer/reducerDrawer';
import reducerResultGraph from '../../screens/QuizResultGraphScreen/reducerResultGraph';
import reducerQuizResultAnswer from '../../screens/QuizResultAnswerScreen/reducerQuizResultAnswer';
import reducerDownloadCourseUnit from '../../screens/DownloadCourseScreen/reducerDownloadCourse';
import reducerCourseUnit from '../../screens/MyCourseUnitScreen/reducerCourseUnit';
import reducerNotificationHandler from '../../common/context/notification/NotificationHandler/reducerNotificationHandler';
import reducerNotification from '../../screens/Notifications/reducerNotification';
import reducerUpdateProfile from '../../screens/UpdateProfileScreen/reducerUpdateProfile';
import reducerHome from '../../screens/Home/reducerHome';
import reducerViewAllChooseCourses from '../../screens/ViewAllChooseCourseScreen/reducerViewAllChooseCourse';
import reducerStudentDashboard from '../../screens/StudentDashboard/reducerStudentDashboard';
import reducerCurrentAffairs from '../../screens/CurrentAffairs/reducerCurrentAffairs';
import { reducerQuizByCategory } from '../../screens/QuizByCategoryScreen/reducerQuizByCategory';
import reducerBuySubscription from '../../screens/BuySubscriptionPassScreen/reducerBuySubscription';
import reducerSubscription from '../../screens/SubscriptionScreen/reducerSubscription';
import { reducerDoubtDetail } from '../../screens/DoubtDetailsScreen/reducerDoubtDetail';
import { reducerMaterialsTab } from '../../screens/MaterialsTabScreen/reducerMaterialsTab';
// BlackBox Reducers
import reducerBlackBoxQuestion from '../../screens/BlackBox/BlackBoxScreen/BlackBoxQuestionScreen/reducerBlackBoxQuestion';
import reducerBlackBoxDashBoard from '../../screens/BlackBox/BlackBoxScreen/BlackBoxDashBoardScreen/reducerBlackBoxDashBoard';
import reducerBlackBoxQuizDetailList from '../../screens/BlackBox/BlackBoxScreen/BlackBoxQuizDetailListScreen/reducerBlackBoxQuizDetailList';
import reducerEnrollCourse from '../../screens/EnrollCourseScreen/reducerEnrollCourse';

const rootReducer = combineReducers({
  reducerLogin,
  reducerOtp,
  reducerIntro,
  reducerChooseCourses,
  reducerQuizUnit,
  reducerAskDoubt,
  reducerCourseUnit,
  reducerMediaPlayer,
  reducerQuizInstructions,
  reducerQuizResultQuesSheet,
  reducerQuizQuestion,
  reducerMyCourses,
  reducerBuyCourse,
  reducerDrawer,
  reducerResultGraph,
  reducerQuizResultAnswer,
  reducerDownloadCourseUnit,
  reducerNotificationHandler,
  reducerNotification,
  reducerUpdateProfile,
  reducerHome,
  reducerViewAllChooseCourses,
  reducerStudentDashboard,
  reducerCurrentAffairs,
  reducerQuizByCategory,
  reducerSubscription,
  reducerBuySubscription,
  reducerDoubtDetail,
  reducerMaterialsTab,
  // BlackBox Screen
  reducerBlackBoxQuestion,
  reducerBlackBoxDashBoard,
  reducerBlackBoxQuizDetailList,
  reducerEnrollCourse,
});

export default rootReducer;
