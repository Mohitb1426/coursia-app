import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../../../common/SvgIcon';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function QuizDetailHeader(props) {
  const {
    totalData, currentIndex, data,
  } = props;
  const value = data[currentIndex];
  const Styles = useThemedStyles(styles);
  return (
    <View style={Styles.container}>
      <View style={Styles.quesCountContainer}>
        <Text style={Styles.quesTextStyle}>{`Question ${currentIndex + 1} of ${totalData}`}</Text>
      </View>
      <View style={Styles.marksDetailContainer}>
        <View style={Styles.marksContainer}>
          <SvgIcon.CorrectMarkIcon />
          <Text style={Styles.marksTextStyle('correct')}>{value?.weightage}</Text>
        </View>
        <View style={Styles.marksContainer}>
          <SvgIcon.WrongMarkIcon />
          <Text style={Styles.marksTextStyle('wrong')}>{value?.negative_weightage}</Text>
        </View>
        <View style={Styles.marksContainer}>
          <SvgIcon.UnattemptedMarkIcon />
          <Text style={Styles.marksTextStyle('unattempted')}>{value?.unattempted_weightage}</Text>
        </View>
      </View>
    </View>
  );
}

QuizDetailHeader.propTypes = {
  currentIndex: PropTypes.number,
  totalData: PropTypes.number,
  data: PropTypes.array,
};

export default QuizDetailHeader;
