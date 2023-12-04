import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import Images from '../../../../common/Images';
import styles from './styles';
import CustomButton from '../../../../components/CustomButton';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';
import {
  pauseTimer,
} from '../../actionQuizQuestion';
import convertTime from '../../../../utilities/commonFunction/convertTime';

function HeaderSection({
  sectionStatus, openQuizInstruction, hideMenu, onPress,
  timePause, restartTimer,
}) {
  const { translations } = useContext(LocalizationContext);
  const quizInstructionsState = useSelector((state) => state.reducerQuizInstructions);
  const { activeQuestionsData } = quizInstructionsState;
  const { activeSectionTime, activeQuestionSectionTime } = activeQuestionsData;
  const quizUnitState = useSelector((state) => state.reducerQuizUnit);
  const { isQuizTimerZero } = quizUnitState;
  const quizQuestionState = useSelector((state) => state.reducerQuizQuestion);

  const {
    questionTime,
    sectionTime,
    isTimerPaused,
    isOnMenuScreen,
  } = quizQuestionState;
  const dispatch = useDispatch();

  const showTime = () => {
    if (sectionStatus) {
      const time = sectionTime < 0 ? activeSectionTime : sectionTime;
      const newTime = convertTime(time);
      return newTime;
    }
    // eslint-disable-next-line eqeqeq
    if (activeQuestionSectionTime == 0) {
      const newTime = convertTime(0);
      return newTime;
    }
    const time = questionTime < 0 ? activeQuestionSectionTime
      : questionTime;
    const newTime = convertTime(time);
    return newTime;
  };

  const pauseTime = () => {
    if (isTimerPaused) {
      dispatch(pauseTimer(false));
      restartTimer();
    } else {
      dispatch(pauseTimer(true));
      timePause();
    }
  };

  const mainContainerStyle = !isOnMenuScreen
    ? styles.mainHeader : [styles.mainHeader, { borderBottomWidth: 0 }];

  return (
    <View style={[mainContainerStyle, isQuizTimerZero ? styles.mainViewStyle : null]}>
      {isQuizTimerZero ? null : (
        <View style={styles.timerContainer}>
          <TouchableOpacity
            onPress={pauseTime}
            disabled={isOnMenuScreen}
          >
            <Image
              // eslint-disable-next-line no-nested-ternary
              source={isOnMenuScreen
                ? Images.CLOCK
                : isTimerPaused
                  ? Images.PLAY_BUTTON
                  : Images.PAUSE_BUTTON}
              style={styles.clockImage}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.timerText}>{translations.TIMER}</Text>
            <Text style={styles.timerText}>{showTime()}</Text>
          </View>
        </View>
      )}
      {!hideMenu ? (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={Images.QUIZ_QUESTION_MENUBAR}
            style={styles.hamburgerImage}
          />
        </TouchableOpacity>
      ) : (
        <View pointerEvents={isTimerPaused ? 'none' : 'auto'}>
          <CustomButton
            textStyle={styles.viewInstructionsButtonTextStyle}
            customStyle={styles.buttonStyle}
            onButtonPress={() => openQuizInstruction()}
            buttonText={translations.VIEW_INSTRUCTIONS}
            isDisabled={false}
            textColor={ColorTheme.GREEN_BG}
            buttonColor={ColorTheme.WHITE}
            fontFamily={Fonts.INTER_REGULAR}
          />
        </View>
      )}
    </View>
  );
}

HeaderSection.propTypes = {
  sectionStatus: propTypes.any,
  openQuizInstruction: propTypes.any,
  hideMenu: propTypes.any,
  onPress: propTypes.func,
  timePause: propTypes.func,
  restartTimer: propTypes.func,
};
export default HeaderSection;
