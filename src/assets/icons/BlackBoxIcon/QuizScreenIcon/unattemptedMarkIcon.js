import * as React from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={13}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={6.5} cy={6.5} r={6.5} fill="#B8B8B8" />
      <Rect x={3} y={6} width={6.5} height={1} rx={0.5} fill="#fff" />
    </Svg>
  );
}

export default SvgComponent;
