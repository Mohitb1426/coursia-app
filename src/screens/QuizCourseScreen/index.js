import {
  View, FlatList, Text, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import React, { useCallback, useContext } from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import styles from './style';
import { MaterialItem, QuizCourseHeaderList } from './components';
import ErrorHandler from '../../common/ErrorHandler';
import { setTitle, setData } from '../ChooseCoursesScreen/actionChooseCourses';
import { Routes } from '../../routes/Routes';
import { LocalizationContext } from '../../common/LocalizationProvider';
import { ComponentHeader } from '../../components';
import {
  getQuizCourses, getStandardList, getSubjectList,
  gotData,
  isFooterLoading,
  openQuizCourseBottomSheet,
  resetPageNumber,
  resetQuizData,
  setPageNumber,
  setUpdateStandardData,
  setUpdateSubjectData,
  updateStandard,
  updateSubject,
  closeQuizCourseBottomSheet,
} from '../QuizByCategoryScreen/actionQuizByCategory';
import { BottomSheet } from './components/BottomSheet';
import NoDataFound from '../../components/NoDataFound';
import SvgIcon from '../../common/SvgIcon';
import useThemedStyles from '../../hooks/useThemedStyles';
import Images from '../../common/Images';

export function QuizCourseScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const TAG = 'QuizCourseScreen';
  const routeArray = ['Quizzes', 'QuizUnit'];
  const dispatch = useDispatch();
  const { previousRouteName } = useSelector((state) => state.reducerIntro);
  const quizByCategoryState = useSelector((state) => state.reducerQuizByCategory);
  const {
    quizCourseData, openBottomSheet, selectedSubject, selectedStandard, loader,
    subjectList, standardList,
    updateStandardData, updateSubjectData,
    isGotData, screenLoadingState,
  } = quizByCategoryState;
  const { translations } = useContext(LocalizationContext);
  const onPress = (item) => {
    dispatch(setData({ item }));
    dispatch(setTitle(item?.display_title));
    navigation.navigate(Routes.SCREEN_QUIZ_UNIT);
  };

  const renderData = ({ item }) => {
    return (
      <ErrorHandler componentName={`${TAG} : MaterialItem`}>
        <MaterialItem
          title={item?.quiz_title}
          courseTitle={item?.display_title}
          totalItems={item?.totalItems}
          navigateTo={() => onPress(item)}
          image={Images.QUIZ_COURSE_IMAGE}
        />
      </ErrorHandler>
    );
  };

  useFocusEffect(
    useCallback(() => {
      if (!(routeArray.includes(previousRouteName))) {
        onBackClick();
      }
      dispatch(getQuizCourses());
      dispatch(getSubjectList());
      dispatch(getStandardList());
      return () => {
        dispatch(resetPageNumber());
        dispatch(resetQuizData());
        dispatch(isFooterLoading(true));
      };
    }, [previousRouteName]),
  );

  const onBackClick = () => {
    dispatch(updateSubject([]));
    dispatch(updateStandard([]));
    dispatch(setUpdateStandardData([]));
    dispatch(setUpdateSubjectData([]));
  };

  const getQuizData = () => {
    dispatch(setPageNumber());
    dispatch(getQuizCourses());
  };

  const handleLoadMore = () => {
    if (loader) {
      // eslint-disable-next-line no-unused-expressions
      isGotData ? dispatch(gotData(false)) : getQuizData();
    }
  };

  const renderFooterItem = () => {
    return !isGotData ? (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={Styles.activityContainer}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  const showData = () => {
    const isDataEmpty = Array.isArray(quizCourseData) && quizCourseData.length === 0;
    if (screenLoadingState) {
      return (
        <View style={Styles.activityContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    if (isDataEmpty) {
      return <NoDataFound />;
    }
    if (!isDataEmpty) {
      return (
        <FlatList
          data={quizCourseData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderData}
          showsVerticalScrollIndicator={false}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooterItem}
        />
      );
    }
    return null;
  };
  const getListData = () => {
    dispatch(resetPageNumber());
    dispatch(resetQuizData());
    dispatch(isFooterLoading(true));
    dispatch(getQuizCourses());
  };
  return (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.mainContainer}>
        <ErrorHandler componentName={`${TAG} : BottomSheet`}>
          <BottomSheet
            isActive={openBottomSheet}
            updateStandardData={updateStandardData}
            updateSubjectData={updateSubjectData}
            setUpdateStandardData={setUpdateStandardData}
            setUpdateSubjectData={setUpdateSubjectData}
            updateStandard={updateStandard}
            updateSubject={updateSubject}
            resetPageNumber={resetPageNumber}
            resetQuizData={resetQuizData}
            isFooterLoading={isFooterLoading}
            getQuizCourses={getQuizCourses}
            closeQuizCourseBottomSheet={closeQuizCourseBottomSheet}
            standardList={standardList}
            subjectList={subjectList}
            selectedStandard={selectedStandard}
            selectedSubject={selectedSubject}
          />
        </ErrorHandler>
        <ComponentHeader
          goBack={() => {
            navigation.goBack();
          }}
          headerText={translations.QUIZZES}
        />
        <View style={Styles.dividerStyle} />
        <View style={Styles.subContainer}>
          <Text style={Styles.subHeadingText}>
            {translations.ACTIVE_FILTER}
          </Text>
          <TouchableOpacity
            style={Styles.filterIcon}
            onPress={() => dispatch(openQuizCourseBottomSheet())}
          >
            <SvgIcon.FilterIcon />
            <Text style={Styles.filterText}>{translations.FILTER}</Text>
          </TouchableOpacity>
        </View>
        <ErrorHandler>
          <View style={Styles.courseHeader}>
            <QuizCourseHeaderList
              selectedSubjectData={selectedSubject}
              selectedStandardData={selectedStandard}
              setUpdateSubjectData={setUpdateSubjectData}
              updateSubject={updateSubject}
              setUpdateStandardData={setUpdateStandardData}
              updateStandard={updateStandard}
              getListData={getListData}
              subjectList={subjectList}
              standardList={standardList}
            />
          </View>
        </ErrorHandler>
        <View style={styles.flatListStyle}>
          {showData()}
        </View>
      </View>
    </ErrorHandler>
  );
}

QuizCourseScreen.propTypes = {
  navigation: propTypes.any,
};
