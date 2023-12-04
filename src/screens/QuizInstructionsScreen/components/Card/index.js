import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import propTypes from 'prop-types';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { ColorTheme } from '../../../../common/AppStyles';
import Images from '../../../../common/Images';

export function Card({ details, moduleTitle }) {
  const title = moduleTitle || '';
  const questions = details?.questions || 0;
  const minutes = details?.mins || 0;
  const marks = details?.marks || 0;
  const marksForCorrect = details?.marksForCorrect || 0;
  const marksForWrong = details?.marksForWrong || 0;
  const differentMarking = details?.different_Marking || 0;

  const { translations } = useContext(LocalizationContext);

  return (
    <LinearGradient
      start={{ x: 1, y: 0.5 }}
      locations={[0.5, 1]}
      end={{ x: 0.1, y: 0.3 }}
      colors={[ColorTheme.DARK_RED, ColorTheme.RACE_PINK]}
      style={styles.cardStyles}
    >
      <View style={styles.mainContainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.subContainerRow}>
            <Image source={Images.SMALL_CLOCK} style={styles.imageStyle} />
            <Text
              style={styles.textStyle}
            >
              {`${minutes} ${translations.QUIZ_MINUTES}`}

            </Text>
          </View>

          <View style={styles.subContainerRowSecond}>
            <Image source={Images.GREEN_TICK} style={styles.imageStyle} />
            <Text
              style={styles.textStyle}
            >
              {`${marks} ${translations.QUIZ_MARKS}`}

            </Text>
          </View>

          <View style={styles.subContainerRowThird}>
            <Image
              source={Images.FILLED_QUESTION_MARK}
              style={styles.imageStyle}
            />
            <Text
              style={styles.textStyle}
            >
              {`${questions} ${translations.QUIZ_QUESTIONS}`}

            </Text>
          </View>
        </View>
        {!differentMarking && (
        <View style={styles.thirdContainer}>
          <View style={styles.subContainerOne}>
            <Text
              style={styles.textStyle}
            >
              {`${translations.MARK_FOR_CORRECT}${marksForCorrect}`}

            </Text>
          </View>

          <View style={styles.subContainerSecond}>
            <Text
              style={styles.textStyle}
            >
              {`${translations.MARK_FOR_WRONG}${marksForWrong}`}

            </Text>
          </View>
        </View>
        )}

      </View>
    </LinearGradient>
  );
}

Card.propTypes = {
  details: propTypes.object,
  moduleTitle: propTypes.string,
};
