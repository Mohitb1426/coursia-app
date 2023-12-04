/* eslint-disable no-nested-ternary */
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './style';
import Images from '../../../../common/Images';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { titleLengthShort } from '../../../../common/TitleLengthShort';
import { QUIZ_UNIT_CONSTANTS } from '../../constantsScreenQuizUnit';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function ContentCard({
  quizModuleData,
  index,
  title,
  lock,
  startQuiz,
  showResult,
  buyQuiz,
  resumeQuiz,
}) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  const quizUnitState = useSelector((state) => state.reducerQuizUnit);
  const { unitIndex } = quizUnitState;
  const questions = quizModuleData[unitIndex]?.module[index]?.quiz_details?.questions || 0;
  // eslint-disable-next-line no-unsafe-optional-chaining
  const minutes = Math.ceil(quizModuleData[unitIndex]?.module[index]?.quiz_details?.time / 60) || 0;
  const marks = quizModuleData[unitIndex]?.module[index]?.quiz_details?.marks || 0;

  function renderImages() {
    const resultData = quizModuleData[unitIndex]?.module[index]?.quiz_details?.quiz_completed || 0;
    return resultData === QUIZ_UNIT_CONSTANTS.VIEW_RESULT
      ? (
        <TouchableOpacity onPress={showResult} style={Styles.lowerContainerStyle}>
          <Image
            source={Images.VIEW_RESULT}
            style={Styles.playButtonStyle}
            resizeMode="contain"
          />
          <Text style={Styles.quizTextStyle}>
            {translations.VIEW_RESULT}
          </Text>
        </TouchableOpacity>
      ) : resultData === QUIZ_UNIT_CONSTANTS.START_QUIZ
        ? (
          <TouchableOpacity onPress={startQuiz} style={Styles.lowerContainerStyle}>
            <Image
              source={Images.QUIZ_PLAY}
              style={Styles.playButtonStyle}
              resizeMode="contain"
            />
            <Text style={Styles.quizTextStyle}>
              {translations.QUIZ_START}
            </Text>
          </TouchableOpacity>
        )
        : (
          <TouchableOpacity onPress={resumeQuiz} style={Styles.lowerContainerStyle}>
            <Image
              source={Images.PAUSE_BUTTON}
              style={Styles.playButtonStyle}
              resizeMode="contain"
            />
            <Text style={Styles.quizTextStyle}>
              {translations.QUIZ_RESUME}
            </Text>
          </TouchableOpacity>
        );
  }

  function renderText() {
    const resultData = quizModuleData[unitIndex]?.module[index]?.quiz_details?.quiz_completed || 0;
    const user_Marks = quizModuleData[unitIndex]?.module[index]?.quiz_details?.correct_marks || 0;
    const final_score = quizModuleData[unitIndex]?.module[index]?.quiz_details?.final_score || 0;
    const total_Quiz_Marks = quizModuleData[unitIndex]?.module[index]?.quiz_details?.marks || 0;
    const userCount = quizModuleData[unitIndex]?.module[index]?.quiz_details?.user_count || 0;

    return resultData === QUIZ_UNIT_CONSTANTS.VIEW_RESULT ? (
      <View style={Styles.renderTextContainer}>
        <View style={Styles.imageContainer}>
          <Image
            source={Images.GREEN_TICK}
            style={Styles.imageStyle}
            resizeMode="contain"
          />
          <Text style={Styles.additionalDetails}>
            {user_Marks}
            {' '}
            /
            {total_Quiz_Marks}
          </Text>
        </View>
        {userCount > 4 && (
          <View style={Styles.imageContainer}>
            <Image
              source={Images.PERCENTAGE}
              style={Styles.imageStyle}
              resizeMode="contain"
            />
            <Text
              style={Styles.additionalDetails}
            >
              {`${final_score}%ile`}
            </Text>
          </View>
        )}
      </View>
    ) : (
      <View style={Styles.imagesContainer}>
        <View style={Styles.imageContainer}>
          <Image
            source={Images.QUESTION_MARK}
            style={Styles.imageStyle}
            resizeMode="contain"
          />
          <Text style={Styles.additionalDetails}>
            {`${questions} ${translations.QUIZ_QUESTIONS}`}
          </Text>
        </View>
        <View style={Styles.imageContainer}>
          <Image
            source={Images.SMALL_CLOCK}
            style={Styles.imageStyle}
            resizeMode="contain"
          />
          <Text
            style={Styles.additionalDetails}
          >
            {`${minutes} ${translations.QUIZ_MINUTES}`}
          </Text>
        </View>
        <View style={Styles.imageContainer}>
          <Image
            source={Images.GREEN_TICK}
            style={Styles.imageStyle}
            resizeMode="contain"
          />
          <Text
            style={Styles.additionalDetails}
          >
            {`${marks} ${translations.QUIZ_MARKS}`}
          </Text>
        </View>
      </View>
    );
  }

  function renderData() {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.upperContainerStyle}>
          <Text numberOfLines={1} style={Styles.subjectName}>
            {titleLengthShort(title)}
          </Text>
          {!lock ? (
            renderText()
          ) : (
            <View style={Styles.imagesContainer}>
              <View style={Styles.imageContainer}>
                <Image
                  source={Images.QUESTION_MARK}
                  style={Styles.imageStyle}
                  resizeMode="contain"
                />
                <Text style={Styles.additionalDetails}>
                  {`${questions} ${translations.QUIZ_QUESTIONS}`}
                </Text>
              </View>
              <View style={Styles.imageContainer}>
                <Image
                  source={Images.SMALL_CLOCK}
                  style={Styles.imageStyle}
                  resizeMode="contain"
                />
                <Text
                  style={Styles.additionalDetails}
                >
                  {`${minutes} ${translations.QUIZ_MINUTES}`}
                </Text>
              </View>
              <View style={Styles.imageContainer}>
                <Image
                  source={Images.GREEN_TICK}
                  style={Styles.imageStyle}
                  resizeMode="contain"
                />
                <Text
                  style={Styles.additionalDetails}
                >
                  {`${marks} ${translations.QUIZ_MARKS}`}
                </Text>
              </View>
            </View>
          )}
        </View>
        {!lock ? (
          renderImages()
        ) : (
          <TouchableOpacity onPress={buyQuiz} style={Styles.lowerContainerStyle}>
            <Image
              source={Images.QUIZ_LOCK}
              style={Styles.playButtonStyle}
              resizeMode="contain"
            />
            <Text style={Styles.quizTextStyle}>
              {translations.QUIZ_UNLOCK}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
  return renderData();
}

ContentCard.propTypes = {
  quizModuleData: propTypes.array,
  index: propTypes.number,
  title: propTypes.string,
  lock: propTypes.bool,
  startQuiz: propTypes.func,
  showResult: propTypes.func,
  resumeQuiz: propTypes.func,
  buyQuiz: propTypes.func,
};
