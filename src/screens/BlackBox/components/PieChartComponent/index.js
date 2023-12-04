import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function PieChartComponent(props) {
  const Styles = useThemedStyles(styles);
  const { correctQues, inCorrectQues, unAttemptedQues } = props;
  const data1 = [
    { value: inCorrectQues, svg: { fill: '#E5214E' }, key: 1 },
    { value: correctQues, svg: { fill: '#2DA77D' }, key: 2 },
    { value: unAttemptedQues, svg: { fill: '#8D8F91' }, key: 3 },
  ];
  return (
    <PieChart style={Styles.container} data={data1} />
  );
}

PieChartComponent.propTypes = {
  correctQues: PropTypes.number,
  inCorrectQues: PropTypes.number,
  unAttemptedQues: PropTypes.number,
};

export default PieChartComponent;
