import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function ScoreTextCard(props) {
  const { title, value, color } = props;
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.container}>
      <View style={Styles.colorPoint(color)} />
      <View style={Styles.textContainer}>
        <Text style={Styles.titleTextStyle}>{title}</Text>
        <Text style={Styles.scoreTextStyle}>{value}</Text>
      </View>
    </View>
  );
}

ScoreTextCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  color: PropTypes.string,
};

export default ScoreTextCard;
