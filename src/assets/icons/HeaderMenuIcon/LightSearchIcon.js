import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
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
      <Path
        d="m21 21-6-6m2-5a7.001 7.001 0 0 1-11.95 4.95A7 7 0 1 1 17 10Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
