/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import React, { useEffect, useContext, useState } from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity, useWindowDimensions,
} from 'react-native';
import GestureRecognizer, {
  swipeDirections,
} from 'react-native-swipe-gestures';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import CustomButton from '../../components/CustomButton';
import HeaderSection from './components/HeaderSection';
import { CustomQuizMenuModal } from './components/CustomQuizMenuModal';
import {
  closeMenu,
  setQuizInstructionModalOpen,
  setOpenSuccessModal,
  setSaveNextAndReview,
  submitTheSection,
  setOpenConfirmModal,
  submitTheQuiz,
  setIsSwipeTrue,
  cleanModel,
  setScreen,
  getDetailsOfQuizQuestion,
  setSaveNextAndReviewPauseQuiz,
  restartTimer,
  autoSaveSection,
  setIsSectionSubmitStatus,
  setPrevUserScreenTime,
  setUserScreenTime,
  isTimerStopped,
  isLastQuestion,
  setQuestionTimeLeft,
} from './actionQuizQuestion';
import styles from './style';
import Images from '../../common/Images';
import { LocalizationContext } from '../../common/LocalizationProvider';
import { ColorTheme } from '../../common/AppStyles';
import Fonts from '../../common/Fonts';
import { QuestionRender } from '../../components/QuestionRender';
import { AUTO_SUBMIT_API_CONSTANTS, QUIZ_CONSTANTS, STOP_TIMER_CONSTANTS } from './constantsScreenQuizQuestion';
import { CustomModal } from '../../components/CustomModal';
import QuizInstructions from './components/QuizInstructions';
import CustomSubmitConfirmModal from '../../components/CustomSubmitConfirmModal';
import CustomSubmitSuccessModal from '../../components/CustomSubmitSuccessModal';
import { get_section_data } from '../../database/migrations';
import { indexToAlpha } from '../../common/indexToAlpha';
import Loader from '../../components/Loader';
import { useBackHandler } from '@react-native-community/hooks';
import { setShowOptionsResume } from '../QuizInstructionsScreen/actionQuizInstructions';
import { getScreenTime } from '../../utilities/commonFunction/getScreenTime';
import useThemedStyles from '../../hooks/useThemedStyles';
import { useQuestionTimeHook, useQuizTimeHook, useScreenTime, useSectionTimeHook } from '../../hooks';
import { TIMER_CONSTANTS } from '../../hooks/constantsTimer';

