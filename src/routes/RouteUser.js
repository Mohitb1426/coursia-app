import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import propTypes from 'prop-types';
import { ColorTheme, FontTheme } from '../common/AppStyles';
import ScreenNetworkLogger from '../common/context/customInterceptor/ScreenNetworkLogger';
import ComponentDrawer from './Drawer/ComponentDrawer';
import {
  CourseUnitScreen,
  EnrollCourseScreen,
  MyCoursesScreen,
  ChooseCoursesScreen,
  BuyCourseScreen,
  QuizInstructionsScreen,
  QuizResultQuestionSheetScreen,
  QuizResultGraphScreen,
  QuizQuestionScreen,
  QuizUnit,
  QuizResultAnswerScreen,
  MyCourseUnitScreen,
  ScreenSupport,
  BuySubscriptionPassScreen,
  ViewAllChooseCourseScreen,
  ViewSavedQuizScreen,
  SubscriptionScreen,
  CameraPermissionsScreen,
  AskDoubtScreen,
  DoubtsDetailsScreen,
  QuizCourseScreen,
  PaymentSuccessfulScreen,
  ViewPDFScreen,
  ComingSoonScreen,
} from '../screens';
import {
  BlackBoxDashBoardScreen,
  BlackBoxQuizDetailListScreen,
  BlackBoxQuizInstructionScreen,
  BlackBoxQuestionScreen,
} from '../screens/BlackBox';
import { Routes } from './Routes';
import MediaPlayerScreen from '../screens/MediaPlayerScreen';
import MyLibraryScreen from '../screens/DownloadCourseScreen';
import NotificationScreen from '../screens/Notifications';
import HomeSearchScreen from '../screens/Home/HomeSearchScreen';
import CurrentAffairs from '../screens/CurrentAffairs';
import ImageWebView from '../components/ImageWebView';
import EditProfile from '../screens/UpdateProfileScreen';

const StackNav = createStackNavigator();
const options = {
  animationEnabled: true,
  gesturesEnabled: true,
  swipeEnabled: true,
};

const screenOptions = {
  ...options,
  headerTintColor: 'black',
  headerStyle: {
    backgroundColor: ColorTheme.blue,
  },
  headerTitleStyle: {
    fontFamily: FontTheme.MEDIUM,
  },
};

function RouteUser({ show }) {
  if (!show) return null;
  return (
    <StackNav.Navigator
      initialRouteName="DrawerStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNav.Screen
        name="DrawerStack"
        component={ComponentDrawer}
        options={() => {
          return {
            ...screenOptions,
            headerShown: false,
            title: 'Home',
          };
        }}
      />
      <StackNav.Screen name={Routes.SCREEN_ASK_DOUBT} component={AskDoubtScreen} />
      <StackNav.Screen
        name={Routes.SCREEN_MY_COURSES}
        component={MyCoursesScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_QUIZ_UNIT}
        component={QuizUnit}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_COURSE}
        component={ChooseCoursesScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_ENROLL_COURSE}
        component={EnrollCourseScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_COURSE_UNIT}
        component={CourseUnitScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_MEDIA_PLAYER}
        component={MediaPlayerScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_QUIZ_INSTRUCTIONS}
        component={QuizInstructionsScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_QUIZ_QUESTION_SCREEN}
        component={QuizQuestionScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_QUIZ_RESULT_GRAPH}
        component={QuizResultGraphScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_QUIZ_QUESTIONS_SHEET}
        component={QuizResultQuestionSheetScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_NETWORK_LOGGER}
        component={ScreenNetworkLogger}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_BUY_COURSE}
        component={BuyCourseScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_UPDATE_PROFILE}
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_QUIZ_RESULT_ANSWER}
        component={QuizResultAnswerScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_VIEW_PDF}
        component={ViewPDFScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_MY_COURSE_UNIT}
        component={MyCourseUnitScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_SUPPORT}
        component={ScreenSupport}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_BUY_SUBSCRIPTION_PASS}
        component={BuySubscriptionPassScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_SUBSCRIPTION}
        component={SubscriptionScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_LIBRARY_SCREEN}
        component={MyLibraryScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_NOTIFICATION}
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_HOME_SEARCH}
        component={HomeSearchScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_VIEW_ALL_CHOOSE_COURSE}
        component={ViewAllChooseCourseScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_VIEW_SAVED_QUIZ}
        component={ViewSavedQuizScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_CURRENT_AFFAIRS}
        component={CurrentAffairs}
      />
      <StackNav.Screen
        name={Routes.SCREEN_CAMERA_PERMISSION}
        component={CameraPermissionsScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_IMAGE_WEBVIEW}
        component={ImageWebView}
        options={{ headerShown: true, title: '' }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_DOUBT_DETAILS}
        component={DoubtsDetailsScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_QUIZ_COURSE}
        component={QuizCourseScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_BLACK_BOX_DASHBOARD}
        component={BlackBoxDashBoardScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_BLACK_BOX_QUESTION}
        component={BlackBoxQuestionScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_BLACK_BOX_QUIZ_DETAIL_LIST}
        component={BlackBoxQuizDetailListScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_BLACK_BOX_QUIZ_INSTRUCTION}
        component={BlackBoxQuizInstructionScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_PAYMENT_SUCCESS}
        component={PaymentSuccessfulScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.SCREEN_COMING_SOON}
        component={ComingSoonScreen}
        options={{ headerShown: false }}
      />

    </StackNav.Navigator>
  );
}

RouteUser.propTypes = {
  show: propTypes.bool,
};

export default RouteUser;
