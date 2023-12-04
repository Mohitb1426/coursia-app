import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import SvgIcon from '../../../../common/SvgIcon';

export function GoalCard() {
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.titleTextStyle}>{translations.GOAL_CARD_TITLE}</Text>
        <Text style={styles.detailTextStyle}>
          {translations.GOAL_CARD_DETAIL}
          <Text style={styles.detailDarkTextStyle}>{translations.GOAL_CARD_DETAIL1}</Text>
          {translations.GOAL_CARD_DETAIL2}
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyle}>{translations.GOAL_CARD_BUTTON}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.trophyStyle}>
          <SvgIcon.GoalCardTrophy />
        </View>
        <View style={styles.targetStyle}>
          <SvgIcon.GoalCardTarget />
        </View>
      </View>
    </View>
  );
}
