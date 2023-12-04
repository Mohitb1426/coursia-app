import {
  SafeAreaView, FlatList, View, RefreshControl,
} from 'react-native';
import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import styles from './styles';
import { LocalizationContext } from '../../common/LocalizationProvider';
import {
  getCourses,
  setCourseDetails,
  setCourseDetailsById,
  setActiveCourseTab,
  changePageNo,
  changeToggleStatus,
} from './actionChooseCourses';
import { Routes } from '../../routes/Routes';
import { ComponentHeader, EmptyListComponent } from '../../components';
import Loader from '../../components/Loader';
import {
  CourseTab, ListHeader, Card, CustomToggle,
} from './Components';
import useBackButton from '../../hooks/useBackButton';
import useThemedStyles from '../../hooks/useThemedStyles';
import NoCourseDataFound from '../../components/NoCourseDataFound';

export function ChooseCoursesScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const courseState = useSelector((state) => state.reducerChooseCourses);
  const {
    isLoading, activeTabName, isCourseLoading, coursesData, pageNo, recordedClassToggle,
  } = courseState;
  const { translations } = useContext(LocalizationContext);

  const renderItem = ({ item }) => {
    return (
      <Card
        cardKey={item.id.toString()}
        title={item?.display_title}
        image={item?.image_url}
        rating={item?.rating}
        videoCount={item?.video_count}
        moduleCount={item?.module_count}
        courseLanguage={item?.course_language}
        createdAt={item?.created}
        courseStatus={item?.course_type_clp}
        // Button press event
        onCourseModuleDetail={() => dispatch(setCourseDetails({ item, navigation }))}
        // Card Press Event
        courseDetail={() => dispatch(setCourseDetailsById({ item, navigation }))}
      />
    );
  };

  useEffect(() => {
    dispatch(getCourses('data'));
  }, [pageNo]);

  useEffect(() => {
    dispatch(changeToggleStatus(false));
  }, []);

  useEffect(() => {
    dispatch(getCourses('data'));
  }, [recordedClassToggle]);

  const navigateBack = () => {
    navigation.navigate(Routes.SCREEN_HOME);
    dispatch(changePageNo(0));
    return true;
  };

  useBackButton(() => {
    navigateBack();
    dispatch(changePageNo(0));
    return true;
  });

  const onSetFilter = (Name) => {
    dispatch(setActiveCourseTab(Name));
    dispatch(getCourses('data'));
  };

  const onRefresh = React.useCallback(() => {
    dispatch(getCourses('data'));
    dispatch(changePageNo(0));
  }, []);

  const onEndReachedCall = () => {
    if (coursesData.length > 9) dispatch(changePageNo(pageNo));
  };

  return (
    <SafeAreaView style={Styles.mainContainer}>
      <ComponentHeader goBack={navigateBack} headerText={translations.centerTextChooseCourse} />
      <View style={Styles.toggleContainer}>
        <CustomToggle
          isActive={recordedClassToggle}
          onPressToggle={() => { dispatch(changeToggleStatus(!recordedClassToggle)); }}
        />
      </View>
      <View style={Styles.courseTabContainer}>
        <CourseTab activeTabName={activeTabName} onPressTab={onSetFilter} />
      </View>
      <FlatList
        data={coursesData}
        refreshControl={<RefreshControl refreshing={isCourseLoading} onRefresh={onRefresh} />}
        onEndReached={onEndReachedCall}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<EmptyListComponent />}
        renderItem={({ item, index }) => {
          const { id, title, course_list } = item;
          return (
            <View
              key={index}
            >
              <ListHeader
                key={index}
                courseName={title}
                onPressView={() => navigation.navigate(Routes.SCREEN_VIEW_ALL_CHOOSE_COURSE, {
                  screenName: title,
                  courseID: id,
                })}
              />
              {course_list.length > 0 ? (
                <FlatList
                  data={course_list}
                  renderItem={renderItem}
                  keyExtractor={(items) => items.id.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              ) : (
                <View key={id.toString()} style={Styles.noDataContainer}>
                  <NoCourseDataFound />
                </View>
              )}
            </View>
          );
        }}
      />
      <Loader show={isLoading} />
    </SafeAreaView>
  );
}

ChooseCoursesScreen.propTypes = {
  navigation: propTypes.any,
};
