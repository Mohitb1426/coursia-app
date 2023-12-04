import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { SvgUri } from 'react-native-svg';
import styles from './styles';
import SvgIcon from '../../../../common/SvgIcon';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function StatCard({
  headingText, stat, statText, cardIcon, onPressCard,
}) {
  const Styles = useThemedStyles(styles);
  return (
    <TouchableOpacity onPress={onPressCard} style={Styles.cardShadow}>
      <View style={Styles.statsCardStyle}>
        <View style={Styles.statsCardHeaderOuterStyle}>
          <View style={Styles.statCardHeaderInnerStyle}>
            <Text style={Styles.startsCardHeadingStyle}>{headingText}</Text>
            <View style={Styles.statsCardUnderlineStyle} />
          </View>
          <SvgUri height={28} width={28} uri={cardIcon} />
        </View>
        <Text style={Styles.startsCardStatsStyle}>{stat}</Text>
        <Text style={Styles.startsCardTypeStyle}>{statText}</Text>
        <SvgIcon.Ellipse style={Styles.ellipseStyle} />
      </View>
    </TouchableOpacity>
  );
}

StatCard.propTypes = {
  headingText: PropTypes.string,
  stat: PropTypes.number,
  statText: PropTypes.string,
  cardIcon: PropTypes.string,
  onPressCard: PropTypes.func,
};

export default StatCard;
