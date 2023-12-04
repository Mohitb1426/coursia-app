import React, { useContext } from 'react';
import {
  Text, View, Modal, SafeAreaView, Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { LANGUAGE_ENGLISH, LocalizationContext } from '../../common/LocalizationProvider';
import Images from '../../common/Images';
import styles from './styles';
// import Strings from '../../../utilities/Strings';
import Fonts from '../../common/Fonts';
import { ColorTheme } from '../../common/AppStyles';
import CustomButton from '../CustomButton';
import useThemedStyles from '../../hooks/useThemedStyles';

function CustomSubmitConfirmModal({
  showSubmitConfirmModal,
  onClose,
  showContent,
  onConfirm,
  onSectionSubmit,
  timeRemain,
}) {
  const Styles = useThemedStyles(styles);
  const quizQuestionState = useSelector((state) => state.reducerQuizQuestion);
  const { questionStatus, sectionQuestionStatus } = quizQuestionState;
  const attempted = showContent
    ? questionStatus.attempted + questionStatus.markAsReview_Attempted
    : sectionQuestionStatus.attempted + sectionQuestionStatus.markAsReview_Attempted;
  const unattempted = showContent
    ? questionStatus.unAttempted + questionStatus.markAsReview_Unattempted
    : sectionQuestionStatus.unAttempted + sectionQuestionStatus.markAsReview_Unattempted;
  const { translations, appLanguage } = useContext(LocalizationContext);

  const quizUnitState = useSelector((state) => state.reducerQuizUnit);
  const { isQuizTimerZero } = quizUnitState;
  const openModal = () => {
    if (showContent) {
      onConfirm();
    } else {
      onSectionSubmit();
    }
  };

  const textStyle = LANGUAGE_ENGLISH !== appLanguage ? Styles.tamilRowText : Styles.rowText;
  const submitText = LANGUAGE_ENGLISH !== appLanguage
    ? Styles.tamilSureToSubmit : Styles.sureSubmitText;

  const timeQuizRemain = () => {
    const secs = timeRemain;
    const hours = Math.floor(secs / (60 * 60));
    const divisor_for_minutes = secs % (60 * 60);
    const minutes = Math.floor(divisor_for_minutes / 60);
    const divisor_for_seconds = divisor_for_minutes % 60;
    const seconds = Math.ceil(divisor_for_seconds);
    const obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    if (obj.h && obj.m && obj.s) {
      return (
        <Text style={textStyle}>
          {`${String(obj.h)?.padStart(
            2,
            '0',
          )}:${String(obj.m)?.padStart(2, '0')}:${String(obj.s)?.padStart(
            2,
            '0',
          )} hrs`}
        </Text>
      );
    } if (obj.m && obj.s) {
      return (
        <Text style={textStyle}>
          {`${String(obj.m)?.padStart(
            2,
            '0',
          )}:${String(obj.s)?.padStart(2, '0')} mins`}
        </Text>
      );
    }
    return (
      <Text style={textStyle}>
        {`${String(obj.s)?.padStart(
          2,
          '0',
        )} secs`}
      </Text>
    );
  };

  const renderSubmitText = () => {
    return LANGUAGE_ENGLISH !== appLanguage ? (
      <>
        <Text style={submitText}>{translations.SURE_TO_SUBMIT_TEXT_1}</Text>
        <Text style={Styles.tamilSureToSubmitTextTwo}>{translations.SURE_TO_SUBMIT_TEXT_2}</Text>
      </>

    ) : (
      <Text style={submitText}>{translations.SURE_TO_SUBMIT}</Text>
    );
  };

  return (
    <Modal visible={showSubmitConfirmModal} transparent>
      <SafeAreaView style={Styles.modalContent}>
        <View style={Styles.mainContainer}>
          <Image source={Images.CAUTION} style={Styles.caution} />

          <View style={Styles.detailsContainer}>
            {isQuizTimerZero ? null : (
              <View style={Styles.rowContainer}>
                <Image
                  source={Images.CLOCK_FULL}
                  style={Styles.rowImage}
                  resizeMode="contain"
                />
                <View style={Styles.textContainer}>
                  <Text style={textStyle}>{translations.TIME_REMAIN}</Text>
                </View>
                <Text
                  style={[textStyle, Styles.colonAdditionalColorStyle]}
                >
                  {`${translations.COLON} `}
                </Text>
                {timeQuizRemain()}
              </View>
            )}

            <View style={Styles.rowContainer}>
              <Image
                source={Images.CORRECT_QUESTION}
                style={Styles.rowImage}
                resizeMode="contain"
              />
              <View style={Styles.textContainer}>
                <Text style={textStyle}>{translations.ATTEMPTED}</Text>
              </View>
              <Text
                style={[textStyle, Styles.colonAdditionalColorStyle]}
              >
                {`${translations.COLON} `}
              </Text>
              <Text style={textStyle}>{`${attempted}`}</Text>
            </View>

            <View style={Styles.rowContainer}>
              <Image
                source={Images.EYE_CLOSE}
                style={Styles.rowImage}
                resizeMode="contain"
              />
              <View style={Styles.textContainer}>
                <Text style={textStyle}>{translations.UNATTEMPTED}</Text>
              </View>
              <Text
                style={[textStyle, Styles.colonAdditionalColorStyle]}
              >
                {`${translations.COLON} `}
              </Text>
              <Text style={textStyle}>{`${unattempted}`}</Text>
            </View>
          </View>

          {/* <Text style={submitText}>{translations.SURE_TO_SUBMIT}</Text> */}
          {renderSubmitText()}

          <View style={Styles.buttonMainContainer}>
            <CustomButton
              textStyle={[Styles.buttonText, Styles.additionalButtonStyle]}
              customStyle={Styles.buttonContainer}
              onButtonPress={onClose}
              buttonText={translations.NO}
              isDisabled={false}
              textColor={ColorTheme.GREEN_BG}
              buttonColor={ColorTheme.WHITE}
              fontFamily={Fonts.INTER_REGULAR}
              fontWeight="700"
            />
            <CustomButton
              textStyle={[Styles.buttonText, Styles.additionalButtonStyle]}
              customStyle={Styles.buttonContainer}
              onButtonPress={() => openModal()}
              buttonText={translations.YES}
              isDisabled={false}
              textColor={ColorTheme.WHITE}
              buttonColor={ColorTheme.GREEN_BG}
              fontFamily={Fonts.INTER_REGULAR}
              fontWeight="700"
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
CustomSubmitConfirmModal.propTypes = {
  showSubmitConfirmModal: propTypes.bool,
  onClose: propTypes.func,
  showContent: propTypes.bool,
  onConfirm: propTypes.func,
  onSectionSubmit: propTypes.func,
  timeRemain: propTypes.any,
};

export default CustomSubmitConfirmModal;
