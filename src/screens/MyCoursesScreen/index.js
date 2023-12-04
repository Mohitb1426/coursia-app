import {
  View, Text, FlatList, StatusBar,
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { useFocusEffect } from '@react-navigation/native';
import { LocalizationContext } from '../../common/LocalizationProvider';
import styles from './style';
import ComponentCourseListItem from './Components/ComponentCourseItem/ComponentCourseListItem';
import {
  continueWatchSuccess,
  getContinueWatchData, getMyCourseData, getProgressOfCourse, startContinueVideo,
} from './actionMyCourses';
import ComponentListItem from './Components/ComponentListItem/ComponentListItem';
import Loader from '../../components/Loader';
import { Routes } from '../../routes/Routes';
import { ASSESSMENT } from './constantsMyCoursesScreen';
import {
  isQuizBuy, setCourseId, setTitle, setCourseGroupId, setAssessmentName,
} from '../ChooseCoursesScreen/actionChooseCourses';
import { setResumeVideoTime } from '../MediaPlayerScreen/actionMediaPlayer';
import { setSelectedCoursesData } from '../QuizUnit/actionQuizUnit';
import { ComponentHeader } from '../../components';
import useBackButton from '../../hooks/useBackButton';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';

export function MyCoursesScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const { appTheme, darkMode } = useContext(ThemeContext);
  const myCoursesState = useSelector((state) => state.reducerMyCourses);
  const dispatch = useDispatch();
  const {
    myCourseData, continueWatchData, isLoading, gotUrl,
  } = myCoursesState;
  const { translations } = useContext(LocalizationContext);
  const TAG = 'MyCoursesScreen';

  const courseModuleDetail = async (item) => {
    // eslint-disable-next-line eqeqeq
    if (item.course_type_clp == '1') {
      dispatch(setAssessmentName(item?.course_title));
      dispatch(setCourseId(item?.course_id));
      dispatch(setCourseGroupId(item?.course_group_id));
      dispatch(getMyCourseData({ course_id: item?.course_id, navigation }));
    } else if (ASSESSMENT.includes(String(item?.course_type_clp))) {
      dispatch(setCourseId(item?.course_id));
      dispatch(setCourseGroupId(item?.course_group_id));
      dispatch(setTitle(item?.course_title));
      dispatch(setSelectedCoursesData());
      dispatch(isQuizBuy(true));
      navigation.navigate(Routes.SCREEN_QUIZ_UNIT);
    }
  };
  const getVideoUrl = async (
    course_id,
    module_id,
    unit_id,
    batch_id,
    lastPlayTime,
  ) => {
    dispatch(setCourseId(course_id));
    dispatch(setResumeVideoTime({
      resumeTime: lastPlayTime,
      unit_id,
      module_id,
      batch_id,
    }));
    dispatch(startContinueVideo({
      course_id,
      module_id,
      unit_id,
      batch_id,
    }));
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getProgressOfCourse());
      dispatch(getContinueWatchData());
    }, []),
  );

  useEffect(() => {
    if (gotUrl) {
      navigation.navigate(Routes.SCREEN_MEDIA_PLAYER, { previousScreen: TAG });
    }
    return (() => dispatch(continueWatchSuccess(false)));
  }, [gotUrl]);

  const navigateBack = () => {
    navigation.navigate(Routes.SCREEN_HOME);
    return true;
  };

  useBackButton(() => {
    navigateBack();
    return true;
  });

  return (
    <View style={Styles.container}>
      <StatusBar animated backgroundColor={appTheme.PRIMARY_BACKGROUND_10} barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <ComponentHeader
        goBack={navigateBack}
        headerText={translations.MY_COURSES}
      />
      <View style={Styles.dividerHeader} />
      <View style={Styles.courseListContainer}>
        {!myCourseData?.length ? (
          <Text style={Styles.bottomString}>{translations.NO_ACTIVE_COURSE}</Text>
        ) : (
          <View style={Styles.courseContainer}>
            <View style={Styles.listContainer}>
              {continueWatchData.length ? (
                <Text style={[Styles.textStyle, Styles.continueWatchingAdditionalStyle]}>
                  {translations.CONTINUE_WATCHING}
                </Text>
              ) : null}

              <FlatList
                horizontal
                data={continueWatchData}
                renderItem={({ item }) => (
                  <ComponentListItem
                    onPress={(
                      course_id,
                      module_id,
                      unit_id,
                      batch_id,
                      lastPlayTime,
                    ) => getVideoUrl(
                      course_id,
                      module_id,
                      unit_id,
                      batch_id,
                      lastPlayTime,
                    )}
                    item={item}
                  />
                )}
                showsHorizontalScrollIndicator={false}
              />
              <Text style={[Styles.textStyle, Styles.myCoursesTextStyle]}>
                {translations.MY_COURSES}
              </Text>
            </View>
            <FlatList
              data={myCourseData}
              renderItem={({ item }) => (
                <ComponentCourseListItem
                  getMyCoursesData={() => courseModuleDetail(item)}
                  name={item.course_title}
                  coursePercentage={item.percentage}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </View>

      <Loader show={isLoading} />
    </View>
  );
}

MyCoursesScreen.propTypes = {
  navigation: propTypes.any,
};
