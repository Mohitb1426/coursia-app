/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4 24h24v-2.667H4V24zm6-6.667h18v-2.666H10v2.666zM4 8v2.667h24V8H4z"
        fill="#F68806"
      />
    </Svg>
  );
}

export default SvgComponent;
