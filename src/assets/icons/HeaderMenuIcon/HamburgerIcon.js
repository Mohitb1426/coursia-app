import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect x={3} y={5.699} width={18} height={1.8} rx={0.9} fill="#000" />
      <Rect x={3} y={11.098} width={18} height={1.8} rx={0.9} fill="#000" />
      <Rect x={3} y={16.5} width={18} height={1.8} rx={0.9} fill="#000" />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
