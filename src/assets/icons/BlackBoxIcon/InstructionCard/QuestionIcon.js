import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7 .95A6.047 6.047 0 0 0 .95 7 6.047 6.047 0 0 0 7 13.05 6.047 6.047 0 0 0 13.05 7 6.047 6.047 0 0 0 7 .95Zm0 11.163A5.119 5.119 0 0 1 1.887 7 5.119 5.119 0 0 1 7 1.887 5.119 5.119 0 0 1 12.113 7 5.119 5.119 0 0 1 7 12.113Z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={0.1}
      />
      <Path
        d="M6.624 9.016a1 1 0 0 0 0 2c.562 0 1.007-.468 1.007-1 0-.546-.458-1-1.007-1ZM6.745 4C5.549 4 5 4.709 5 5.187c0 .345.292.505.531.505.479 0 .284-.682 1.187-.682.443 0 .797.195.797.602 0 .478-.496.753-.788 1-.257.222-.593.585-.593 1.347 0 .46.124.593.487.593.434 0 .522-.195.522-.363 0-.46.01-.726.496-1.107.24-.186.992-.788.992-1.62C8.631 4.628 7.878 4 6.745 4Z"
        fill="#fff"
      />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
