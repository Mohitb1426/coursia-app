import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function AnswerComponentHeader(props) {
  const { title, attemptedPercent } = props;
  const percentage = attemptedPercent * 100;
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.textStyle}>{title}</Text>
      </View>
      <View style={Styles.progressBarOuterView}>
        <View
          style={[Styles.progressBarInnerView, { width: `${percentage}%` }]}
        />
      </View>
    </View>
  );
}

AnswerComponentHeader.propTypes = {
  title: PropTypes.string,
  attemptedPercent: PropTypes.number,
};

export default AnswerComponentHeader;
