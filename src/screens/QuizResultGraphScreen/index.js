/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-expressions */
// if avrg data 0 then show avg other
import {
  View,
  useWindowDimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {
  useState, useLayoutEffect, useContext,
} from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useBackHandler } from '@react-native-community/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import Images from '../../common/Images';
import { ColorTheme } from '../../common/AppStyles';
import {
  HeaderRightButton, CustomBarChart, CustomPieChart,
} from './Components';
import { Routes } from '../../routes/Routes';
import Loader from '../../components/Loader';
import { LocalizationContext } from '../../common/LocalizationProvider';
import IntroComponent from '../../components/IntroComponent';
import useThemedStyles from '../../hooks/useThemedStyles';

const zero_avg_data = {
  final_score_per: 0,
  correct_count: 0,
  incorrect_count: 0,
  unattemped_count: 0,
  incorrect_time: 0,
  correct_time: 0,
  unattemped_time: 0,
  max_time: 0,
  accuracy: 0,
  correct_mark: 0,
  incorrect_mark: 0,
  unattempted_mark: 0,
};
function QuizResultGraphScreen({ route }) {
  // const showIntro = StorageUtils.getString(
  //   AsyncKeys.ASYNC_QUIZ_INTRO_MODAL,
  // );
  const Styles = useThemedStyles(styles);
  const navigation = useNavigation();
  const { translations } = useContext(LocalizationContext);
  const reducerResultGraph = useSelector((state) => state.reducerResultGraph);
  const {
    graphResultData, isLoader,
  } = reducerResultGraph;
  const { module_ID } = route.params;
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  // const [indexScore, setIndexScore] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [screenTypes, setScreenType] = useState('SCORE');
  const [showIntroPage, setShowIntroPage] = useState(false);
  const [showTopperBar, setTopperBar] = useState(true);
  const [routes] = useState([
    { key: 'Correct', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_CORRECT },
    { key: 'Incorrect', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_INCORRECT },
    { key: 'Unattempted', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_UNATTEMPTED },
    { key: 'Max_Time', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_MAX_TIME },
  ]);
  const [routesScore] = useState([
    { key: 'Correct', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_CORRECT },
    { key: 'Incorrect', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_INCORRECT },
    { key: 'Unattempted', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_UNATTEMPTED },
    { key: 'Accuracy', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_ACCURACY },
  ]);
  const [time, setTime] = useState({
    correct: [],
    inCorrect: [],
    unAttempted: [],
    accuracy: [],
    maxTime: [],
  });
  const [displayTime, setDisplayTime] = useState({
    correct: [],
    inCorrect: [],
    unAttempted: [],
    accuracy: [],
    maxTime: [],
  });
  const [score, setScore] = useState({
    correct: [],
    inCorrect: [],
    unAttempted: [],
  });
  const [is_topper, setIs_topper] = useState(false);
  const [is_average_bar_hide, setIs_average_bar_hide] = useState(true);
  const [user_result_data, setUser_result_data] = useState({});
  const [average_result_data, setAverage_result_data] = useState({});
  const [topper_result_data, setTopper_result_data] = useState({});
  const [bottomAllRoutes] = useState([
    { key: 'MyScore', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_MY_SCORE },
    { key: 'TopScore', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_TOPPER_SCORE },
    { key: 'AvgScore', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_AVG_SCORE },
  ]);
  const [bottomRoutesTopper] = useState([
    { key: 'MyScore', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_MY_SCORE },
    { key: 'AvgScore', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_AVG_SCORE },
  ]);
  const [bottomRoutesTopperTab] = useState([
    { key: 'MyScore', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_MY_SCORE },
    { key: 'TopScore', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_TOPPER_SCORE },
  ]);
  const [bottomRoutesTopperAvg] = useState([
    { key: 'MyScore', title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_MY_SCORE },
  ]);
  const [userCount, setUserCount] = useState(0);
  useLayoutEffect(() => {
    resultData(graphResultData);
    showIntroCard();
  }, [graphResultData]);

  const backActionHandler = () => {
    navigation.goBack();
    return true;
  };

  const showIntroCard = async () => {
    try {
      const value = await AsyncStorage.getItem('@ShowIntro');
      if (value !== null) {
        setShowIntroPage(false);
      } else {
        setShowIntroPage(true);
      }
    } catch (e) {
      // error reading value
    }
  };

  useBackHandler(backActionHandler);

  const resultData = (data) => {
    // console.log('__++_+_+_+_+_+_+__---->', JSON.stringify(data, undefined, 2));
    const table_object = data;
    Object.keys(table_object)
      .filter((key) => {
        return key !== 'is_topper' && key !== 'is_average_show' && key !== 'topper_count' && key !== 'topper_users' && key !== 'user_count' && key !== 'module_completed';
      })
      .forEach((key) => {
        const timeData = time;
        const dTime = displayTime;
        const scoreData = score;
        timeData.correct.push(
          convertTime(table_object[key]?.correct_time, 'M'),
        );
        timeData.inCorrect.push(
          convertTime(table_object[key]?.incorrect_time, 'M'),
        );
        timeData.unAttempted.push(
          convertTime(table_object[key]?.unattemped_time, 'M'),
        );
        timeData.accuracy.push(table_object[key]?.accuracy);
        timeData.maxTime.push(convertTime(table_object[key]?.max_time, 'M'));

        dTime.correct.push(convertTime(table_object[key]?.correct_time, 'S'));
        dTime.inCorrect.push(
          convertTime(table_object[key]?.incorrect_time, 'S'),
        );
        dTime.unAttempted.push(
          convertTime(table_object[key]?.unattemped_time, 'S'),
        );
        dTime.accuracy.push(table_object[key]?.accuracy);
        dTime.maxTime.push(convertTime(table_object[key]?.max_time, 'S'));
        scoreData.correct.push(table_object[key]?.correct_count);
        scoreData.inCorrect.push(table_object[key]?.incorrect_count);
        scoreData.unAttempted.push(table_object[key]?.unattemped_count);
        // console.log("---------s--s-s-s-s--->", timeData);
        // console.log("---------s--s-s-s-s-sssdfdsfdsfds-->", dTime);
        setTime(timeData);
        setScore(scoreData);
        setDisplayTime(dTime);
      });
    setUser_result_data(table_object.user_data);
    setAverage_result_data(table_object.average_data);
    setTopper_result_data(table_object.topper_data);
    setIs_topper(table_object.is_topper === 1);
    // setIs_average_bar_hide(true);
    setTopperBar(table_object.user_count >= 2);
    setUserCount(table_object.user_count);
    setIs_average_bar_hide(table_object.is_average_show === 0);
  };

  const convertTopperData = (graphData, displayData) => {
    // console.log('ssssd------------>', showTopperBar);
    const dataGraph = graphData;
    const dataDisplay = displayData;
    if (graphData.length !== 0) {
      is_topper && dataGraph.splice(-1, 1, 0);
      is_average_bar_hide && dataGraph.splice(-2, 1, 0);
      !showTopperBar && dataGraph.splice(-1, 1, 0);
    }
    if (displayData.length !== 0) {
      is_topper && dataDisplay.splice(-1, 1, '');
      !showTopperBar && dataDisplay.splice(-1, 1, '');
      is_average_bar_hide && dataDisplay.splice(-2, 1, '');
    }
    return { dataGraph, dataDisplay };
  };

  const renderSceneScore = SceneMap({
    Correct: () => {
      const { dataGraph, dataDisplay } = convertTopperData(
        score.correct,
        score.correct,
      );
      // console.log("8**88*8**888--->>>>", dataGraph);
      return (
        <CustomBarChart
          showTopperBar={showTopperBar}
          hide_avg_bar={is_average_bar_hide}
          isTopper={is_topper}
          screenName={translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_CORRECT}
          GraphData={dataGraph}
          DisplayData={dataDisplay}
        />
      );
    },
    Incorrect: () => {
      const { dataGraph, dataDisplay } = convertTopperData(
        score.inCorrect,
        score.inCorrect,
      );
      return (
        <CustomBarChart
          showTopperBar={showTopperBar}
          hide_avg_bar={is_average_bar_hide}
          isTopper={is_topper}
          screenName={translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_INCORRECT}
          GraphData={dataGraph}
          DisplayData={dataDisplay}
        />
      );
    },
    Unattempted: () => {
      const { dataGraph, dataDisplay } = convertTopperData(
        score.unAttempted,
        score.unAttempted,
      );
      return (
        <CustomBarChart
          showTopperBar={showTopperBar}
          hide_avg_bar={is_average_bar_hide}
          isTopper={is_topper}
          screenName={translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_UNATTEMPTED}
          GraphData={dataGraph}
          DisplayData={dataDisplay}
        />
      );
    },
    Accuracy: () => {
      const { dataGraph, dataDisplay } = convertTopperData(
        time.accuracy,
        displayTime.accuracy,
      );
      return (
        <CustomBarChart
          showTopperBar={showTopperBar}
          hide_avg_bar={is_average_bar_hide}
          isTopper={is_topper}
          screenName={translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_ACCURACY}
          GraphData={dataGraph}
          DisplayData={dataDisplay}
        />
      );
    },
  });

  const renderScene = SceneMap({
    Correct: () => {
      const { dataGraph, dataDisplay } = convertTopperData(
        time.correct,
        displayTime.correct,
      );
      return (
        <CustomBarChart
          showTopperBar={showTopperBar}
          hide_avg_bar={is_average_bar_hide}
          isTopper={is_topper}
          screenName={translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_CORRECT}
          GraphData={dataGraph}
          DisplayData={dataDisplay}
        />
      );
    },
    Incorrect: () => {
      const { dataGraph, dataDisplay } = convertTopperData(
        time.inCorrect,
        displayTime.inCorrect,
      );
      return (
        <CustomBarChart
          showTopperBar={showTopperBar}
          hide_avg_bar={is_average_bar_hide}
          isTopper={is_topper}
          screenName={translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_INCORRECT}
          GraphData={dataGraph}
          DisplayData={dataDisplay}
        />
      );
    },
    Unattempted: () => {
      const { dataGraph, dataDisplay } = convertTopperData(
        time.unAttempted,
        displayTime.unAttempted,
      );
      return (
        <CustomBarChart
          showTopperBar={showTopperBar}
          hide_avg_bar={is_average_bar_hide}
          isTopper={is_topper}
          screenName={translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_UNATTEMPTED}
          GraphData={dataGraph}
          DisplayData={dataDisplay}
        />
      );
    },
    Max_Time: () => {
      const { dataGraph, dataDisplay } = convertTopperData(
        time.maxTime,
        displayTime.maxTime,
      );
      return (
        <CustomBarChart
          showTopperBar={showTopperBar}
          hide_avg_bar={is_average_bar_hide}
          isTopper={is_topper}
          screenName={translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_MAX_TIME}
          GraphData={dataGraph}
          DisplayData={dataDisplay}
        />
      );
    },
  });

  const renderBottomScene = SceneMap({
    MyScore: () => (
      <CustomPieChart screenType={screenTypes} data={user_result_data} />
    ),
    TopScore: () => (
      <CustomPieChart
        screenType={screenTypes}
        data={!showTopperBar ? zero_avg_data : topper_result_data}
      />
    ),
    AvgScore: () => (
      <CustomPieChart
        screenType={screenTypes}
        data={is_average_bar_hide ? zero_avg_data : average_result_data}
      />
    ),
  });
  const convertTime = (value, valueType) => {
    const totalSeconds = value;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const result = valueType === 'S'
      ? `${
        minutes > 0
          ? `${minutes < 10 ? `0${minutes}` : minutes}`
          : `${0}${0}`
      }:${
        seconds > 0
          ? `${seconds < 10 ? `0${seconds}` : seconds}`
          : `${0}${0}`
      }`
      : parseFloat(
        `${minutes < 10 ? `0${minutes}` : minutes}.${
          seconds < 10 ? `0${seconds}` : seconds
        }`,
      );
    return result;
  };

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        tabStyle={Styles.tabStyle}
        bounces
        activeColor={ColorTheme.GREEN_BG}
        inactiveColor={ColorTheme.ADDITIONAL_DETAILS_COLOR}
        indicatorStyle={Styles.indicatorStyle}
        style={Styles.tabBarContainer}
        renderLabel={({ route, color }) => (
          <Text
            style={Styles.tabBarTextStyle(color)}
          >
            {route.title}
          </Text>
        )}
        scrollEnabled
      />
    );
  };
  const hideIntro = async () => {
    // await StorageUtils.setUserPref(AsyncKeys.ASYNC_QUIZ_INTRO_MODAL, 'false');
    // dispatch(hideGraphIntroScreen(false));
    try {
      await AsyncStorage.setItem('@ShowIntro', 'true');
      setShowIntroPage(false);
    } catch (e) {
      // saving error
    }
  };
  if (graphResultData === undefined) return null;
  return (
    <View style={Styles.container}>
      {showIntroPage && <IntroComponent onPressGotIt={hideIntro} />}
      <HeaderRightButton
        onBackPress={() => navigation.goBack()}
        onButtonPress={() => setScreenType(screenTypes === 'SCORE' ? 'TIME' : 'SCORE')}
        headerTitle={translations.QUIZ_RESULT_GRAPH_SCREEN_NAME}
        buttonTitle={screenTypes === 'SCORE' ? translations.QUIZ_RESULT_GRAPH_SCREEN_TYPE2 : translations.QUIZ_RESULT_GRAPH_SCREEN_TYPE1}
        buttonImage={screenTypes === 'SCORE' ? Images.TIME : Images.SCORE}
      />
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={Styles.scrollViewContainer}
      >
        <TabView
          navigationState={
           { index, routes: screenTypes === 'TIME' ? routes : routesScore }
          }
          renderTabBar={renderTabBar}
          renderScene={screenTypes === 'TIME' ? renderScene : renderSceneScore}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
        <TabView
          navigationState={
            {
              index: bottomIndex,
              routes: is_topper === true
                ? userCount < 5 ? bottomRoutesTopperAvg : bottomRoutesTopper
                : is_average_bar_hide === true
                  ? showTopperBar ? bottomRoutesTopperTab : bottomRoutesTopperAvg : bottomAllRoutes,
            }
          }
          renderTabBar={renderTabBar}
          renderScene={
          renderBottomScene
          }
          onIndexChange={
          setBottomIndex
          }
          initialLayout={{ width: layout.width }}
        />
        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Routes.SCREEN_QUIZ_QUESTIONS_SHEET, { module_ID });
            }} // QuizStore.get_DetailsOfQuizAnswers(props.componentId)}
            style={Styles.buttonStyle}
          >
            <Text style={Styles.buttonText}>
              {translations.QUIZ_RESULT_GRAPH_SCREEN__VIEW_DETAIL}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Loader show={isLoader} />
    </View>
  );
}

