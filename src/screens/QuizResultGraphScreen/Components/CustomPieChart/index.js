/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import PropTypes from 'prop-types';
import { ColorTheme } from '../../../../common/AppStyles';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';

function CustomPieChart({ data, screenType }) {
  const { translations } = useContext(LocalizationContext);
  const GraphData = [
    {
      key: 1,
      value: screenType === 'SCORE' ? data?.correct_mark : data?.correct_time,
      svg: { fill: ColorTheme.BLUE_60 },
      title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_CORRECT,
    },
    {
      key: 2,
      value:
        screenType === 'SCORE' ? data?.incorrect_mark : data?.incorrect_time,
      svg: { fill: ColorTheme.RACE_PINK },
      title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_INCORRECT,
    },
    {
      key: 3,
      value:
        screenType === 'SCORE' ? data?.unattempted_mark : data?.unattemped_time,
      svg: { fill: ColorTheme.ADDITIONAL_DETAILS_COLOR },
      title: translations.QUIZ_RESULT_GRAPH_SCREEN_TITLE_NOT_ATTEMPTED,
    },
  ];

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

  return (
    <View style={styles.mainContainer}>
      <View style={styles.pieChartContainer}>
        <PieChart
          style={styles.pieChartStyle}
          outerRadius="80%"
          innerRadius={1}
          data={GraphData}
          padAngle={6.27}
        />
      </View>
      <View style={styles.subContainer}>
        {GraphData.map((item) => (
          <View style={styles.displayDataContainer}>
            <View
              style={[styles.viewStyle, { backgroundColor: item.svg.fill }]}
            />
            <View
              style={styles.listItemContainer}
            >
              <Text style={styles.labelStyle}>
                {item.title}
                {` (${
                  item.value === undefined
                    ? 0
                    : screenType === 'SCORE'
                      ? item.value
                      : `${convertTime(item.value, 'S')} min`
                })`}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

CustomPieChart.propTypes = {
  data: PropTypes.object,
  screenType: PropTypes.string,
};

export default React.memo(CustomPieChart);
