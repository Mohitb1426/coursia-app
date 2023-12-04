import {
  View, FlatList, Text, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import React, { useCallback, useContext } from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import styles from './style';
import { MaterialItem, QuizCourseHeaderList } from '../QuizCourseScreen/components';
import ErrorHandler from '../../common/ErrorHandler';
import { Routes } from '../../routes/Routes';
import { LocalizationContext } from '../../common/LocalizationProvider';
import { ComponentHeader } from '../../components';
import {
  getMaterials,
  getStandardList, getSubjectList,
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
} from './actionMaterialsTab';
import { BottomSheet } from '../QuizCourseScreen/components/BottomSheet';
import NoDataFound from '../../components/NoDataFound';
import SvgIcon from '../../common/SvgIcon';
import useThemedStyles from '../../hooks/useThemedStyles';
import Images from '../../common/Images';

export function MaterialsTabScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const TAG = 'MaterialsTabScreen';
  const dispatch = useDispatch();
  const routeArray = ['Materials', 'ViewPDFScreen'];
  const materialsTabData = useSelector((state) => state.reducerMaterialsTab);
  const {
    materialsData, openBottomSheet, selectedSubject, selectedStandard, loader,
    isGotData, subjectList, standardList,
    updateStandardData, updateSubjectData, screenLoadingState,
  } = materialsTabData;
  const { previousRouteName } = useSelector((state) => state.reducerIntro);
  const { translations } = useContext(LocalizationContext);

  const onPress = ({ pdf_url, module_title }) => {
    navigation.navigate(Routes.SCREEN_VIEW_PDF, { pdf_url, module_title });
  };

  const renderData = ({ item }) => {
    return (
      <ErrorHandler componentName={`${TAG} : MaterialItem`}>
        <MaterialItem
          title={item?.module_title}
          courseTitle={item?.display_title}
          totalItems={item?.totalItems}
          navigateTo={() => onPress(item)}
          image={Images.PDF_COURSE_IMAGE}
        />
      </ErrorHandler>
    );
  };
  useFocusEffect(
    useCallback(() => {
      if (!(routeArray.includes(previousRouteName))) {
        onBackClick();
      }
      dispatch(getMaterials());
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
    dispatch(setUpdateStandardData([]));
    dispatch(setUpdateSubjectData([]));
    dispatch(updateSubject([]));
    dispatch(updateStandard([]));
  };

  const getMaterialData = () => {
    dispatch(setPageNumber());
    dispatch(getMaterials());
  };

  const handleLoadMore = () => {
    if (loader) {
      // eslint-disable-next-line no-unused-expressions
      isGotData ? dispatch(gotData(false)) : getMaterialData();
    }
  };

  const renderFooterItem = () => {
    return !isGotData ? (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };
  const showData = () => {
    const isDataEmpty = Array.isArray(materialsData) && materialsData.length === 0;
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
          data={materialsData}
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
    dispatch(getMaterials());
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
            getQuizCourses={getMaterials}
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
          headerText={translations.MATERIALS}
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
        <View style={Styles.flatListStyle}>
          {showData()}
        </View>
      </View>
    </ErrorHandler>
  );
}

MaterialsTabScreen.propTypes = {
  navigation: propTypes.any,
};
