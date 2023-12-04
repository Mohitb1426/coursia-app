import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {
  useEffect, useLayoutEffect, useState, useRef, useMemo, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ViewShot from 'react-native-view-shot';
import ReactNativeBlobUtil from 'react-native-blob-util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HeaderSection } from './components';
import { CustomModal, QuestionRender } from '../../components';
import SvgIcon from '../../common/SvgIcon';
import { ColorTheme } from '../../common/AppStyles';
import { indexToAlpha } from '../../utilities/commonFunction/indexToAlpha';
import {
  changeLoaderStatus,
  getQuizAnswer,
  getQuizComment,
  setCourseId,
  setGroupId,
  setQuizBookmark,
  setShowFeedbackModal,
  setShowFeedbackConfirmationModal,
  getCourseDetails,
  clearQuizCommentData,
} from './actionQuizResultAnswer';
import Loader from '../../components/Loader';
import styles from './styles';
import { constants } from './constantsQuizResult';
import { debugLog } from '../../common/Logger';
import Images from '../../common/Images';
import { getOfflineDownloadData } from '../DownloadCourseScreen/actionDownloadCourse';
import FeedbackListItem from '../QuizComments/FeedbackListItem';
import FeedbackConfirmation from '../QuizComments/FeedbackConfirmation';
import AddFeedbackModal from '../QuizComments/AddFeedbackModal';

import IntroComponent from '../../components/IntroComponent';
import { LocalizationContext } from '../../common/LocalizationProvider';
import useThemedStyles from '../../hooks/useThemedStyles';

function QuizResultAnswerScreen({ navigation, route }) {
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const { translations, appLanguage } = useContext(LocalizationContext);
  const {
    module_ID, section_ID, question_ID, serialNo,
  } = route.params;
  const reducerQuizResultAnswer = useSelector((state) => state.reducerQuizResultAnswer);
  const {
    courseDetails,
    quizAnswerData,
    commentQuizData,
    isLoading,
    courseId,
    showFeedbackConfirmationScreen,
    showFeedbackScreen,
    groupId,
  } = reducerQuizResultAnswer;
  const [userAnswerId, setUserAnswerId] = useState([]);
  const [showIntroPage, setShowIntroPage] = useState(false);
  const questionData = quizAnswerData[0];
  const marksForCorrect = questionData?.weightage || 0;
  const marksForIncorrect = questionData?.negative_weightage || 0;
  const question_group_id = questionData?.question_group_id;
  const { width, height } = useWindowDimensions();
  const viewRef = useRef();
  const downloadCourseState = useSelector((state) => state.reducerDownloadCourseUnit);
  const { offlineVideosData } = downloadCourseState;
  const isCommentDataAvailable = commentQuizData.length !== 0;

  const mcqText = (text, is_correct, indexNum) => {
    const data = text.split('{{}}');
    return (
      <View style={Styles.mcqTextContainerStyle}>
        <Text style={[Styles.serialNoText, is_correct ? Styles.customFontStyle : null]}>
          {`${indexToAlpha(indexNum)}) `}
        </Text>
        {data.map((item, index) => {
          if (item.includes('https')) {
            const imgWidth = item.substring(
              item.indexOf('?w=') === -1 ? 0 : item.indexOf('?w=') + 3,
              item.indexOf('&h=') === -1 ? 0 : item.indexOf('&h='),
            );
            const imgHeight = item.substring(
              item.indexOf('&h=') === -1 ? 0 : item.indexOf('&h=') + 3,
              item.indexOf('&h=') === -1 ? 0 : item.length,
            );
            return (
              <View
                style={
                  is_correct
                    ? [
                      Styles.mcqTextImageContainerStyle,
                      {
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      },
                    ]
                    : Styles.mcqTextImageContainerStyle
                }
              >
                <Image
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  style={Styles.imageStyle(imgHeight, height, width, imgWidth)}
                  source={{
                    uri: item.replace(/}|{/g, ''),
                  }}
                />
                {is_correct ? (
                  <View style={Styles.imageContainer}>
                    <SvgIcon.RightIcon />
                  </View>
                ) : null}
              </View>
            );
          }
          if (item?.trim() !== '') {
            return (
              <View
                style={
                  is_correct
                    ? [
                      Styles.mcqTextImageContainerStyle,
                      {
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginHorizontal: '0%',
                        alignItems: 'center',
                      },
                    ]
                    : Styles.mcqTextImageContainerStyle
                }
              >
                <View style={Styles.textContainerStyle}>
                  <Text
                    style={[Styles.mcqOptionsText, is_correct ? Styles.customFontStyle : {}]}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                  >
                    {item}
                    {' '}
                  </Text>
                </View>
                {is_correct ? <SvgIcon.RightIcon /> : null}
              </View>
            );
          }
          return null;
        })}
      </View>
    );
  };

  useEffect(() => {
    dispatch(clearQuizCommentData());
  }, []);

  useEffect(() => {
    if (showFeedbackConfirmationScreen) {
      dispatch(
        getQuizComment({
          module_ID,
          section_ID,
          question_ID,
          courseId,
        }),
      );
    }
  }, [showFeedbackConfirmationScreen]);

  const navigateMenuQuiz = () => {
    navigation.goBack();
  };

  const userSelectedAnswerId = () => {
    let userId = [];
    questionData?.useranswer.forEach((data) => {
      if (data?.answer_id) {
        userId = data?.answer_id?.split(',');
      }
    });
    setUserAnswerId(userId);
  };

  useLayoutEffect(() => {
    showIntroCard();
    dispatch(getQuizAnswer({ module_ID, section_ID, question_ID }));
  }, []);

  useEffect(() => {
    dispatch(setGroupId(question_group_id));
    dispatch(
      getCourseDetails({
        module_ID,
      }),
    );
  }, [quizAnswerData]);

  useEffect(() => {
    if (courseDetails.length > 0) {
      dispatch(setCourseId(courseDetails[0].id));
      dispatch(
        getQuizComment({
          module_ID,
          section_ID,
          question_ID,
          courseId: courseDetails[0].id,
        }),
      );
    }
  }, [courseDetails]);

  const showIntroCard = async () => {
    try {
      const value = await AsyncStorage.getItem('@ShowIntroAnswer');
      if (value !== null) {
        setShowIntroPage(false);
      } else {
        setShowIntroPage(true);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    const isTamil = appLanguage === 'tn' ? 0 : 1;
    dispatch(getOfflineDownloadData({ isTamil }));
    userSelectedAnswerId();
  }, [isLoading]);

  const isQuestionBookMarked = useMemo(() => {
    // eslint-disable-next-line eqeqeq
    return offlineVideosData.some((item) => item.questionNo == question_ID);
  }, [offlineVideosData]);

  const BookMarkImage = isQuestionBookMarked
    ? Images.ACTIVE_QUIZ_BOOKMARK : Images.IN_QUIZ_ACTIVE_BOOKMARK;

  const capture = () => {
    const isTamil = appLanguage === 'tn' ? 0 : 1;
    if (isQuestionBookMarked) {
      // eslint-disable-next-line eqeqeq
      const path = offlineVideosData.find((item) => item.questionNo == question_ID);
      ReactNativeBlobUtil.fs
        .unlink(path?.url)
        .then(() => {
          dispatch(getOfflineDownloadData({ isTamil }));
        })
        .catch(() => {
          dispatch(changeLoaderStatus(false));
        });
    } else {
      // eslint-disable-next-line no-unused-expressions
      viewRef?.current.capture().then((uri) => {
        dispatch(setQuizBookmark({ uri, question_ID, isTamil }));
        // eslint-disable-next-line no-sequences
      }),
      (error) => {
        dispatch(changeLoaderStatus(false));
        debugLog('Oops, snapshot failed', error);
      };
    }
  };

  const hideIntro = async () => {
    // await StorageUtils.setUserPref(AsyncKeys.ASYNC_QUIZ_INTRO_MODAL, 'false');
    // dispatch(hideGraphIntroScreen(false));
    try {
      await AsyncStorage.setItem('@ShowIntroAnswer', 'true');
      setShowIntroPage(false);
    } catch (e) {
      // saving error
    }
  };

  return (
    <ScrollView
      contentContainerStyle={Styles.mainScrollViewStyle}
      showsVerticalScrollIndicator={false}
    >
      <ViewShot
        ref={viewRef}
        options={constants.VIEW_SHOT}
        style={Styles.containerStyle}
      >
        <View style={Styles.containerStyle}>
          {showIntroPage && <IntroComponent onPressGotIt={hideIntro} isAnswerIntro />}
          <View style={Styles.screenContainer}>
            <HeaderSection
              onPress={() => navigateMenuQuiz()}
              remainingTime={questionData?.useranswer[0]?.time_taken || 0}
            />

            <View style={Styles.scrollViewContainer}>
              <ScrollView
                contentContainerStyle={Styles.mainScrollViewStyle}
                showsVerticalScrollIndicator={false}
              >
                <View
                  style={Styles.innerScrollViewContainer}
                >
                  {/*  */}
                  <View style={Styles.marksSection}>
                    <View style={Styles.questionNoContainer}>
                      <View style={Styles.questionNoSection}>
                        <Text style={Styles.questionNoText}>{serialNo}</Text>
                      </View>
                    </View>

                    <View style={Styles.marksDescription}>
                      <View style={Styles.marksDescriptionContainer}>
                        <SvgIcon.CheckIcon />
                        <Text style={Styles.marksForCorrectTextStyle}>
                          {Number(marksForCorrect) > 0 ? `+${marksForCorrect}` : marksForCorrect}
                        </Text>
                      </View>
                      <View style={Styles.marksDescriptionContainer}>
                        <SvgIcon.WrongIcon />
                        <Text style={Styles.marksForIncorrectTextStyle}>
                          {Number(marksForIncorrect) > 0 ? `-${marksForIncorrect}` : marksForIncorrect}
                        </Text>
                      </View>
                      <View style={Styles.marksDescriptionContainer}>
                        <Image
                          source={Images.QUIZ_QUESTION_NEGATIVE}
                          style={[Styles.marksDescriptionImage, { tintColor: ColorTheme.GREY_BG }]}
                        />
                        <Text style={Styles.unattemptedWeightAgeTextStyle}>
                          {Number(questionData?.unattempted_weightage) > 0
                            ? `-${questionData?.unattempted_weightage}`
                            : questionData?.unattempted_weightage}
                        </Text>
                      </View>
                    </View>

                    {!showIntroPage && (
                      <View style={Styles.questionNoContainer}>
                        <Pressable onPress={capture}>
                          <Image
                            source={BookMarkImage}
                            style={Styles.marksDescriptionImage}
                          />
                        </Pressable>
                      </View>
                    )}
                  </View>
                  {/* {questionText()} */}
                  <QuestionRender questionData={questionData?.title} check />
                  <View style={Styles.mcqMainContainer}>
                    {questionData?.answers.map((item, index) => {
                      return (
                        <View
                          // eslint-disable-next-line react/no-array-index-key
                          key={index}
                          style={[
                            Styles.mcqOptionsContainer,
                            item?.is_correct ? Styles.correctBorderStyle : {},
                            userAnswerId.includes(String(item?.id)) && !item?.is_correct
                              ? Styles.wrongBorderStyle
                              : {},
                          ]}
                        >
                          {mcqText(item.title, item?.is_correct, index)}
                        </View>
                      );
                    })}
                  </View>

                  {questionData?.solution ? (
                    <View style={Styles.containerStyle}>
                      <Text style={Styles.solutionTextStyle}>Solution</Text>
                      {/* {solutionText()} */}
                      <QuestionRender questionData={questionData?.solution} check={false} />
                    </View>
                  ) : null}
                </View>
                {isCommentDataAvailable ? (
                  <FeedbackListItem commentQuizData={commentQuizData} />
                ) : null}
              </ScrollView>
              {!isCommentDataAvailable ? (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(setShowFeedbackModal(true));
                  }}
                >
                  <Text style={Styles.feedbackButtonStyle}>{translations.GIVE_FEEDBACK}</Text>
                </TouchableOpacity>
              ) : null}
              <CustomModal
                visible={showFeedbackScreen}
                alignBottom
                onModalHide={() => {
                  dispatch(setShowFeedbackModal(false));
                }}
                modalHeight={400}
                onBackdropPress={() => {
                  dispatch(setShowFeedbackModal(false));
                }}
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                animationIn="slideInUp"
              >
                <AddFeedbackModal
                  questionId={question_ID}
                  moduleId={module_ID}
                  courseId={courseId}
                  section_id={section_ID}
                  serial_no={serialNo}
                  group_id={groupId}
                />
              </CustomModal>
              <CustomModal
                modalStyle={Styles.modalStyle}
                visible={showFeedbackConfirmationScreen}
                modalHeight={400}
                onBackdropPress={() => {
                  dispatch(setShowFeedbackConfirmationModal(false));
                }}
                onModalHide={() => {
                  dispatch(setShowFeedbackConfirmationModal(false));
                }}
                animationIn="slideInUp"
                borderTopLeftRadius={30}
                borderTopRightRadius={30}
                borderBottomLeftRadius={30}
                borderBottomRightRadius={30}
              >
                <FeedbackConfirmation />
              </CustomModal>
            </View>
          </View>
          <Loader show={isLoading} />
        </View>
      </ViewShot>
    </ScrollView>
  );
}

QuizResultAnswerScreen.propTypes = {
  navigation: PropTypes.any,
  route: PropTypes.any,
};

export default QuizResultAnswerScreen;
