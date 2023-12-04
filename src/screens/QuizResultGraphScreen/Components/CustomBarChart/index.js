/* eslint-disable no-const-assign */
import {
  View, Text, Dimensions, ScrollView,
} from 'react-native';
import React, { useContext } from 'react';
import { BarChart } from 'react-native-chart-kit';
import propTypes from 'prop-types';
import styles from './styles';
import TopperCard from '../TopperCard';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh } from '../../../../common/Dimensions';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { ThemeContext } from '../../../../common/ThemeProvider';

const barChartHeight = vh(250);
const barChartWidth = Dimensions.get('window').width - 20;

function CustomBarChart({
  GraphData, screenName, isTopper, DisplayData, hide_avg_bar, showTopperBar,
}) {
  const { darkMode } = useContext(ThemeContext);
  const Styles = useThemedStyles(styles);

  const chartConfig = {
    backgroundGradientFrom: darkMode ? ColorTheme.STATUS_BAR_BLACK_BACKGROUND : ColorTheme.light01,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: darkMode ? ColorTheme.STATUS_BAR_BLACK_BACKGROUND : ColorTheme.light01,
    backgroundGradientToOpacity: 1,
    color: () => ColorTheme.black,
    strokeWidth: 3, // optional, default 3
    barPercentage: 1.8,
    labelColor: () => ColorTheme.NOTE_TEXT_COLOR,
    useShadowColorFromDataset: false, // optional
  };
  // console.log('showTopperBar', showTopperBar);
  // console.log('hide_avg_bar', hide_avg_bar);
  // console.log('isTopper', isTopper);
  const { translations } = useContext(LocalizationContext);
  // const labelList = [
  //   translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_USER,
  //   translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_AVERAGE,
  //   translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_TOPPER,
  // ];
  let labelList = [];
  if (!isTopper && hide_avg_bar && !showTopperBar) {
    labelList = [
      translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_USER,
      '',
      '',
    ];
  } else if (isTopper && hide_avg_bar && showTopperBar) {
    labelList = [
      translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_USER,
      '',
      '',
    ];
  } else if (isTopper && !hide_avg_bar) {
    labelList = [
      translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_USER,
      translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_AVERAGE,
      '',
    ];
  } else if (!isTopper && hide_avg_bar) {
    labelList = [
      translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_USER,
      '',
      translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_TOPPER,
    ];
  } else {
    labelList = [
      translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_USER,
      translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_AVERAGE,
      translations.QUIZ_RESULT_GRAPH_SCREEN_BAR_TOPPER,
    ];
  }
  let strokeColors;
  if (screenName === 'Correct') {
    strokeColors = [
      () => ColorTheme.BLUE_60,
      () => ColorTheme.P_R_Egg_Blue,
      () => ColorTheme.KEPPEL,
    ];
  } else if (screenName === 'Incorrect') {
    strokeColors = [
      () => ColorTheme.RACE_PINK,
      () => ColorTheme.XOXO,
      () => ColorTheme.BAR_RED,
    ];
  } else if (screenName === 'Unattempted') {
    strokeColors = [
      () => ColorTheme.ADDITIONAL_DETAILS_COLOR,
      () => ColorTheme.SILVER_CHALICE,
      () => ColorTheme.SONIC_SILVER,
    ];
  } else if (screenName === 'Accuracy') {
    strokeColors = [
      () => ColorTheme.BLUE_60,
      () => ColorTheme.HOOKER_GREEN,
      () => ColorTheme.CRAYOLA,
    ];
  } else {
    strokeColors = [
      () => ColorTheme.BLUE_60,
      () => ColorTheme.RACE_PINK,
      () => ColorTheme.BLUE_58,
    ];
  }
  const minValue = Math.min(...GraphData);
  const maxValue = Math.max(...GraphData);
  const data = {
    labels: labelList,
    datasets: [
      {
        data: GraphData,
        colors: strokeColors,
        strokeWidth: 3,
      },
      {
        data: [minValue],
      },
      {
        data: [maxValue],
      },
    ],
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {isTopper && (
        <View style={Styles.topperCardContainer}>
          <TopperCard />
        </View>
      )}
      <View style={Styles.topValueContainer}>
        {DisplayData
          && DisplayData.map((i) => {
            return (
              <View style={Styles.topperValueInnerContainer}>
                <Text style={Styles.upperLabel}>{i}</Text>
              </View>
            );
          })}
      </View>
      <View style={Styles.mainContainer}>
        <BarChart
          data={data}
          width={barChartWidth}
          height={barChartHeight}
          chartConfig={chartConfig}
          fromZero
          showValuesOnTopOfBars={false}
          withCustomBarColorFromData
          flatColor
          withInnerLines={false}
          showBarTops={false}
        />
      </View>
    </ScrollView>
  );
}

CustomBarChart.propTypes = {
  GraphData: propTypes.any,
  screenName: propTypes.string,
  isTopper: propTypes.bool,
  DisplayData: propTypes.any,
  hide_avg_bar: propTypes.bool,
  showTopperBar: propTypes.bool,
};

export default React.memo(CustomBarChart);
