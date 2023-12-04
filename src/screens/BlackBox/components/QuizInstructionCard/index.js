import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import SvgIcon from '../../../../common/SvgIcon';
import { LocalizationContext } from '../../../../common/LocalizationProvider';

function QuizInstructionCard({ cardTitle }) {
  const { translations } = useContext(LocalizationContext);
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.container}>
      <View style={Styles.topContainer}>
        <Text style={Styles.titleTextStyle}>{cardTitle}</Text>
        <Text style={Styles.detailTextStyle}>{translations.B_B_REATTEMPT}</Text>
        <View style={Styles.topDetailContainer}>
          <View style={Styles.topDetailRowContainer}>
            <SvgIcon.TimeIcon />
            <Text style={Styles.detailTopTextStyle}>{` 12 ${translations.B_B_MINS}`}</Text>
          </View>
          <View style={Styles.topDetailRowContainer}>
            <SvgIcon.MarksIcon />
            <Text style={Styles.detailTopTextStyle}>{` 12 ${translations.B_B_MARK}`}</Text>
          </View>
          <View style={Styles.topDetailRowContainer}>
            <SvgIcon.QuestionIcon />
            <Text style={Styles.detailTopTextStyle}>{` 12 ${translations.B_B_QUESTION}`}</Text>
          </View>
        </View>
      </View>
      <View style={Styles.bottomDetailContainer}>
        <View>
          <Text style={Styles.bottomDetailTextStyle}>{`${translations.B_B_MARK_PER_QUES}: 1`}</Text>
        </View>
        <View>
          <Text style={Styles.bottomDetailTextStyle}>{`${translations.B_B_NEGATIVE_MARK}: Nil`}</Text>
        </View>
      </View>
    </View>
  );
}

QuizInstructionCard.propTypes = {
  cardTitle: PropTypes.string,
};

export default QuizInstructionCard;
