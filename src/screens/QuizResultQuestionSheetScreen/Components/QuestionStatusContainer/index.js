import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { ColorTheme } from '../../../../common/AppStyles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';

function QuestionStatusContainer({ openQuizInstruction }) {
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.touchableContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => openQuizInstruction()}>
          <Text style={styles.viewInstructionsButtonTextStyle}>
            {translations.VIEW_INSTRUCTIONS}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.questionStatusComponent}>
        <View style={styles.questionStatusLabel}>
          <View
            style={[styles.roundStatus, { backgroundColor: ColorTheme.BLUE_60 }]}
          />
          <Text style={[styles.statusTextStyle, { color: ColorTheme.BLUE_60 }]}>
            {translations.CORRECT}
          </Text>
        </View>
        <View style={styles.questionStatusLabel}>
          <View
            style={[styles.roundStatus, { backgroundColor: ColorTheme.RACE_PINK }]}
          />
          <Text style={[styles.statusTextStyle, { color: ColorTheme.RACE_PINK }]}>
            {translations.INCORRECT}
          </Text>
        </View>
        <View style={styles.questionStatusLabel}>
          <View
            style={[
              styles.roundStatus,
              styles.roundStatusBorder,
            ]}
          />
          <Text
            style={[
              styles.statusTextStyle,
              { color: ColorTheme.ADDITIONAL_DETAILS_COLOR },
            ]}
          >
            {translations.UNATTEMPTED_S}
          </Text>
        </View>
      </View>
    </View>
  );
}

QuestionStatusContainer.propTypes = {
  openQuizInstruction: PropTypes.func,
};

export default QuestionStatusContainer;
