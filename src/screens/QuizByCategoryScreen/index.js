// TODO : NEED to remove This Screen.
import {
  View, FlatList, TouchableOpacity, Image,
} from 'react-native';
import React, { useCallback, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { LocalizationContext } from '../../common/LocalizationProvider';
import styles from './styles';
import ErrorHandler from '../../common/ErrorHandler';
import MenuHeader from '../../components/MenuHeader';
import {
  getQuizCourses,
  getStandardList,
  getSubjectList,
  isPopUpBoxOpen,
  updateStandard,
  updateSubject,
} from './actionQuizByCategory';
import { addArray, removeArray, checkArray } from '../../utilities/commonFunction/checkArrayElement';
import Images from '../../common/Images';
import { PleaseWaitModal, TestBox, TitleSubtitle } from './components';

function QuizByCategoryScreen({ navigation }) {
  const TAG = 'QuizByCategoryScreen';
  const dispatch = useDispatch();
  const { translations } = useContext(LocalizationContext);
  const quizByCategoryState = useSelector((state) => state.reducerQuizByCategory);
  const {
    subjectList, standardList, selectedSubject, selectedStandard, isLoading,
    openPopUpBox,
  } = quizByCategoryState;

  useFocusEffect(
    useCallback(() => {
      dispatch(getSubjectList());
      dispatch(getStandardList());
      return () => {
        dispatch(updateSubject([]));
        dispatch(updateStandard([]));
      };
    }, []),
  );

  const getSelectedQuiz = () => {
    dispatch(getQuizCourses());
  };

  const selectSubject = (value) => {
    const isSubjectPresent = checkArray(selectedSubject, value);
    if (isSubjectPresent) {
      const updatedArray = removeArray(selectedSubject, value);
      dispatch(updateSubject(updatedArray));
    } else {
      const updatedArray = addArray(selectedSubject, value);
      dispatch(updateSubject(updatedArray));
    }
  };
  const selectStandard = (value) => {
    const isStandardPresent = checkArray(selectedStandard, value);
    if (isStandardPresent) {
      const updatedArray = removeArray(selectedStandard, value);
      dispatch(updateStandard(updatedArray));
    } else {
      const updatedArray = addArray(selectedStandard, value);
      dispatch(updateStandard(updatedArray));
    }
  };

  const renderSubjectData = ({ item }) => {
    return (
      <ErrorHandler componentName={`${TAG} : TestBox`}>
        <View
          style={
            checkArray(selectedSubject, item?.id)
              ? styles.unSelectedContainerStyle
              : styles.unSelectedContainerStyle
          }
        >
          <TestBox
            isSelected={checkArray(selectedSubject, item?.id)}
            onSelect={() => selectSubject(item?.id)}
            title={item.title}
            subjectWise={false}
            showIcon
          />
        </View>
      </ErrorHandler>
    );
  };

  const renderStandardData = ({ item }) => {
    return (
      <ErrorHandler componentName={`${TAG} : TestBox`}>
        <View
          style={
            checkArray(selectedStandard, item?.id)
              ? styles.unSelectedContainerStyle
              : styles.unSelectedContainerStyle
          }
        >
          <TestBox
            isSelected={checkArray(selectedStandard, item?.id)}
            onSelect={() => selectStandard(item?.id)}
            title={item.title}
            subjectWise={false}
            showIcon={false}
          />
        </View>
      </ErrorHandler>
    );
  };

  const navigateTo = () => {
    const checkLength = selectedStandard.length === 0 && selectedSubject.length === 0;
    if (!checkLength) {
      dispatch(getQuizCourses({ navigation }));
    } else {
      dispatch(isPopUpBoxOpen(true));
    }
  };

  return (
    <ErrorHandler componentName={TAG}>
      <View style={styles.mainContainer}>
        <MenuHeader />
        <TouchableOpacity style={styles.greenArrowImageContainer} onPress={navigateTo}>
          <Image source={Images.GREEN_ARROW} style={styles.greenArrowStyle} />
        </TouchableOpacity>
        <View style={styles.sectionContainer}>
          <ErrorHandler componentName={`${TAG} : TitleSubtitle`}>
            <TitleSubtitle title={translations.STANDARD_WISE_TESTS} />
          </ErrorHandler>
          <FlatList
            data={standardList}
            numColumns={2}
            style={styles.flatList}
            contentContainerStyle={styles.listContainerStyle}
            keyExtractor={(item) => item.id}
            renderItem={renderStandardData}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity onPress={getSelectedQuiz} />
        <View style={styles.sectionContainer}>
          <ErrorHandler componentName={`${TAG} : TitleSubtitle`}>
            <TitleSubtitle title={translations.SUBJECT_WISE_TESTS} />
          </ErrorHandler>
          <FlatList
            data={subjectList}
            style={styles.flatList}
            contentContainerStyle={styles.listContainerStyle}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderSubjectData}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <ErrorHandler componentName={`${TAG} : Please Wait Modal`}>
          <PleaseWaitModal visible={isLoading} />
          <PleaseWaitModal visible={openPopUpBox} showText />
        </ErrorHandler>
      </View>
    </ErrorHandler>
  );
}

QuizByCategoryScreen.propTypes = {
  navigation: propTypes.any,
};

export default QuizByCategoryScreen;
