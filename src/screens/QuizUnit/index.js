import {
  View, Text, FlatList, ScrollView, Dimensions,
} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { useFocusEffect } from '@react-navigation/native';
import { useAppState, useBackHandler } from '@react-native-community/hooks';
import styles from './style';
import {
  setTableData, setShowIndex, setLastIndex, setShowLock,
  setId,
  setTitle,
  setQuizInfo,
  setActiveModuleQuiz,
  getModuleQuestion,
  setSelectedCoursesData,
  setLoading,
  setUnitName,
  setUnitId,
  setExamId,
  getResumeData,
  setUnitIndex,
  setModuleGroupId,
  setCoursesData,
} from './actionQuizUnit';
import Loader from '../../components/Loader';
import { Card, ContentCard } from './components';
import { Routes } from '../../routes/Routes';
import { getCourses, isQuizBuy } from '../ChooseCoursesScreen/actionChooseCourses';
import { ComponentHeader } from '../../components';
import {
  getGraphResultData,
} from '../QuizResultGraphScreen/actionResultGraph';
import useThemedStyles from '../../hooks/useThemedStyles';

const { width } = Dimensions.get('window');

export function QuizUnit({ navigation }) {
  // eslint-disable-next-line no-unused-vars
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const quizUnitState = useSelector((state) => state.reducerQuizUnit);
  const {
    quizModuleData, isLoading, tableData, showIndex, lastIndex, showLock,
  } = quizUnitState;
  const chooseCoursesState = useSelector((state) => state.reducerChooseCourses);

  const currentAppState = useAppState();
  const { title, isQuizBuyStatus } = chooseCoursesState;
  const renderItem = ({ item }) => {
    return (
      <View style={Styles.cardContainer}>
        <Card title={item?.title || ''} />
      </View>
    );
  };

  // eslint-disable-next-line no-nested-ternary
  const containerStyle = showIndex
    ? Styles.firstStyle
    : lastIndex
      ? Styles.secondStyle
      : Styles.thirdStyle;

  const quizBuy = () => {
    navigation.navigate(Routes.SCREEN_BUY_COURSE);
    return null;
  };

  useEffect(() => {
    if (currentAppState !== 'active') {
      dispatch(setLoading(false));
    }
    if (currentAppState === 'active') {
      dispatch(setLoading(false));
    }
    return () => { dispatch(setLoading(false)); };
  }, [currentAppState]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(setSelectedCoursesData());
    }, []),
  );

  const backActionHandler = () => {
    dispatch(isQuizBuy(false));
    navigation.goBack();
    return true;
  };

  useBackHandler(backActionHandler);
  useEffect(() => {
    return () => {
      dispatch(isQuizBuy(false));
      dispatch(setCoursesData([]));
      dispatch(setTableData([]));
    };
  }, []);

  const filterExamId = (id) => {
    quizModuleData.find((item) => {
      // eslint-disable-next-line eqeqeq
      const check = item.module.some((obj) => obj?.id == id);
      if (check) {
        // eslint-disable-next-line eqeqeq
        const elem = item.module.find((obj) => obj?.id == id);
        dispatch(setExamId(elem?.quiz_details?.exam_id));
        return true;
      }
      return false;
    });
  };

  const renderData = () => {
    const data = tableData.map((item, index) => {
      return (
        <>
          <Text style={Styles.moduleColor}>
            Module
            {item.id}
          </Text>
          <ContentCard
            buyQuiz={quizBuy}
            quizModuleData={quizModuleData}
            index={index}
            startQuiz={() => {
              dispatch(setId(item?.id));
              dispatch(setModuleGroupId(item?.module_group_id));
              dispatch(setTitle(item?.title));
              dispatch(setQuizInfo(item?.quiz_details));
              dispatch(setActiveModuleQuiz(item?.id));
              dispatch(getModuleQuestion(navigation));
            }}
            title={item?.title}
            lock={showLock}
            showResult={() => {
              filterExamId(item?.id);
              dispatch(setId(item?.id));
              dispatch(setModuleGroupId(item?.module_group_id));
              dispatch(setLoading(true));
              dispatch(setTitle(item?.title));
              dispatch(setQuizInfo(item?.quiz_details));
              dispatch(getGraphResultData({ module_ID: item?.module_group_id, navigation }));
            }}
            resumeQuiz={() => {
              filterExamId(item?.id);
              dispatch(setId(item?.id));
              dispatch(setModuleGroupId(item?.module_group_id));
              dispatch(setTitle(item?.title));
              dispatch(setQuizInfo(item?.quiz_details));
              dispatch(setActiveModuleQuiz(item?.id));
              dispatch(getResumeData(navigation));
            }}
          />
        </>
      );
    });
    return data;
  };

  const onViewRef = useCallback(({ viewableItems }) => {
    const activeIndex = viewableItems[0]?.index;
    if (activeIndex === 0) {
      dispatch(setShowIndex(true));
      dispatch(setLastIndex(false));
      if (isQuizBuyStatus) {
        dispatch(setShowLock(false));
      } else {
        dispatch(setShowLock(false));
      }
    } else if (activeIndex === quizModuleData.length - 1) {
      dispatch(setLastIndex(true));
      dispatch(setShowIndex(false));
      if (isQuizBuyStatus) {
        dispatch(setShowLock(false));
      } else {
        dispatch(setShowLock(true));
      }
    } else {
      dispatch(setLastIndex(false));
      dispatch(setShowIndex(false));
      if (isQuizBuyStatus) {
        dispatch(setShowLock(false));
      } else {
        dispatch(setShowLock(true));
      }
    }
    dispatch(setUnitIndex(activeIndex));
    dispatch(setUnitName(viewableItems[0]?.item?.title));
    dispatch(setUnitId({
      unitId: viewableItems[0]?.item?.unit_id,
      unitGroupId: viewableItems[0]?.item?.unit_group_id,
    }));
    dispatch(setTableData(viewableItems[0]?.item?.module));
  }, []);

  const viewConfigRef = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const navigateBack = () => {
    dispatch(isQuizBuy(false));
    dispatch(getCourses('data'));
    navigation.goBack();
  };

  return (
    <View style={Styles.container}>
      <ComponentHeader goBack={navigateBack} headerText={title} />
      <View style={Styles.flatListContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={quizModuleData}
          renderItem={renderItem}
          onViewableItemsChanged={onViewRef}
          viewabilityConfig={viewConfigRef}
          keyExtractor={(item, index) => index.toString()}
          initialNumToRender={150}
          snapToAlignment="center"
          snapToInterval={width * 0.90}
          contentContainerStyle={containerStyle}
        />
      </View>

      <View style={Styles.scrollViewContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {tableData.length !== 0 && renderData()}
        </ScrollView>
      </View>
      <Loader show={isLoading} />
    </View>
  );
}

QuizUnit.propTypes = {
  navigation: propTypes.any,
};
