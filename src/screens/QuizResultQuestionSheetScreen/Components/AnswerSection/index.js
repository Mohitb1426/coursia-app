import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { ColorTheme } from '../../../../common/AppStyles';
import AnswerComponentHeader from '../AnswerComponentHeader';
import ChooseAnswerComponent from '../ChooseAnswerComponent';
import { QUIZ_CONSTANTS } from '../../../../utilities/constants/QuizConstants';
import { Routes } from '../../../../routes/Routes';

function AnswerSection(props) {
  const { data, componentId, navigation } = props;
  const [noOfQuestions, setNoOfQuestions] = useState({
    wrong: 0,
    unAttempted: 0,
    right: 0,
  });
  const [attemptedPercentage, setAttemptedPercentage] = useState(0);
  const renderItems = ({ item, index }) => {
    return (
      <ChooseAnswerComponent
        questionNumber={index + 1}
        status={item?.status}
        onPress={() => {
          navigation.navigate(Routes.SCREEN_QUIZ_RESULT_ANSWER, {
            module_ID: componentId,
            section_ID: data?.section_id,
            question_ID: item.id,
            serialNo: index + 1,
          });
        }}
        active={data?.section_status}
        isOverTime={item?.is_overtime}
      />
    );
  };

  const counter = () => {
    let counterOne = 0;
    let counterTwo = 0;
    let counterThree = 0;
    data?.questions.forEach((item) => {
      if (item.status === QUIZ_CONSTANTS.UNATTEMPTED) {
        counterOne += 1;
      } else if (item.status === 1) {
        counterTwo += 1;
      } else if (item.status === QUIZ_CONSTANTS.ATTEMPTED) {
        counterThree += 1;
      }
    });
    setNoOfQuestions({
      wrong: counterTwo,
      unAttempted: counterOne,
      right: counterThree,
    });
    const percentage = (counterThree / Number(data?.questions.length)).toFixed(2);
    setAttemptedPercentage(percentage);
  };

  useEffect(() => {
    if (data) {
      counter();
    }
  }, [data]);

  return (
    <View style={styles.mainContainer}>
      {data.is_no_section !== 0 && (
      <AnswerComponentHeader
        title={data?.title}
        attemptedPercent={attemptedPercentage}
      />
      )}
      <View style={styles.subContainer}>
        <View style={[styles.viewStyle, { backgroundColor: ColorTheme.PINK }]}>
          <Text style={styles.textStyle}>{noOfQuestions.wrong}</Text>
        </View>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{noOfQuestions.right}</Text>
        </View>
        <View
          style={[
            styles.viewStyle, styles.viewStyles]}
        >
          <Text
            style={[
              styles.textStyle,
              {
                color: ColorTheme.ADDITIONAL_DETAILS_COLOR,
              },
            ]}
          >
            {noOfQuestions.unAttempted}
          </Text>
        </View>
      </View>
      <FlatList
        data={data?.questions}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
        numColumns={8}
      />
    </View>
  );
}

AnswerSection.propTypes = {
  data: PropTypes.any,
  componentId: PropTypes.any,
  navigation: PropTypes.any,
};

export default AnswerSection;
