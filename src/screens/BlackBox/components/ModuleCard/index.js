import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';

function ModuleCard(props) {
  const { translations } = useContext(LocalizationContext);
  const {
    cardTitle, totalQues, unAttemptQues, correctQues, inCorrectQues, onPressButton,
  } = props;
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.container}>
      {/* Title text Container */}
      <View style={Styles.titleContainer}>
        <Text style={Styles.titleTextStyle}>{cardTitle}</Text>
      </View>
      {/* Top Container for Total Question count and unattempted Question */}
      <View style={Styles.detailWrapper}>
        <View style={Styles.flexStyle}>
          <Text style={Styles.detailTitleStyle}>{translations.B_B_TOTAL_QUES}</Text>
          <Text style={Styles.detailValueStyle}>{totalQues}</Text>
        </View>
        <View style={Styles.flexStyle}>
          <Text style={Styles.detailTitleStyle}>{translations.B_B_UNATTEMPTED_QUES}</Text>
          <Text style={Styles.detailValueStyle}>{unAttemptQues}</Text>
        </View>
      </View>
      {/* Top Container for Correct Question count and Incorrect Question */}
      <View style={Styles.detailWrapper}>
        <View style={Styles.flexStyle}>
          <Text style={Styles.detailTitleStyle}>{translations.B_B_CORRECT_QUES}</Text>
          <Text style={Styles.detailValueStyle}>{correctQues}</Text>
        </View>
        <View style={Styles.flexStyle}>
          <Text style={Styles.detailTitleStyle}>{translations.B_B_INCORRECT_QUES}</Text>
          <Text style={Styles.detailValueStyle}>{inCorrectQues}</Text>
        </View>
      </View>
      {/* Retake Text Button Container */}
      <TouchableOpacity onPress={onPressButton} style={Styles.buttonContainer}>
        <Text style={Styles.buttonTextStyle}>{translations.B_B_RETAKE_TEST}</Text>
      </TouchableOpacity>
    </View>
  );
}

ModuleCard.propTypes = {
  cardTitle: PropTypes.string,
  totalQues: PropTypes.number,
  unAttemptQues: PropTypes.number,
  correctQues: PropTypes.number,
  inCorrectQues: PropTypes.number,
  onPressButton: PropTypes.func,
};

export default ModuleCard;
