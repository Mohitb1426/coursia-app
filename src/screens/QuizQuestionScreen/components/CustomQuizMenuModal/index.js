import {
  View, Text, Image, ScrollView,
} from 'react-native';
import React, { useContext } from 'react';
import { Shadow } from 'react-native-shadow-2';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import CustomButton from '../../../../components/CustomButton';
import HeaderSection from '../HeaderSection';
import Images from '../../../../common/Images';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';
import Sections from './Components/Sections';
import {
  setShowContent,
  setOpenConfirmModal,
  setIsModalOpen,
  setSectionQuestionStatus,
  setSaveNextAndReviewPauseQuiz,
  restartTimer,
} from '../../actionQuizQuestion';
import { QUIZ_CONSTANTS } from '../../constantsScreenQuizQuestion';
import {
  CustomModal,
} from '../../../../components';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { ThemeContext } from '../../../../common/ThemeProvider';

export function CustomQuizMenuModal({
  isVisible,
  isSectionTimerEnable,
  setInstructionStatus,
  data,
  finalOptions,
  userScreenTime,
}) {
  const Styles = useThemedStyles(styles);
  const { darkMode } = useContext(ThemeContext);
  const startColor = darkMode ? ColorTheme.STATUS_BAR_BLACK_BACKGROUND
    : ColorTheme.QUIZ_SHADOW_COLOR;
  const dispatch = useDispatch();
  const { translations } = useContext(LocalizationContext);
  const quizQuestionState = useSelector((state) => state.reducerQuizQuestion);
  const quizInstructionsState = useSelector((state) => state.reducerQuizInstructions);
  const { sectionQuestionStatus, isTimerPaused } = quizQuestionState;
  const { activeQuestionsData } = quizInstructionsState;
  const { activeSectionId } = activeQuestionsData;

  const submitSectionStatus = () => {
    data.forEach((item) => {
      // eslint-disable-next-line eqeqeq
      if (item.section_id == activeSectionId) {
        let counterOne = 0;
        let counterTwo = 0;
        let counterThree = 0;
        let counterFour = 0;
        item?.questions.forEach((elem) => {
          if (elem.status === QUIZ_CONSTANTS.UNATTEMPTED) {
            counterOne += 1;
          } else if (elem.status === QUIZ_CONSTANTS.UNATTEMPTED_REVIEW) {
            counterTwo += 1;
          } else if (elem.status === QUIZ_CONSTANTS.ATTEMPTED_REVIEW) {
            counterFour += 1;
          } else {
            counterThree += 1;
          }
        });
        dispatch(setSectionQuestionStatus({
          ...sectionQuestionStatus,
          attempted: counterThree,
          markAsReview_Attempted: counterFour,
          markAsReview_Unattempted: counterTwo,
          unAttempted: counterOne,
        }));
      }
    });
  };

  const submit = (dataSubmit) => {
    if (dataSubmit) {
      dispatch(setShowContent(true));
      dispatch(setOpenConfirmModal(true));
      dispatch(setIsModalOpen(true));
    } else {
      submitSectionStatus();
      dispatch(setShowContent(false));
      dispatch(setOpenConfirmModal(true));
    }
  };

  return (
    <CustomModal
      visible={isVisible}
      modalHeight="100%"
      alignBottom
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      animationIn="flash"
    >
      <View style={Styles.sectionContainer}>
        <HeaderSection
          sectionStatus={isSectionTimerEnable}
          openQuizInstruction={setInstructionStatus}
          hideMenu
          onPress={() => { }}
          timePause={() => dispatch(setSaveNextAndReviewPauseQuiz({
            finalOptions,
            screenTime: userScreenTime,
            status: 0,
          }))}
          restartTimer={() => dispatch(restartTimer())}
          options={finalOptions}
        />
      </View>
      <View
        style={Styles.container}
        pointerEvents={isTimerPaused ? 'none' : 'auto'}
      >
        <View style={Styles.subContainer}>
          <View style={Styles.sectionContainer}>
            <View style={Styles.imageContainer}>
              <Image
                source={Images.MARKED_FOR_REVIEW}
                style={Styles.imageStyle}
                resizeMode="contain"
              />
              <Text style={Styles.textStyle}>
                {translations.MARKED_FOR_REVIEW}
              </Text>
            </View>
            <View style={[Styles.imageContainer, Styles.attemptedStyle]}>
              <Image
                source={Images.ATTEMPTED}
                style={Styles.imageStyle}
                resizeMode="contain"
              />
              <Text style={Styles.textStyle}>
                {translations.ATTEMPTED}
              </Text>
            </View>
            <View style={Styles.imageContainer}>
              <Image
                source={Images.UNATTEMPTED}
                style={Styles.imageStyle}
                resizeMode="contain"
              />
              <Text style={Styles.textStyle}>
                {translations.UNATTEMPTED}
              </Text>
            </View>
          </View>

          <View style={Styles.scrollViewContainerMenu}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled
            >
              {data.map((item) => (
                <Sections
                  key={item?.id}
                  options={finalOptions}
                  data={item}
                  userScreenTime={userScreenTime}
                />
              ))}
            </ScrollView>
          </View>
        </View>

        <Shadow
          style={Styles.shadowStyle}
          distance={10}
          startColor={startColor}
          paintInside={false}
          offset={[0, -1]}
        >
          <View style={Styles.buttonContainer}>
            {data[0]?.is_no_section !== 0 && (
              <CustomButton
                textStyle={Styles.submitTextStyle}
                customStyle={Styles.buttonStyleMenu}
                onButtonPress={() => submit(false)}
                buttonText={translations.SUBMIT_SECTION}
                isDisabled={false}
                textColor={ColorTheme.GREEN_BG}
                buttonColor={ColorTheme.WHITE}
                fontFamily={Fonts.INTER_REGULAR}
                fontWeight="700"
              />
            )}

            <CustomButton
              textStyle={Styles.submitTextStyle}
              customStyle={Styles.buttonStyleMenu}
              onButtonPress={() => submit(true)}
              buttonText={translations.SUBMIT_TEST}
              isDisabled={false}
              textColor={ColorTheme.WHITE}
              buttonColor={ColorTheme.GREEN_BG}
              fontFamily={Fonts.INTER_REGULAR}
              fontWeight="700"
            />
          </View>
        </Shadow>
      </View>
    </CustomModal>
  );
}

CustomQuizMenuModal.propTypes = {
  isVisible: propTypes.bool,
  isSectionTimerEnable: propTypes.bool,
  setInstructionStatus: propTypes.func,
  data: propTypes.array,
  finalOptions: propTypes.array,
  userScreenTime: propTypes.any,
};

export default CustomQuizMenuModal;
