import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { PieChartComponent, ScoreTextCard } from '..';
import SvgIcon from '../../../../common/SvgIcon';

function AnalysisCard(props) {
  const {
    cardTitle,
    onPressCard, totalQues, correctQues, inCorrectQues, unAttemptedQues,
  } = props;
  const { translations } = useContext(LocalizationContext);
  const Styles = useThemedStyles(styles);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPressCard}
      style={Styles.container}
    >
      {/* Card Header Container */}
      <View style={Styles.headerContainer}>
        <View style={Styles.imageContainer}>
          <SvgIcon.AnalysisCardIcon />
        </View>
        <View style={Styles.cardTitleContainer}>
          <Text style={Styles.cardTitleStyle}>{cardTitle}</Text>
        </View>
      </View>
      {/* Card Detail Container */}
      <View style={Styles.detailContainer}>
        <View style={Styles.pieChartContainer}>
          <PieChartComponent
            correctQues={correctQues}
            inCorrectQues={inCorrectQues}
            unAttemptedQues={unAttemptedQues}
          />
        </View>
        <View style={Styles.scoreDetailContainer}>
          <ScoreTextCard color="#7E72C4" title={translations.B_B_TOTAL} value={totalQues} />
          <ScoreTextCard color="#2DA77D" title={translations.B_B_CORRECT} value={correctQues} />
          <ScoreTextCard color="#E5214E" title={translations.B_B_INCORRECT} value={inCorrectQues} />
          <ScoreTextCard color="#8D8F91" title={translations.B_B_UNATTEMPTED} value={unAttemptedQues} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

AnalysisCard.propTypes = {
  cardTitle: PropTypes.string,
  onPressCard: PropTypes.func,
  totalQues: PropTypes.number,
  correctQues: PropTypes.number,
  inCorrectQues: PropTypes.number,
  unAttemptedQues: PropTypes.number,
};
export default AnalysisCard;
