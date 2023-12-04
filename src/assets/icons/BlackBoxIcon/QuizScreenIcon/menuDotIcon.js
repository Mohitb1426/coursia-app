/* eslint-disable react/prop-types */
import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function SvgComponent(props) {
  const { color = '#000000' } = props;
  return (
    <Svg
      width={4}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={2} cy={2} r={2} fill={color} />
      <Circle cx={2} cy={8} r={2} fill={color} />
      <Circle cx={2} cy={14} r={2} fill={color} />
    </Svg>
  );
}

export default SvgComponent;
