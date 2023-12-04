import Images from '../../common/Images';
import {
  ScreenHome,
  QuizCourseScreen,
  MaterialsTabScreen,
} from '../../screens';
import { Routes } from '../Routes';

export const ID_SCREEN_HOME = 1;
export const ID_SCREEN_MATERIALS = 2;
export const ID_SCREEN_QUIZZES = 3;
export const ID_SCREEN_SUPPORT = 4;

export const bottomTabBarData = [
  {
    id: ID_SCREEN_HOME,
    name: Routes.SCREEN_HOME,
    component: ScreenHome,
    eTitle: 'Home',
    tTitle: 'வீடு',
    isFree: false,
    icon: Images.NEW_HOME_ICON,
    iconSelected: Images.SELECTED_HOME,
    darkIcon: Images.DARK_HOME_UNSELECTED,
  },
  {
    id: ID_SCREEN_MATERIALS,
    name: 'Materials',
    component: MaterialsTabScreen,
    eTitle: 'Materials',
    tTitle: 'பொருட்கள்',
    isFree: true,
    icon: Images.NEW_MATERIALS_ICON,
    iconSelected: Images.SELECTED_MATERIAL,
    darkIcon: Images.DARK_MATERIALS_UNSELECTED,
  },
  {
    id: ID_SCREEN_SUPPORT,
    name: 'Quizzes',
    component: QuizCourseScreen,
    eTitle: 'Quizzes',
    tTitle: 'வினாடி வினாக்கள்',
    isFree: true,
    icon: Images.NEW_QUIZZES_ICON,
    iconSelected: Images.SELECTED_QUIZZES,
    darkIcon: Images.DARK_QUIZZES_UNSELECTED,
  },
];
