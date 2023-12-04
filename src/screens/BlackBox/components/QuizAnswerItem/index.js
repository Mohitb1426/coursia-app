import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../../../common/SvgIcon';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function QuizAnswerItem(props) {
  const { title, isSelect, onPressAnswer } = props;
  const Styles = useThemedStyles(styles);
  return (
    <TouchableOpacity onPress={onPressAnswer} style={Styles.container}>
      {isSelect === 1 ? <SvgIcon.CheckedIcon /> : <SvgIcon.UnCheckedIcon />}
      <View style={Styles.textContainer}>
        <Text style={Styles.ansTextStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

QuizAnswerItem.propTypes = {
  title: PropTypes.string,
  isSelect: PropTypes.number,
  onPressAnswer: PropTypes.func,
};

export default QuizAnswerItem;
