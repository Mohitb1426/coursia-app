import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import styles from './styles';

function SummaryCard({
  cardIcon, value, detailTitle, showLoader,
}) {
  const Styles = useThemedStyles(styles);
  const pad = (item) => {
    if (item === 0) {
      return item;
    }
    if (item <= 9) {
      return (`0${Math.floor(item)}`).slice(-2);
    }
    return item;
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.iconContainer}>
        {cardIcon}
      </View>
      <View style={Styles.textContainer}>
        {showLoader ? <ActivityIndicator size="large" color="#2DA77D" /> : <Text numberOfLines={1} style={Styles.titleTextStyle}>{pad(value)}</Text>}
      </View>
      <View style={Styles.detailTextContainer}>
        <Text numberOfLines={1} style={Styles.detailTextStyle}>{detailTitle}</Text>
      </View>
    </View>
  );
}

SummaryCard.propTypes = {
  cardIcon: PropTypes.any,
  value: PropTypes.number,
  detailTitle: PropTypes.string,
  showLoader: PropTypes.bool,
};

export default SummaryCard;
