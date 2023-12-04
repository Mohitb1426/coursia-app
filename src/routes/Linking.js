import { Routes } from './Routes';

const config = {
  screens: {
    DrawerStack: {
      screens: {
        BottomTabStack: {
          screens: {
            Courses: 'courses/:id/:id2',
            Home: 'home',
            Quizzes: 'quizzes',
          },
        },
      },
    },
    // tnspc://Support/1111/222
    // for this above url 1111 will be stored in id and 222 will be stored in id2
    // Support: `${Routes.SCREEN_SUPPORT}/:id/:id2`,
    Support: `${Routes.SCREEN_SUPPORT}`,
    CurrentAffairs: `${Routes.SCREEN_CURRENT_AFFAIRS}/:initialIndex/:initialID`,
    AskDoubtScreen: `${Routes.SCREEN_ASK_DOUBT}`,
    DoubtsDetailsScreen: `${Routes.SCREEN_DOUBT_DETAILS}/:ticket_id`,
    EnrollCourseScreen: `${Routes.SCREEN_ENROLL_COURSE}`,
    CourseUnitScreen: `${Routes.SCREEN_COURSE_UNIT}`,
    QuizResultAnswerScreen: `${Routes.SCREEN_QUIZ_RESULT_ANSWER}/:module_ID/:section_ID/:question_ID/:serialNo`,
    ScreenNetworkLogger: 'screenNetworkLogger',
    SubscriptionScreen: `${Routes.SCREEN_SUBSCRIPTION}`,
    MyCoursesScreen: `${Routes.SCREEN_MY_COURSES} `,
  },
};

const linking = {
  prefixes: ['tnspc://', 'https://*.tnspc.com'],
  config,
};
export default linking;
