/* eslint-disable react/prop-types */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

function SvgComponent({ color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      fill="none"
    >
      <Path
        fill={color}
        d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z"
      />
    </Svg>
  );
}
const Memo = memo(SvgComponent);
export default Memo;
