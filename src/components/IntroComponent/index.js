import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Images from '../../common/Images';
import ButtonWithImage from '../ButtonWithImage';
import styles from './styles';
import { LocalizationContext } from '../../common/LocalizationProvider';

function IntroComponent({ onPressGotIt, isAnswerIntro = false }) {
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={Images.BG_BLUR}
        style={styles.backgroundImageContainer}
      >
        {isAnswerIntro ? (
          <>
            <View style={styles.bookMarkContainer}>
              <ButtonWithImage
                buttonImage={Images.TIME}
                buttonTitle={translations.QUIZ_RESULT_GRAPH_SCREEN_TYPE2}
                isButtonDisabled
                isAnswerIntro={isAnswerIntro}
              />
            </View>
            <View style={styles.curvedArrowContainer}>
              <Image
                source={Images.CURVED_ROUND_ARROW}
                style={styles.curvedArrowImageStyle}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.answerIntroDetailTextStyle}>
                {translations.QUIZ_ANSWER_SCREEN_INTRO_TITLE}
              </Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.innerContainer}>
              <ButtonWithImage
                buttonImage={Images.TIME}
                buttonTitle={translations.QUIZ_RESULT_GRAPH_SCREEN_TYPE2}
                isButtonDisabled
                isAnswerIntro={isAnswerIntro}
              />
            </View>

            <Image
              source={Images.CURVED_ROUND_ARROW}
              style={styles.roundArrowImageStyle}
            />
            <Text style={styles.detailTextStyle}>
              {translations.QUIZ_RESULT_GRAPH_SCREEN_INTRO_TITLE}
            </Text>
          </>
        )}
        <TouchableOpacity
          onPress={onPressGotIt}
          activeOpacity={0.6}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonTextStyle}>
            {translations.QUIZ_RESULT_GRAPH_SCREEN_INTRO_BUTTON}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

IntroComponent.propTypes = {
  onPressGotIt: propTypes.func,
  isAnswerIntro: propTypes.bool,
};

export default IntroComponent;
