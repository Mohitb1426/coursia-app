import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={312}
      height={1}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        stroke="#9F9F9F"
        strokeLinecap="round"
        strokeDasharray="2 5"
        d="M.5.5h311"
      />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
