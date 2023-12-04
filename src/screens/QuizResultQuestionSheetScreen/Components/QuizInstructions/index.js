import {
  View, Text, TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import SvgIcon from '../../../../common/SvgIcon';
import { Card } from '../../../QuizInstructionsScreen/components';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function QuizInstructions({ closeInstructions, title, details }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={Styles.container}>
      <View style={Styles.crossButtonContainer}>
        <TouchableOpacity
          onPress={closeInstructions}
          style={Styles.TermsSectionButton}
        >
          <SvgIcon.CloseIcon />
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
  closeInstructions: propTypes.func,
  title: propTypes.string,
  details: propTypes.object,
};

export default QuizInstructions;
