import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={26}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 2a11 11 0 1 0 0 22 11 11 0 0 0 0-22ZM8.39 14.151l2.306 2.305a1.22 1.22 0 0 0 1.728 0l5.187-5.184a1.222 1.222 0 0 0-1.728-1.728l-4.322 4.322-1.442-1.443A1.222 1.222 0 0 0 8.39 14.15Z"
        fill="#56A3CE"
      />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
