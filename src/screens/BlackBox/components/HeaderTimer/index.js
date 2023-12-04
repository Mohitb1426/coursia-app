import { View, Text, TouchableOpacity } from 'react-native';
import React, {
  useContext, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../../../common/SvgIcon';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { ThemeContext } from '../../../../common/ThemeProvider';

function HeaderTimer(props) {
  const { questionTime, onTimeOut, onPressClose } = props;
  const Styles = useThemedStyles(styles);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (questionTime === 0) onTimeOut();
  }, [questionTime]);

  const convertTime = (count) => {
    let hours = Math.floor(count / 3600);
    let minutes = Math.floor(count / 60) - hours * 60;
    let seconds = parseFloat(count % 60).toFixed(0);
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <View style={Styles.container}>
      <SvgIcon.MenuDotIcon color={darkMode ? '#ffffff' : '#000000'} />
      <View style={Styles.middleContainer}>
        <SvgIcon.WatchIcon color={darkMode ? '#ffffff' : '#000000'} />
        <Text>{convertTime(questionTime)}</Text>
      </View>
      <TouchableOpacity onPress={onPressClose}>
        <SvgIcon.CloseQuizIcon color={darkMode ? '#ffffff' : '#000000'} />
      </TouchableOpacity>
    </View>
  );
}
HeaderTimer.propTypes = {
  questionTime: PropTypes.number,
  onTimeOut: PropTypes.func,
  onPressClose: PropTypes.func,
};
export default HeaderTimer;

// const startCount = useCallback((value) => {
//   const start = Date.now();
//   const updateTimer = () => {
//     const elapsed = Math.floor((Date.now() - start) / 1000);
//     const timeRemaining = Math.max(0, value - elapsed);
//     if (timeRemaining === 0) {
//       onTimeOut();
//       cancelAnimationFrame(animationFrameId);
//     } else {
//       animationFrameId = requestAnimationFrame(updateTimer);
//     }
//     updateTime(timeRemaining);
//     return convertTime(timeRemaining);
//   };
//   animationFrameId = requestAnimationFrame(updateTimer);
// }, []);

// useEffect(() => {
//   return () => {
//     cancelAnimationFrame(animationFrameId);
//   };
// }, [currentIndex]);

// const updateTime = (value) => {
//   const data = quizQuestionList;
//   data.map((item) => {
//     if (item.id === quizQuestionList[currentIndex].id) {
//       item.last_consumeTime = value;
//     }
//     return item;
//   });
//   dispatch(setQuestionList({ questions: data, exam_id: examId }));
// };
