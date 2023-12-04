/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 1l12.288 12M13.288 1L1 13" stroke="#8A8A8A" />
    </Svg>
  );
}

export default SvgComponent;