QuizResultGraphScreen.propTypes = {
  componentId: PropTypes.string,
  // navigation: PropTypes.any,
  route: PropTypes.any,
};

export default React.memo(QuizResultGraphScreen);

// const dummyData = {
//   user_data: {
//     id: 441,
//     user_id: 2086328,
//     correct_count: 0,
//     incorrect_count: 5,
//     unattemped_count: 0,
//     correct_time: 0,
//     incorrect_time: 6,
//     unattemped_time: 0,
//     max_time: 2,
//     final_score_per: -25,
//     accuracy: -100,
//     total_marks_obtain: -1.25,
//     correct_mark: 0,
//     incorrect_mark: 1.25,
//     unattempted_mark: 0,
//   },
//   average_data: {
//     final_score_per: 1.5,
//     correct_count: 0.5,
//     incorrect_count: 1.7,
//     unattemped_count: 0.3,
//     incorrect_time: 177,
//     correct_time: 5,
//     unattemped_time: 0,
//     max_time: 166,
//     accuracy: -24,
//     correct_mark: 0.5,
//     incorrect_mark: 0.43,
//     unattempted_mark: 0,
//   },
//   topper_data: {
//     correct_count: 3,
//     incorrect_count: 2,
//     unattemped_count: 0,
//     correct_time: 14,
//     incorrect_time: 2,
//     unattemped_time: 0,
//     max_time: 9,
//     final_score_per: 50,
//     accuracy: 20,
//     total_marks_obtain: 2.5,
//     correct_mark: 3,
//     incorrect_mark: 0.5,
//     unattempted_mark: 0,
//   },
//   topper_count: 0,
//   topper_users: [
//     // 2086214,
//   ],
//   is_topper: 0,
//   user_count: 5,
//   is_average_show: 1,
// };
