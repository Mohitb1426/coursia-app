import { View, Text } from 'react-native';
import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import SvgIcon from '../../../../common/SvgIcon';

function AnalysisEmptyCard() {
  const { translations } = useContext(LocalizationContext);
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.container}>
      <SvgIcon.EmptyAnalysis />
      <View style={Styles.textContainer}>
        <Text style={Styles.textStyle}>{translations.B_B_EMPTY_DATA}</Text>
      </View>
    </View>
  );
}

export default AnalysisEmptyCard;
