/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-param-reassign */
import {
  View, Text, ScrollView,
} from 'react-native';
import React, { useState, useRef } from 'react';
import PagerView from 'react-native-pager-view';
import Animated from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { StackActions } from '@react-navigation/native';
import { useBackHandler } from '@react-native-community/hooks';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import {
  getQuestionList,
  setQuestionList,
  showConfirmationModal,
  blackBoxQuizSubmit, showSuccessModal, updateQuestionList,
} from './actionBlackBoxQuestion';
import {
  QuizAnswerItem, QuizDetailHeader, HeaderTimer, CustomButton, ConfirmationModal,
} from '../../components';
import styles from './styles';
import SvgIcon from '../../../../common/SvgIcon';
import { Loader } from '../../../../components';
import useCounter from '../../../../hooks/useCounter';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

function BlackBoxQuestionScreen({ navigation }) {
  const pagerRef = useRef(null);
  const popAction = StackActions.pop(3);
  const popAction1 = StackActions.pop(2);
  const dispatch = useDispatch();
  const questionReducerData = useSelector((state) => state.reducerBlackBoxQuestion);
  const {
    quizQuestionList, isLoader, confirmModalShow, examId, successModalShow,
  } = questionReducerData;
  const Styles = useThemedStyles(styles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { countDownTime, startTimer, stopTimer } = useCounter();

  React.useEffect(() => {
    dispatch(getQuestionList());
  }, []);

  React.useEffect(() => {
    if (confirmModalShow) {
      updateTime(countDownTime, currentIndex);
      stopTimer(countDownTime);
    }
    if (!countDownTime) startTimer(countDownTime);
  }, [confirmModalShow]);

  React.useEffect(() => {
    if (quizQuestionList.length > 0) {
      const data = quizQuestionList[currentIndex];
      const leftTime = data?.last_consumeTime === 0 ? data?.remaining_time : data?.last_consumeTime;
      startTimer(leftTime);
    }
  }, [isLoader]);

  const deviceBackHandler = () => {
    return true;
  };

  useBackHandler(deviceBackHandler);

  const onPressSubmit = () => {
    if (currentIndex === quizQuestionList.length - 1) {
      dispatch(showConfirmationModal(!confirmModalShow));
    }
    pagerRef.current.setPage(currentIndex + 1);
    // dispatch(showConfirmationModal(!confirmModalShow));
  };

  const onQuizSubmit = () => {
    dispatch(blackBoxQuizSubmit());
  };

  const onPressAnswer = (mainItem, item) => {
    const data = quizQuestionList;
    data.map((value) => {
      if (value.id === mainItem.id) {
        mainItem.answers.map((i) => {
          if (i.id === item.id) {
            i.is_selected = i.is_selected === 0 ? 1 : 0;
          }
          return i;
        });
      }
      return value;
    });
    dispatch(setQuestionList({ questions: data, exam_id: examId }));
  };

  const renderItems = ({ item, index }) => {
    return (
      <View key={index} style={Styles.itemContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={Styles.quesTextStyle}>{item.title}</Text>
          <View style={Styles.itemAnsContainer}>
            {item.answers.map((i) => {
              return (
                <QuizAnswerItem
                  title={i.title}
                  isSelect={i.is_selected}
                  onPressAnswer={() => { onPressAnswer(item, i); }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  };

  const updateTime = (value, current) => {
    const data = quizQuestionList;
    data.map((item) => {
      if (item.id === quizQuestionList[current].id) {
        item.remaining_time = value;
      }
      return item;
    });
    dispatch(updateQuestionList(data));
  };

  const onPageSelected = async (e) => {
    const currentPoint = e.nativeEvent.position;
    const data = quizQuestionList[currentPoint];
    updateTime(countDownTime, currentIndex);
    await stopTimer(-1);
    await startTimer(data?.remaining_time);
    setCurrentIndex(currentPoint);
  };

  return (
    <View style={Styles.container}>
      <HeaderTimer
        onTimeOut={onPressSubmit}
        currentIndex={currentIndex}
        onPressClose={() => navigation.dispatch(popAction1)}
        questionTime={countDownTime}
      />
      <QuizDetailHeader
        data={quizQuestionList}
        currentIndex={currentIndex}
        totalData={[...quizQuestionList].length}
      />
      <View style={Styles.pagerContainer}>
        <AnimatedPagerView
          ref={pagerRef}
          style={Styles.pagerContainer}
          initialPage={currentIndex}
          onPageSelected={onPageSelected}
        >
          {quizQuestionList.map((item, index) => renderItems({ item, index }))}
        </AnimatedPagerView>
      </View>
      <View style={Styles.buttonContainer}>
        <CustomButton
          title={currentIndex === quizQuestionList.length - 1 ? 'Submit' : 'Save & Next'}
          onPressButton={onPressSubmit}
        />
      </View>
      <ConfirmationModal
        isVisible={confirmModalShow}
        icon={<SvgIcon.WarningIcon />}
        cardMessage="Are you sure you want to submit ?"
        leftButtonTitle="No"
        rightButtonTitle="Yes"
        onPressLeftButton={() => dispatch(showConfirmationModal(!confirmModalShow))}
        onPressRightButton={onQuizSubmit}
        multipleButton
      />
      <ConfirmationModal
        isVisible={successModalShow}
        icon={<SvgIcon.SuccessIcon />}
        cardMessage="You have successfully submitted"
        singleButtonTitle="Continue"
        onPressSingleButton={() => {
          dispatch(showSuccessModal(!successModalShow));
          navigation.dispatch(popAction);
        }}
      />
      <Loader show={isLoader} />
    </View>
  );
}

BlackBoxQuestionScreen.propTypes = {
  navigation: PropTypes.any,
};

export default BlackBoxQuestionScreen;