export function QuizQuestionScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const { height, width } = useWindowDimensions();
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const quizQuestionState = useSelector((state) => state.reducerQuizQuestion);
  const quizUnitState = useSelector((state) => state.reducerQuizUnit);
  const quizInstructionsState = useSelector((state) => state.reducerQuizInstructions);
  const {
    isOnMenuScreen, reviewQuizData, isQuizInstructionModalOpen,
    openConfirmModal, showContent, openSuccessModal, isQuizActive, isSelectOption, isLoading, isSwipeTrue, isTimerPaused, isSectionSubmitted,
    quizTime, sectionTime, questionTime, stopTimer,
  } = quizQuestionState;
  const {
    isSectionTimerEnable, quizInfo, isQuizTimerZero,
    title,
  } = quizUnitState;
  const { activeQuestionsData, showOptionsResume } = quizInstructionsState;
  const {
    activeQuestionTitle,
    activeQuestionOrder,
    activeQuestionOptions,
    activeQuestionId,
    lastSectionQuestion,
    activeSectionId,
    activeQuestionMarks,
    activeQuestionNegativeMarks,
    activeQuestionUnattemptedMarks,
    activeQuestionSectionTime,
  } = activeQuestionsData;

  const saveAndReviewStatus = options.length
    ? QUIZ_CONSTANTS.ATTEMPTED
    : QUIZ_CONSTANTS.UNATTEMPTED;
  const reviewStatus = options.length
    ? QUIZ_CONSTANTS.ATTEMPTED_REVIEW
    : QUIZ_CONSTANTS.UNATTEMPTED_REVIEW;
  const { translations } = useContext(LocalizationContext);
  const { setQuestionTimerState } = useQuestionTimeHook();
  const { setSectionTimerState } = useSectionTimeHook();
  const { setQuizTimerState } = useQuizTimeHook();
  const { screenTime, startScreenTime, pauseScreenTime, restartScreenTime  } = useScreenTime();

  const enableSectionTime = () => {
    setSectionTimerState(TIMER_CONSTANTS.START);
    setQuizTimerState(TIMER_CONSTANTS.START);
    startScreenTime();
  };

  const enableQuestionTime = () => {
    setQuestionTimerState(TIMER_CONSTANTS.START);
    setSectionTimerState(TIMER_CONSTANTS.START);
    setQuizTimerState(TIMER_CONSTANTS.START);
    startScreenTime();
  };

  const enableQuizTime = () => {
    // setQuizTimerState(TIMER_CONSTANTS.START);
    startScreenTime();
  };

  useEffect(() => {
    if (isQuizActive) {
      if (!isQuizTimerZero) {
        if (isSectionTimerEnable) {
          enableSectionTime();
        } else {
          enableQuestionTime();
        }
      } else {
        enableQuizTime();
      }
    }
  }, []);

  const checkSectionTime = () => {
    if (sectionTime === 0 || quizTime === 0) {
      dispatch(autoSaveSection({
        finalOptions: options,
        screenTime: screenTime,
        status: saveAndReviewStatus,
        navigation,
      }))
    }
  };

  const checkQuestionTime = () => {
    if (quizTime === 0) {
      dispatch(setSaveNextAndReview({
        order: activeQuestionOrder,
        finalOptions: options,
        screenTime: screenTime,
        status: saveAndReviewStatus,
      }));
      return onViewResult();
    }
    if (sectionTime === 0) {
      return dispatch(autoSaveSection({
        finalOptions: options,
        screenTime: screenTime,
        status: saveAndReviewStatus,
        navigation,
      }))
    }

    if ((questionTime == 0 || activeQuestionSectionTime == 0) && !isSectionTimerEnable) {
      if (quizTime > 0) {
        return submitQuizAndQuestion();
      }
    }
  };

  useEffect(() => {
    if (isQuizActive) {
      if (!isQuizTimerZero) {
        if (isSectionTimerEnable) {
          checkSectionTime();
        } else {
          checkQuestionTime();
        }
      }
    }
  }, [quizTime]);


  const checkOption = (itemToAdd) => {
    setOptions((id) => (id.includes(itemToAdd)
      ? id.filter((n) => n !== itemToAdd)
      : [itemToAdd, ...id]));
  };

  function onSwipe(gestureName) {
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    switch (gestureName) {
      case SWIPE_LEFT:
        if (lastSectionQuestion?.questionOrder == activeQuestionOrder) break;
        get_section_data(activeSectionId).then((data) => {
          const arrayData = data;
          for (let index = 0; index < arrayData.length; index++) {
            const element = arrayData[index];
            const isOrderFind = Number(element.questionOrder) > Number(activeQuestionOrder);
            const isTimeLeft = Number(element.questionTime) !== 0;
            const checkOrderStatement = isOrderFind && isTimeLeft;
            if (isSectionTimerEnable && isOrderFind) {
              dispatch(setSaveNextAndReview({
                order: element.questionOrder,
                finalOptions: options,
                screenTime: screenTime,
                status: saveAndReviewStatus,
                isLastQuestion: false,
              }));
              break;
            }

            if (checkOrderStatement) {
              dispatch(setSaveNextAndReview({
                order: element.questionOrder,
                finalOptions: options,
                screenTime: screenTime,
                status: saveAndReviewStatus,
                isLastQuestion: false,
              }));
              break;
            }
          
            if (isQuizTimerZero) {
              dispatch(setSaveNextAndReview({
                order: Number(activeQuestionOrder) + 1,
                finalOptions: options,
                screenTime: screenTime,
                status: saveAndReviewStatus,
                isLastQuestion: false,
              }));
              break;
            }
          }
        });
        break;
      case SWIPE_RIGHT:
        if (activeQuestionOrder == 1) break;
        get_section_data(activeSectionId).then((data) => {
          const arrayData = data;
          for (let index = 0; index < arrayData.length; index++) {
            const element = arrayData[index];
            const isOrderFind = Number(element.questionOrder) == Number(activeQuestionOrder);
            const isTimeLeft = Number(element.questionTime) != 0;
            const checkOrderStatement = isOrderFind && isTimeLeft;
            if (isSectionTimerEnable && isOrderFind) {
              dispatch(setSaveNextAndReview({
                order: Number(element.questionOrder) - 1,
                finalOptions: options,
                screenTime: screenTime,
                status: saveAndReviewStatus,
                isLastQuestion: false,
              }));
              break;
            }
            if (checkOrderStatement) {
              dispatch(setSaveNextAndReview({
                order: Number(element.questionOrder) - 1,
                finalOptions: options,
                screenTime: screenTime,
                status: saveAndReviewStatus,
                isLastQuestion: false,
              }));
              break;
            }

            if (isQuizTimerZero) {
              dispatch(setSaveNextAndReview({
                order: Number(activeQuestionOrder) - 1,
                finalOptions: options,
                screenTime: screenTime,
                status: saveAndReviewStatus,
                isLastQuestion: false,
              }));
              break;
            }
          }
        });
        break;
      default: return null;
    }
  }

  const submitQuizAndQuestion = (
    isSavedOrReview,
    isSaveOrReviewStatus,
  ) => {
    // If Question Time is enabled and remains zero, This method will also run
    const isLast = lastSectionQuestion?.questionOrder == activeQuestionOrder;
    dispatch(isLastQuestion(isLast));
    get_section_data(activeSectionId).then((data) => {
      const arrayData = data;
      // if you are on last question and need to open menu
      if (isLast) {
        const matchElement = arrayData.some((element) => {
          if (Number(element.questionTime) !== 0 && Number(element.questionOrder) !== Number(activeQuestionOrder)) {
            if (isSavedOrReview) {
              return dispatch(setSaveNextAndReview({
                order: Number(element.questionOrder),
                finalOptions: options,
                screenTime: screenTime,
                status: isSaveOrReviewStatus,
              }));
            }
            return dispatch(setSaveNextAndReview({
              order: Number(element.questionOrder),
              finalOptions: options,
              screenTime: screenTime,
              status: saveAndReviewStatus,
            }));
          }
        });
        if (!matchElement) {
          if (isSavedOrReview) {
            return dispatch(setSaveNextAndReview({
              order: Number(activeQuestionOrder),
              finalOptions: options,
              screenTime: screenTime,
              status: isSaveOrReviewStatus,
              isLastQuestion: isLast,
            }));
          }
          return dispatch(setSaveNextAndReview({
            order: Number(activeQuestionOrder),
            finalOptions: options,
            screenTime: screenTime,
            status: saveAndReviewStatus,
            isLastQuestion: isLast,
          }));
        }
      }
      for (let index = 0; index < arrayData.length; index++) {
        const element = arrayData[index];
        const checkOrderStatement = (Number(element.questionOrder) > Number(activeQuestionOrder))
          && Number(element.questionTime) !== 0;
        if (checkOrderStatement) {
          // check that if it comes from save and review
          if (isSavedOrReview) {
            dispatch(setSaveNextAndReview({
              order: Number(element.questionOrder),
              finalOptions: options,
              screenTime: screenTime,
              status: isSaveOrReviewStatus,
              isLastQuestion: isLast,
            }));
            break;
          } else {
            // if you are on last question and need to open menu
            dispatch(setSaveNextAndReview({
              order: Number(element.questionOrder),
              finalOptions: options,
              screenTime: screenTime,
              status: saveAndReviewStatus,
              isLastQuestion: isLast,
            }));
            break;
          }
        }

        if(isQuizTimerZero){
          if (isSavedOrReview) {
            dispatch(setSaveNextAndReview({
              order: Number(activeQuestionOrder) + 1,
              finalOptions: options,
              screenTime: screenTime,
              status: isSaveOrReviewStatus,
              isLastQuestion: isLast,
            }));
            break;
          } else {
            // if you are on last question and need to open menu
            dispatch(setSaveNextAndReview({
              order: Number(activeQuestionOrder) + 1,
              finalOptions: options,
              screenTime: screenTime,
              status: saveAndReviewStatus,
              isLastQuestion: isLast,
            }));
            break;
          }
        }
      }
    });
  };

  const mcqText = (text, id, index) => {
    const data = text.split('{{}}');
    return (
      <View style={Styles.mcqTextMainContainer}>
        <Text
          style={[
            Styles.serialNoText,
            options.includes(id) ? Styles.selectedOptionStyle : null,
          ]}
        >
          {` ${indexToAlpha(index)}) `}

        </Text>
        <View style={Styles.mcqTextContainerStyle}>
          {data.map((item, index) => {
            if (item.includes('https')) {
              const imgwidth = item.substring(
                item.indexOf('?w=') === -1 ? 0 : item.indexOf('?w=') + 3,
                item.indexOf('&h=') === -1 ? 0 : item.indexOf('&h='),
              );
              const imgheight = item.substring(
                item.indexOf('&h=') === -1 ? 0 : item.indexOf('&h=') + 3,
                item.indexOf('&h=') === -1 ? 0 : item.length,
              );
              return (
                <View style={Styles.mcqTextImageContainerStyle}>
                  <Image
                    key={index}
                    style={{
                      height:
                        Number(imgheight) > height
                          ? '100%'
                          : Number(imgheight === '' ? '50' : imgheight),
                      width:
                        Number(imgwidth) > width
                          ? '100%'
                          : Number(imgwidth === '' ? '50' : imgwidth),
                      resizeMode: 'contain',
                    }}
                    source={{
                      uri: item.replace(/}|{/g, ''),
                    }}
                  />
                </View>
              );
            }
            return (
              <Text
                style={[
                  Styles.mcqOptionsText,
                  options.includes(id) ? Styles.selectedOptionStyle : {},
                ]}
                key={index}
              >
                {item}
                {' '}
              </Text>
            );
          })}
        </View>
      </View>
    );
  };

  const onViewResult = () => {
    dispatch(cleanModel());
    dispatch(submitTheQuiz({ navigation }));
  };

  const onConfirming = () => {
    dispatch(setOpenConfirmModal(false));
    dispatch(setOpenSuccessModal(true));
  };

  useEffect(() => {
    if (isSectionSubmitted) {
      setOptions([]);
      dispatch(setIsSectionSubmitStatus(false));
    }
  }, [isSectionSubmitted]);

  useEffect(() => {
    if (showOptionsResume) {
      dispatch(setIsSwipeTrue(true));
      dispatch(setShowOptionsResume(false));
    }
  }, [showOptionsResume])

  useEffect(() => {
    if (isSwipeTrue) {
      setOptions([]);
      const item = isSelectOption.filter((x) => {
        return (
          x.activeQuestionOrder == activeQuestionOrder
        );
      });
      setOptions(item[0]?.options || []);
      dispatch(setIsSwipeTrue(false));
    }
  }, [isSwipeTrue]);

  const deviceBackHandler = () => {
    return true;
  }

  const checkApiHits = () => {
    let timeType;
    if(stopTimer === STOP_TIMER_CONSTANTS.STOP_THE_TIMER) {
      timeType = TIMER_CONSTANTS.API_INITIATED;
    } 
    if (stopTimer === STOP_TIMER_CONSTANTS.RESUME_THE_TIMER) {
      timeType = TIMER_CONSTANTS.API_DATA_FETCHED;
    }
    if (stopTimer === STOP_TIMER_CONSTANTS.SECTION_SUBMITTED) {
      timeType = TIMER_CONSTANTS.SECTION_SUBMITTED;
    }
    if (stopTimer === STOP_TIMER_CONSTANTS.FAILED_API_CALL) {
      timeType = TIMER_CONSTANTS.FAILED_API_CALL;
    }
    if (stopTimer !== STOP_TIMER_CONSTANTS.INITIAL) {
      if (isQuizActive) {
        if (!isQuizTimerZero) {
          if (isSectionTimerEnable) {
            setSectionTimerState(timeType);
            setQuizTimerState(timeType);
          } else {
            setQuestionTimerState(timeType);
            setSectionTimerState(timeType);
            setQuizTimerState(timeType);  
          }
        } else {
          // setQuizTimerState(timeType);
        }
      }
    }
  };

  useEffect(() => {
    checkApiHits();
  }, [stopTimer])

  useEffect(() => {
    return () => {
      dispatch(isTimerStopped(STOP_TIMER_CONSTANTS.INITIAL));
      dispatch(setScreen(false));
    }
  }, []);

  useBackHandler(deviceBackHandler);

  const quizMenuNavigateBack = () => {
    dispatch(setScreen(false));
  }

  const pauseTimer = () => {
    if (isQuizActive) {
      if (!isQuizTimerZero) {
        if (isSectionTimerEnable) {
          setSectionTimerState(TIMER_CONSTANTS.PAUSE);
          setQuizTimerState(TIMER_CONSTANTS.PAUSE);
          pauseScreenTime();
        } else {
          setQuestionTimerState(TIMER_CONSTANTS.PAUSE);
          setSectionTimerState(TIMER_CONSTANTS.PAUSE);
          setQuizTimerState(TIMER_CONSTANTS.PAUSE);
          pauseScreenTime();
        }
      } else {
        // setQuizTimerState(TIMER_CONSTANTS.PAUSE);
        pauseScreenTime();
      }
    }
  };

  const restartTheTimer = () => {
    if (isQuizActive) {
      if (!isQuizTimerZero) {
        if (isSectionTimerEnable) {
          setSectionTimerState(TIMER_CONSTANTS.RESUME);
          setQuizTimerState(TIMER_CONSTANTS.RESUME);
          restartScreenTime();
        } else {
          setQuestionTimerState(TIMER_CONSTANTS.RESUME);
          setSectionTimerState(TIMER_CONSTANTS.RESUME);
          setQuizTimerState(TIMER_CONSTANTS.RESUME);
          restartScreenTime();
        }
      } else {
        // setQuizTimerState(TIMER_CONSTANTS.RESUME);
        restartScreenTime();
      }
    }
  };

  const isDisable = () => {
    if (isQuizActive) {
      if (!isQuizTimerZero) {
        if (isSectionTimerEnable) {
          return false
        } else {
          if (activeQuestionSectionTime == 0) {
            return true;
          }
          return false;
        }
      }
      return false;
    }
  };

  return (
    <GestureRecognizer
      onSwipe={(direction, state) => {
        isTimerPaused ? () => {} : onSwipe(direction, state)
      }}
      style={Styles.gestureRecognizerStyle}
      config={{ velocityThreshold: 0.3, directionalOffsetThreshold: 80 }}
    >
      <View style={Styles.screenContainer}>
        <HeaderSection
          sectionStatus={isSectionTimerEnable}
          openQuizInstruction
          hideMenu={false}
          onPress={() => {
            isTimerPaused ? () => {} : dispatch(getDetailsOfQuizQuestion())
          }}
          timePause={() => {
            pauseTimer();
            dispatch(setSaveNextAndReviewPauseQuiz({
              finalOptions: options,
              screenTime: screenTime,
              status: 0,
            }))
          }}
          restartTimer={() => {
            restartTheTimer();
            dispatch(restartTimer());
          }}
          options={options}
        />
        <View style={Styles.marksSection}>
          <View style={Styles.questionNoContainer}>
            <View style={Styles.questionNoSection}>
              <Text style={Styles.questionNoText}>{activeQuestionOrder}</Text>
            </View>
          </View>

          <View style={Styles.marksDescription}>
            <View style={Styles.marksDescriptionContainer}>
              <Image
                source={Images.CORRECT_ICON}
                style={[
                  Styles.marksDescriptionImage,
                  { tintColor: ColorTheme.GREEN_BG },
                ]}
              />
              <Text style={{ color: ColorTheme.GREEN_BG }}>
                {Number(activeQuestionMarks) > 0 ? `+${activeQuestionMarks}` : activeQuestionMarks}
              </Text>
            </View>
            <View style={Styles.marksDescriptionContainer}>
              <Image
                source={Images.QUIZ_QUESTION_CROSS}
                style={[
                  Styles.marksDescriptionImage,
                  { tintColor: ColorTheme.RACE_PINK },
                ]}
              />
              <Text style={{ color: ColorTheme.RACE_PINK }}>
                {Number(activeQuestionNegativeMarks) > 0 ? `-${activeQuestionNegativeMarks}` : activeQuestionNegativeMarks}
              </Text>
            </View>
            <View style={Styles.marksDescriptionContainer}>
              <Image
                source={Images.QUIZ_QUESTION_NEGATIVE}
                style={[
                  Styles.marksDescriptionImage,
                  { tintColor: ColorTheme.GREY_BG },
                ]}
              />
              <Text style={{ color: ColorTheme.GREY_BG }}>
             {Number(activeQuestionUnattemptedMarks) > 0 ? `-${activeQuestionUnattemptedMarks}` : activeQuestionUnattemptedMarks}
              </Text>
            </View>
          </View>
        </View>

        <View 
        style={Styles.scrollViewContainer}
        pointerEvents={isTimerPaused ? 'none' : 'auto'}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <QuestionRender
              questionData={activeQuestionTitle}
              questionID={activeQuestionId}
              check
            />
            <View 
              style={Styles.mcqMainContainer}
              pointerEvents={isDisable() ? 'none' : 'auto'}>
              {activeQuestionOptions.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => checkOption(item.id)}
                    style={[
                      Styles.mcqOptionsContainer,
                      options.includes(item.id)
                        ? Styles.answerTextStyle
                        : {},
                    ]}
                  >
                    {mcqText(item.title, item.id, index)}
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={Styles.bottomButtonContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <CustomButton
                  customStyle={Styles.buttonStyle}
                  onButtonPress={() => submitQuizAndQuestion(true, reviewStatus)}
                  buttonText={translations.REVIEW_AND_NEXT}
                  isDisabled={isDisable()}
                  textColor={ColorTheme.WHITE}
                  buttonColor={ColorTheme.GREEN_BG}
                  fontFamily={Fonts.INTER_BOLD}
                  textStyle={Styles.buttonTextStyle}

                />
                <CustomButton
                  customStyle={Styles.buttonStyle}
                  onButtonPress={() => 
                    setOptions([])
                  }
                  buttonText={translations.CLEAR_RESPONSE}
                  isDisabled={isDisable()}
                  textColor={ColorTheme.WHITE}
                  buttonColor={ColorTheme.GREEN_BG}
                  fontFamily={Fonts.INTER_BOLD}
                  textStyle={Styles.buttonTextStyle}
                />
                <CustomButton
                  customStyle={Styles.buttonStyle}
                  onButtonPress={() => submitQuizAndQuestion(true, QUIZ_CONSTANTS.ATTEMPTED)}
                  isDisabled={isDisable()}
                  buttonText={translations.SAVE_AND_NEXT}
                  textColor={ColorTheme.WHITE}
                  buttonColor={ColorTheme.GREEN_BG}
                  fontFamily={Fonts.INTER_BOLD}
                  textStyle={Styles.buttonTextStyle}
                />
              </View>

            </View>
          </ScrollView>
        </View>
      </View>

      <CustomQuizMenuModal
        isVisible={isOnMenuScreen}
        menuClose={() => dispatch(closeMenu())}
        isSectionTimerEnable={isSectionTimerEnable}
        setInstructionStatus={() => {
          dispatch(setQuizInstructionModalOpen(true));
        }}
        data={reviewQuizData}
        finalOptions={options}
        userScreenTime={screenTime}
        navigateBack={quizMenuNavigateBack}
      />

      <CustomModal
        visible={isQuizInstructionModalOpen}
        modalHeight="90%"
        alignBottom
        borderTopLeftRadius={0}
        borderTopRightRadius={0}
        animationIn="slideInUp"
      >
        <QuizInstructions
          details={quizInfo}
          closeInstructions={() => dispatch(setQuizInstructionModalOpen(false))}
          title={title}
        />
      </CustomModal>

      <CustomSubmitConfirmModal
        showSubmitConfirmModal={openConfirmModal}
        showContent={showContent}
        timeRemain={showContent ? quizTime : sectionTime
        }
        onClose={() => dispatch(setOpenConfirmModal(false))}
        onConfirm={() => onConfirming()}
        onSectionSubmit={() => {
          dispatch(isTimerStopped(STOP_TIMER_CONSTANTS.STOP_THE_TIMER));
          dispatch(submitTheSection({ navigation }));
          dispatch(setOpenConfirmModal(false));
        }}
      />

      <CustomSubmitSuccessModal
        showSubmitSuccessModal={openSuccessModal}
        onViewResult={() => onViewResult()}
      />

      <Loader show={isLoading} />
    </GestureRecognizer>
  );
}

QuizQuestionScreen.propTypes = {
  navigation: propTypes.any,
};
