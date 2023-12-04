import React, { useContext } from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import propTypes from 'prop-types';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { Card } from '../../../QuizInstructionsScreen/components/Card';
import Images from '../../../../common/Images';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function QuizInstructions({ details, closeInstructions, title }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  // const { appLanguage, setAppLanguage, translations } = useContext(LocalizationContext);
  // const en = 'en';
  // const id = 'ba';

  // App lang change
  // const changeLanguage = () => {
  //   if (appLanguage === id) {
  //     setAppLanguage(LANGUAGE_ENGLISH);
  //   }
  //   if (appLanguage === en) {
  //     setAppLanguage(LANGUAGE_TAMIL);
  //   }
  // };
  return (
    <View style={Styles.container}>
      <View style={Styles.crossButtonContainer}>
        <TouchableOpacity
          onPress={closeInstructions}
          style={Styles.TermsSectionButton}
        >
          <Image
            style={Styles.TermsSectionImage}
            source={Images.CLOSE_ICON}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={Styles.cardContainer}>
        <Card details={details} moduleTitle={title} />
      </View>

      <View style={Styles.instructionsContainer}>
        <View style={Styles.subContainer}>
          <Text style={Styles.headingTextStyle}>
            {translations.INSTRUCTION_HEADING}
          </Text>
        </View>
        <View style={Styles.textContainer}>
          <Text style={Styles.textStyle}>{translations.INSTRUCTIONS_TEXT_1}</Text>
          <Text style={Styles.textStyle}>{translations.INSTRUCTIONS_TEXT_2}</Text>
          <Text style={Styles.textStyle}>{translations.INSTRUCTIONS_TEXT_3}</Text>
          <Text style={Styles.textStyle}>{translations.INSTRUCTIONS_TEXT_4}</Text>
          <Text style={Styles.textStyle}>{translations.INSTRUCTIONS_TEXT_5}</Text>
        </View>
      </View>
    </View>
  );
}

QuizInstructions.propTypes = {
  details: propTypes.object,
  closeInstructions: propTypes.func,
  title: propTypes.string,
};

export default QuizInstructions;
