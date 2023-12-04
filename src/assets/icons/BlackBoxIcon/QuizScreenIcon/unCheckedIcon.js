import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={10} cy={10} r={9.5} fill="#EEE" stroke="#DEDEDE" />
    </Svg>
  );
}

export default SvgComponent;
