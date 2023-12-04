import React from 'react';
import Svg, { Path } from 'react-native-svg';

function Activate() {
  return (
    <Svg
      width={14}
      height={14}
      fill="none"
    >
      <Path
        d="M7.667 5H6.334V3.668h1.333m0 6.667H6.334v-4h1.333m-.666-6a6.667 6.667 0 1 0 0 13.333A6.667 6.667 0 0 0 7 .334Z"
        fill="#2DA77D"
      />
    </Svg>
  );
}

export default Activate;
